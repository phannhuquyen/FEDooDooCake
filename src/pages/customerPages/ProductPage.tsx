import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom"; // Thêm hook này
import { categoryApi } from "../../api/categoryApi";
import CategorySidebar from "../../components/cus/category/CategorySidebar";
import ProductList from "../../components/cus/product/ProductList";
import { productApi } from "../../api/productApi";

const ProductPage = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);
  const [categoryCurrent, setCategoryCurrent] = useState("all");
  const [products, setProducts] = useState<any[]>([]);
  const [sortType, setSortType] = useState("");

  // Lấy search keyword từ URL (?search=...)
  const [searchParams] = useSearchParams();
  const searchKeyword = searchParams.get("search") || "";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [catRes, prodRes] = await Promise.all([
          categoryApi.getAll(),
          productApi.getAll(),
        ]);
        setCategories(catRes.data);
        setProducts(prodRes.data);
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Cập nhật useMemo để lọc cả Search + Category + Sort
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // 1. Lọc theo Search Keyword (Không phân biệt hoa thường)
    if (searchKeyword.trim() !== "") {
      const keyword = searchKeyword.toLowerCase();
      result = result.filter(
        (p) => p.name.toLowerCase().includes(keyword), // Giả sử field tên sp là 'name'
      );
    }

    // 2. Lọc theo Category
    if (categoryCurrent !== "all") {
      result = result.filter((p) => p.categoryId === categoryCurrent);
    }

    // 3. Sắp xếp
    if (sortType === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortType === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, categoryCurrent, sortType, searchKeyword]); // Thêm searchKeyword vào dependency

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <CategorySidebar
        categories={categories}
        categoryCurrent={categoryCurrent}
        setCategoryCurrent={setCategoryCurrent}
      />
      <div className="flex-1">
        <div className="flex-1 min-w-0 py-8">
          <div className="w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 px-4 sm:px-0">
              <div>
                <h1 className="text-3xl font-bold text-[#181114]">
                  {searchKeyword
                    ? `Kết quả tìm kiếm: "${searchKeyword}"`
                    : "Menu mới nhất"}
                </h1>
                {searchKeyword && (
                  <p className="text-sm text-gray-500 mt-1">
                    Tìm thấy {filteredProducts.length} sản phẩm
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2 mt-4 sm:mt-0">
                <span className="text-sm text-gray-600">Sắp xếp theo</span>
                <select
                  className="form-select px-3 py-2 rounded-full text-sm font-medium border-none bg-black/5"
                  value={sortType}
                  onChange={(e) => setSortType(e.target.value)}
                >
                  <option value="">Mới nhất</option>
                  <option value="price-asc">Giá thấp đến cao</option>
                  <option value="price-desc">Giá cao đến thấp</option>
                </select>
              </div>
            </div>

            {loading ? (
              <div>Đang tải danh sách sản phẩm...</div>
            ) : filteredProducts.length < 1 ? (
              <div>Không có sản phẩm nào</div>
            ) : (
              <ProductList products={filteredProducts} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

import { useEffect, useState } from "react";
import { categoryApi } from "../../api/categoryApi";
import { productApi } from "../../api/productApi";
import ProductHeader from "../../components/admin/product/ProductHeader";
import CategorySidebar from "../../components/admin/product/CategorySidebar";
import ProductToolbar from "../../components/admin/product/ProductToolbar";
import LoadingSpinner from "../../components/common/LoadingSpinner";

const AdminProductPage = () => {
  const [categories, setCategories] = useState<any[]>([]);

  const [products, setProducts] = useState<any[]>([]);

  // category đang chọn
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [loadingCate, setLoadingCate] = useState(false);
  const [loadingProducts, setLoadingProducts] = useState(false);
  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoadingCate(true);
      const res = await categoryApi.getAll();
      setCategories(res.data);
    } catch (error: any) {
      console.error(error?.response?.data.message);
    } finally {
      setLoadingCate(false);
    }
  };

  const fetchProducts = async () => {
    try {
      setLoadingProducts(true);
      const res = await productApi.getAll();
      setProducts(res.data);
    } catch (error: any) {
      console.error(error?.response?.data.message);
    } finally {
      setLoadingProducts(false);
    }
  };

  // lọc product theo category
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.categoryId === selectedCategory);

  return (
    <div className="w-full max-w-full mx-auto flex flex-col h-full">
      <ProductHeader/>

      <div className="grid grid-cols-12 gap-6 flex-1 overflow-hidden">
        <CategorySidebar
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          fetchCategories={fetchCategories}
        />

        <ProductToolbar
          products={filteredProducts}
          fetchProducts={fetchProducts}
        />
      </div>
      {(loadingCate || loadingProducts) && <LoadingSpinner fullScreen />}
    </div>
  );
};

export default AdminProductPage;

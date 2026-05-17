import { useEffect, useState } from "react";
import { productApi } from "../../api/productApi";
import FeaturedProductsList from "../../components/admin/featured/FeaturedProductsList";
import ProductSelectList from "../../components/admin/featured/ProductSelectList";

const AdminFeaturedProductsPage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await productApi.getAll();

      setProducts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const featuredProducts = products.filter((item: any) => item.isFeatured);

  const normalProducts = products.filter((item: any) => !item.isFeatured);

  return (
    <div className="p-6 space-y-10">
      {/* featured */}
      <FeaturedProductsList
        products={featuredProducts}
        fetchProducts={fetchProducts}
      />

      {/* select */}
      <ProductSelectList
        products={normalProducts}
        fetchProducts={fetchProducts}
      />
    </div>
  );
};

export default AdminFeaturedProductsPage;

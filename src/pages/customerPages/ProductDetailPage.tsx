import { useEffect, useState } from "react";
import ProductDetail from "../../components/cus/productdetail/ProductDetail";
import { useParams } from "react-router-dom";
import { productApi } from "../../api/productApi";

const ProductDetailPage = () => {
  const { id: productId } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!productId) return;
        const res = await productApi.getById(productId);
        setProduct(res.data);
      } catch (error: any) {
        console.error(error?.response.data.message);
      }
    };
    fetchProduct();
  }, [productId]);
  return (
    <div>
      {!product ? (
        <div>Đang tải chi tiết sản phẩm...</div>
      ) : (
        <ProductDetail product={product} />
      )}
    </div>
  );
};

export default ProductDetailPage;

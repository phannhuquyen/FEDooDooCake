import ProductSelectCard from "./ProductSelectCard";

const ProductSelectList = ({ products, fetchProducts }: any) => {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold">Chọn sản phẩm nổi bật</h2>

        <p className="text-gray-500 mt-1">
          Thêm sản phẩm vào danh sách nổi bật
        </p>
      </div>

      <div
        className="
          grid grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-5
        "
      >
        {products.map((product: any) => (
          <ProductSelectCard
            key={product._id}
            product={product}
            fetchProducts={fetchProducts}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSelectList;

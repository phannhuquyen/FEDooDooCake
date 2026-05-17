import FeaturedProductCard from "./FeaturedProductCard";

const FeaturedProductsList = ({ products, fetchProducts }: any) => {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold">Sản phẩm nổi bật</h2>

        <p className="text-gray-500 mt-1">
          Danh sách sản phẩm đang được hiển thị nổi bật
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
          <FeaturedProductCard
            key={product._id}
            product={product}
            fetchProducts={fetchProducts}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProductsList;

import { productApi } from "../../../api/productApi";
import MyButton from "../../buttons/MyButton";

const FeaturedProductCard = ({ product, fetchProducts }: any) => {
  const handleRemove = async () => {
    try {
      await productApi.updateFeatured(product._id, false);

      fetchProducts?.();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="
        bg-white rounded-2xl
        overflow-hidden
        border border-yellow-200
      "
    >
      <img
        src={product.images?.[0]}
        alt=""
        className="w-full h-52 object-cover"
      />

      <div className="p-4 space-y-3">
        <h3 className="font-bold line-clamp-2">{product.name}</h3>

        <p className="text-highlight font-bold">
          {product.price.toLocaleString()}₫
        </p>

        <MyButton
          onClick={handleRemove}
          className="
            w-full bg-red-100
            text-red-700
            py-2 rounded-xl
          "
        >
          Bỏ nổi bật
        </MyButton>
      </div>
    </div>
  );
};

export default FeaturedProductCard;

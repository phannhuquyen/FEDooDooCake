import { productApi } from "../../../api/productApi";
import MyButton from "../../buttons/MyButton";

const ProductSelectCard = ({ product, fetchProducts }: any) => {
  const handleAdd = async () => {
    try {
      await productApi.updateFeatured(product._id, true);

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
        border border-gray-200
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
          onClick={handleAdd}
          className="
            w-full bg-highlight
            text-white
            py-2 rounded-xl
          "
        >
          Chọn nổi bật
        </MyButton>
      </div>
    </div>
  );
};

export default ProductSelectCard;

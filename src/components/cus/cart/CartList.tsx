import type { YourCart } from "../../../pages/customerPages/CartPage";
import CartCard from "./CartCard";

type Props = {
  yourCart: YourCart[];

  setYourCart: React.Dispatch<
    React.SetStateAction<YourCart[]>
  >;

  selectedItems: string[];

  setSelectedItems: React.Dispatch<
    React.SetStateAction<string[]>
  >;
};

const CartList = ({
  yourCart,
  setYourCart,
  selectedItems,
  setSelectedItems,
}: Props) => {
  return (
    <div className="w-full lg:w-2/3 space-y-4">
      <div className="hidden md:grid grid-cols-[auto_1fr_auto_auto_auto_auto] items-center gap-4 pb-2 border-b border-gray-200 text-xs font-semibold uppercase text-gray-500 ">
        <div className="w-10"></div>
        <div className="col-start-2">Sản phẩm</div>
        <div className="col-start-3 text-center">
          Số lượng
        </div>
        <div className="col-start-4 text-right">
          Đơn giá
        </div>
        <div className="col-start-5 text-right">
          Thành tiền
        </div>
        <div className="col-start-6"></div>
      </div>

      {yourCart.map((item) => (
        <CartCard
          key={item._id}
          cartItem={item}
          yourCart={yourCart}
          setYourCart={setYourCart}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      ))}
    </div>
  );
};

export default CartList;
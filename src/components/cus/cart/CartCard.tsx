import { useState } from "react";
import type { YourCart } from "../../../pages/customerPages/CartPage";
import { formatCurrency } from "../../../utils/formatCurrency";
import { IconDelete } from "../../../utils/icons";
import MyButton from "../../buttons/MyButton";
import ConfirmModal from "../../common/ConfirmModal";
import { userApi } from "../../../api/userApi";

type Props = {
  cartItem: YourCart;

  yourCart: YourCart[];

  setYourCart: React.Dispatch<
    React.SetStateAction<YourCart[]>
  >;

  selectedItems: string[];

  setSelectedItems: React.Dispatch<
    React.SetStateAction<string[]>
  >;
};

const CartCard = ({
  cartItem,
  yourCart,
  setYourCart,
  selectedItems,
  setSelectedItems,
}: Props) => {
  const [openDelete, setOpenDelete] =
    useState(false);

  // checkbox
  const handleSelect = () => {
    if (selectedItems.includes(cartItem._id)) {
      setSelectedItems(
        selectedItems.filter(
          (id) => id !== cartItem._id,
        ),
      );
    } else {
      setSelectedItems([
        ...selectedItems,
        cartItem._id,
      ]);
    }
  };

  // quantity
  const handleQuantity = async(
    type: "increase" | "decrease",
  ) => {
    const updatedCart = yourCart.map((item) => {
      if (item._id !== cartItem._id) return item;

      let newQuantity = item.quantity;

      if (type === "increase") {
        newQuantity += 1;
      }

      if (
        type === "decrease" &&
        item.quantity > 1
      ) {
        newQuantity -= 1;
      }

      return {
        ...item,
        quantity: newQuantity,
        totalPrice: item.price * newQuantity,
      };
    });

    setYourCart(updatedCart);

    // const userId = localStorage.getItem("userId") as string

    // try {
    //   await userApi.addToCart(userId, { productId: cartItem.productId, quantity: cartItem.quantity- })
    // } catch (error) {
      
    // }
  };

  // delete
  const handleDelete = async () => {
    try {
      const userId = localStorage.getItem(
        "userId",
      ) as string;

      await userApi.deleteCartItem(
        userId,
        cartItem.productId,
      );

      setYourCart(
        yourCart.filter(
          (item) => item._id !== cartItem._id,
        ),
      );

      setSelectedItems(
        selectedItems.filter(
          (id) => id !== cartItem._id,
        ),
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex flex-col md:grid md:grid-cols-[auto_1fr_auto_auto_auto_auto] md:items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
        {/* checkbox */}
        <div className="flex items-center justify-center">
          <input
            type="checkbox"
            checked={selectedItems.includes(
              cartItem._id,
            )}
            onChange={handleSelect}
            className="h-5 w-5 rounded border-gray-300 text-highlight"
          />
        </div>

        {/* product */}
        <div className="flex items-center gap-4">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg h-20 w-20 shrink-0"
            style={{
              backgroundImage: `url(${cartItem.image})`,
            }}
          ></div>

          <div className="flex flex-1 flex-col justify-center">
            <p className="text-base font-semibold text-gray-800 ">
              {cartItem.name}
            </p>
          </div>
        </div>

        {/* quantity */}
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2 text-gray-800 ">
            <MyButton
              onClick={() =>
                handleQuantity("decrease")
              }
              className="text-lg font-medium flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
            >
              -
            </MyButton>

            <input
              type="number"
              value={cartItem.quantity}
              readOnly
              className="text-base font-medium w-8 text-center bg-transparent focus:outline-none border-none"
            />

            <MyButton
              onClick={() =>
                handleQuantity("increase")
              }
              className="text-lg font-medium flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
            >
              +
            </MyButton>
          </div>
        </div>

        {/* price */}
        <div className="text-sm text-right text-gray-500 ">
          {formatCurrency(cartItem.price)}
        </div>

        {/* total */}
        <div className="text-base font-semibold text-right text-gray-800 ">
          {formatCurrency(cartItem.totalPrice)}
        </div>

        {/* delete */}
        <div className="flex justify-end">
          <MyButton
            onClick={() => setOpenDelete(true)}
            className="text-gray-400 rounded-4xl p-2 bg-gray-200 hover:text-red-500 transition-colors"
          >
            <IconDelete />
          </MyButton>
        </div>
      </div>

      {/* modal */}
      <ConfirmModal
        open={openDelete}
        title="Xóa sản phẩm"
        message="Bạn có chắc muốn xóa sản phẩm này khỏi giỏ hàng?"
        confirmText="Xóa"
        cancelText="Hủy"
        onConfirm={handleDelete}
        onClose={() => setOpenDelete(false)}
      />
    </>
  );
};

export default CartCard;
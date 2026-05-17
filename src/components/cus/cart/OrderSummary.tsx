import { useState } from "react";
import MyButton from "../../buttons/MyButton";
import type { YourCart } from "../../../pages/customerPages/CartPage";
import { formatCurrency } from "../../../utils/formatCurrency";
import { useNavigate } from "react-router-dom";
import AlertModal from "../../common/AleartModal";

type Props = {
  yourCart: YourCart[];
  selectedItems: string[];
};

const OrderSummary = ({
  yourCart,
  selectedItems,
}: Props) => {
  const navigate = useNavigate();

  const [openAlert, setOpenAlert] =
    useState(false);

  // các sản phẩm được tick
  const selectedCart = yourCart.filter((item) =>
    selectedItems.includes(item._id),
  );

  // tổng số lượng sản phẩm
  const totalQuantity = selectedCart.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  // tạm tính
  const subTotal = selectedCart.reduce(
    (sum, item) => sum + item.totalPrice,
    0,
  );

  // phí ship
  const shippingFee =
    selectedCart.length > 0 ? 25000 : 0;

  // tổng cộng
  const total = subTotal + shippingFee;

  // checkout
 const handleCheckout = () => {
  if (selectedCart.length === 0) {
    setOpenAlert(true);
    return;
  }

  navigate("/pay", {
    state: {
      selectedCart,
      totalQuantity,
      subTotal,
      shippingFee,
      total,
    },
  });
};
  return (
    <>
      <div className="w-full lg:w-1/3 ">
        <div className="sticky top-28 bg-white p-6 rounded-xl shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-gray-800 ">
            Tóm tắt đơn hàng
          </h2>

          {/* info */}
          <div className="space-y-3 text-sm text-gray-500">
            <div className="flex justify-between">
              <span>
                Tạm tính ({totalQuantity} sản phẩm)
              </span>

              <span className="font-medium text-gray-800">
                {formatCurrency(subTotal)}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Phí vận chuyển</span>

              <span className="font-medium text-gray-800">
                {formatCurrency(shippingFee)}
              </span>
            </div>
          </div>

          <div className="border-t border-gray-200"></div>

          {/* total */}
          <div className="flex justify-between items-center text-lg">
            <span className="font-semibold text-gray-800 ">
              Tổng cộng
            </span>

            <span className="font-bold text-highlight text-2xl">
              {formatCurrency(total)}
            </span>
          </div>

          {/* button */}
          <MyButton
            onClick={handleCheckout}
            className="w-full bg-highlight text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <span>
              Tiến hành đặt hàng {"->"}
            </span>
          </MyButton>
        </div>
      </div>

      {/* alert */}
      <AlertModal
        open={openAlert}
        type="warning"
        title="Thông báo"
        message="Vui lòng chọn ít nhất 1 sản phẩm để đặt hàng"
        onClose={() => setOpenAlert(false)}
      />
    </>
  );
};

export default OrderSummary;
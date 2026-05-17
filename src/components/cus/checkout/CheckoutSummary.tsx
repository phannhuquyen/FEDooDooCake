import { useState } from "react";
import type { YourCart } from "../../../pages/customerPages/CartPage";
import { formatCurrency } from "../../../utils/formatCurrency";
import MyButton from "../../buttons/MyButton";
import CheckoutItem from "./CheckoutItem";
import CreateOrderButton from "./CreateOrderButton";

type Props = {
  selectedCart: YourCart[];

  totalQuantity: number;

  subTotal: number;

  shippingFee: number;

  total: number;

  checkoutInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };

  paymentMethod: string;
};

const CheckoutSummary = ({
  selectedCart,
  totalQuantity,
  subTotal,
  shippingFee,
  total,
  checkoutInfo,
  paymentMethod,
}: Props) => {
  const [promotionCode, setPromotionCode] = useState("");

  const [promotionValue, setPromotionValue] = useState(0);

  const [promotionId, setPromotionId] = useState("");

  const [loadingPromotion, setLoadingPromotion] = useState(false);

  // tổng sau giảm giá
  const finalTotal = total - promotionValue > 0 ? total - promotionValue : 0;

  const userId = localStorage.getItem("userId");

  const orderData = {
    userId,

    name: checkoutInfo.name,

    email: checkoutInfo.email,

    phone: checkoutInfo.phone,

    address: checkoutInfo.address,

    items: selectedCart.map((item) => ({
      productId: item.productId,

      name: item.name,

      images: [item.image],

      quantity: item.quantity,

      price: item.price,
    })),

    totalPrice: finalTotal,

    fee: shippingFee,

    promotion: 0,

    paymentMethod,
  };

  // validate
  const validateCheckout = () => {
    if (!checkoutInfo.name.trim()) {
      return "Vui lòng nhập họ tên";
    }

    if (!checkoutInfo.phone.trim()) {
      return "Vui lòng nhập số điện thoại";
    }

    if (!checkoutInfo.address.trim()) {
      return "Vui lòng nhập địa chỉ";
    }

    if (!checkoutInfo.email.trim()) {
      return "Vui lòng nhập địa chỉ";
    }

    return null;
  };

  // apply promotion
  const handleApplyPromotion = async () => {
    try {
      if (!promotionCode.trim()) {
        return;
      }

      setLoadingPromotion(true);

      // xử lý mã giảm giá ở đây
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingPromotion(false);
    }
  };

  return (
    <>
      <div className="sticky top-28 bg-white p-6 rounded-xl shadow-sm space-y-6">
        {/* title */}
        <h2 className="text-xl font-bold text-gray-800">Tổng quan đơn hàng</h2>

        {/* items */}
        <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
          {selectedCart.map((item) => (
            <CheckoutItem key={item._id} item={item} />
          ))}
        </div>

        <div className="border-t border-gray-200"></div>

        {/* promotion */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800">Mã giảm giá</h3>

          <div className="flex gap-2">
            <input
              type="text"
              value={promotionCode}
              onChange={(e) => setPromotionCode(e.target.value)}
              className="
                block w-full rounded-lg
                border-gray-300 bg-gray-50
                px-4 border
                focus:border-highlight
                focus:ring-highlight
              "
              placeholder="Nhập mã giảm giá"
            />

            <MyButton
              onClick={handleApplyPromotion}
              disabled={loadingPromotion}
              className="
                bg-highlight/20
                text-highlight
                font-bold
                py-2 px-4
                rounded-lg
                hover:bg-highlight/30
                transition-colors
                shrink-0
              "
            >
              {loadingPromotion ? "Đang áp dụng..." : "Áp dụng"}
            </MyButton>
          </div>

          {promotionValue > 0 && (
            <p className="text-sm text-green-600 font-medium">
              Đã giảm {formatCurrency(promotionValue)}
            </p>
          )}
        </div>

        <div className="border-t border-gray-200"></div>

        {/* price */}
        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Tạm tính ({totalQuantity} SP)</span>

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

          {promotionValue > 0 && (
            <div className="flex justify-between text-green-600">
              <span>Giảm giá</span>

              <span>-{formatCurrency(promotionValue)}</span>
            </div>
          )}
        </div>

        <div className="border-t border-gray-200"></div>

        {/* total */}
        <div className="flex justify-between items-center text-lg">
          <span className="font-semibold text-gray-800">Tổng cộng</span>

          <span className="font-bold text-highlight text-2xl">
            {formatCurrency(finalTotal)}
          </span>
        </div>

        {/* create order */}
        <CreateOrderButton
          orderData={orderData}
          validateCheckout={validateCheckout}
        />

        <MyButton
          to="/cart"
          className="
            w-full text-highlight
            font-semibold py-3 px-4
            rounded-lg
            hover:bg-highlight/10
            transition-colors
            flex items-center
            justify-center gap-2
            text-sm
          "
        >
          Quay lại giỏ hàng
        </MyButton>
      </div>
    </>
  );
};

export default CheckoutSummary;

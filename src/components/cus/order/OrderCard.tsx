import { useState } from "react";
import { orderApi } from "../../../api/orderApi";
import { ORDER_STATUS } from "../../../constants/orderStatus";
import { formatCurrency } from "../../../utils/formatCurrency";
import { formatOrderStatus } from "../../../utils/formatOrderStatus";
import MyButton from "../../buttons/MyButton";
import ConfirmModal from "../../common/ConfirmModal";
import type { OrderType } from "./OrderTabs";

type Props = {
  order: any;
  setOrders: React.Dispatch<React.SetStateAction<OrderType[]>>;
};

const OrderCard = ({ order, setOrders }: Props) => {
  const [openCancel, setOpenCancel] = useState(false);
  const [loading, setLoading] = useState(false);

  function styleStatus() {
    switch (order.status) {
      case "pending":
        return "bg-blue-100 text-blue-800 ";

      case "confirmed":
        return "bg-yellow-100 text-yellow-800 ";

      case "shipping":
        return "bg-yellow-100 text-yellow-800 ";

      case "completed":
        return "bg-green-100 text-green-800 ";

      case "cancelled":
        return "bg-error-bg text-error-text";

      default:
        return "";
    }
  }
  const handleCancelled = async () => {
    try {
      setLoading(true);

      await orderApi.cancel(order._id);

      setOrders((prev) =>
        prev.map((item) =>
          item._id === order._id
            ? {
                ...item,
                status: ORDER_STATUS.CANCELLED,
              }
            : item,
        ),
      );
    } catch (error: any) {
      console.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-4 border-b border-gray-200">
          {/* mã đơn */}
          <div className="min-w-0">
            <p className="text-sm text-gray-500 truncate">Mã đơn hàng</p>

            <p className="font-bold text-gray-800 wrap-break-word">
              #{order._id}
            </p>
          </div>

          {/* ngày đặt */}
          <div className="min-w-0">
            <p className="text-sm text-gray-500">Ngày đặt</p>

            <p className="font-bold text-gray-800">
              {new Date(order.createdAt).toLocaleDateString("vi-VN")}
            </p>
          </div>

          {/* tổng tiền */}
          <div className="min-w-0">
            <p className="text-sm text-gray-500">Tổng tiền</p>

            <p className="font-bold text-lg text-highlight">
              {formatCurrency(order.totalPrice)}
            </p>
          </div>

          {/* status */}
          <div className="md:text-right">
            <span
              className={`inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full ${styleStatus()}`}
            >
              {formatOrderStatus(order.status)}
            </span>
          </div>
        </div>

        {/* bottom */}
        <div className="pt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MyButton
              to={`/orders/${order._id}`}
              className="text-highlight font-semibold py-2 px-4 rounded-lg hover:bg-highlight/10 transition-colors flex items-center justify-center gap-2 text-sm"
            >
              Xem chi tiết
            </MyButton>

            {/* <MyButton className="bg-highlight text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm">
              Đặt lại
            </MyButton> */}
            {order.status == "pending" && (
              <MyButton
                disabled={loading}
                onClick={() => {
                  setOpenCancel(true);
                }}
                className="bg-highlight text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm"
              >
                {loading ? "Đang hủy..." : "Hủy đơn"}
              </MyButton>
            )}
          </div>
        </div>
      </div>
      <ConfirmModal
        open={openCancel}
        title="Hủy đơn hàng"
        message="Bạn có chắc muốn hủy đơn hàng này không?"
        confirmText="Xác nhận hủy"
        cancelText="Đóng"
        onConfirm={handleCancelled}
        onClose={() => setOpenCancel(false)}
      />
    </div>
  );
};

export default OrderCard;

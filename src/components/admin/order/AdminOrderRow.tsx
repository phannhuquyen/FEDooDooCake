// AdminOrderRow.tsx

import { useState } from "react";
import {
  formatOrderStatus,
  type OrderStatus,
} from "../../../utils/formatOrderStatus";
import MyButton from "../../buttons/MyButton";
import { orderApi } from "../../../api/orderApi";
import CancelOrderButton from "./CancelOrderButton";

type Props = {
  order: {
    _id: string;

    userId?: {
      name?: string;
    };

    createdAt: string;

    totalPrice: number;

    status: OrderStatus;
  };

  fetchOrders?: () => void;
};

const AdminOrderRow = ({ order, fetchOrders }: Props) => {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      {/* mã đơn */}
      <td className="px-6 py-4 text-sm font-medium text-gray-900">
        {order._id}
      </td>

      {/* khách hàng */}
      <td className="px-6 py-4 text-sm text-gray-600">
        {order.userId?.name || "Khách hàng"}
      </td>

      {/* thời gian */}
      <td className="px-6 py-4 text-sm text-gray-600">
        {new Date(order.createdAt).toLocaleString("vi-VN")}
      </td>

      {/* tổng tiền */}
      <td className="px-6 py-4 text-sm font-medium text-gray-900">
        {order.totalPrice.toLocaleString()}₫
      </td>

      {/* actions */}
      <OrderActions
        status={order.status}
        id={order._id}
        fetchOrders={fetchOrders}
      />
    </tr>
  );
};

export default AdminOrderRow;

export const OrderActions = ({
  status,
  id,
  fetchOrders,
}: {
  status: OrderStatus;

  id: string;

  fetchOrders?: () => void;
}) => {
  const [loading, setLoading] = useState(false);

  // const [openCancel, setOpenCancel] = useState(false);

  let nextStatus: OrderStatus | null = null;

  let actionButton = "";

  let style = "";

  // enum:
  // ["pending", "confirmed", "shipping", "completed", "cancelled"]

  switch (status) {
    case "pending":
      nextStatus = "confirmed";

      actionButton = "Xác nhận";

      style = "bg-blue-100 text-blue-800 hover:bg-blue-200";

      break;

    case "confirmed":
      nextStatus = "shipping";

      actionButton = "Giao hàng";

      style = "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";

      break;

    case "shipping":
      nextStatus = "completed";

      actionButton = "Hoàn tất";

      style = "bg-green-100 text-green-800 hover:bg-green-200";

      break;

    default:
      nextStatus = null;
  }

  // update status
  const handleUpdateStatus = async () => {
    if (!nextStatus) return;

    try {
      setLoading(true);

      await orderApi.update(id, {
        status: nextStatus,
      });

      fetchOrders?.();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <td className="grid grid-cols-2 px-6 py-4 text-sm">
        <div className="flex gap-2 flex-wrap">
          {/* cancel */}
          {status !== "completed" && status !== "cancelled" && (
            <CancelOrderButton id={id} fetchOrders={fetchOrders} />
          )}

          {/* next action */}
          {nextStatus && (
            <MyButton
              disabled={loading}
              onClick={handleUpdateStatus}
              className={`
                w-fit mr-2 px-4 py-1.5
                text-xs rounded-2xl font-medium
                border border-highlight/20
                transition-all
                ${style}
              `}
            >
              {loading ? "Đang xử lý..." : actionButton}
            </MyButton>
          )}

          {/* completed */}
          {status === "completed" && (
            <span
              className="
                inline-flex items-center
                px-4 py-1.5
                text-xs rounded-2xl font-medium
                bg-green-100 text-green-800
              "
            >
              {formatOrderStatus(status)}
            </span>
          )}

          {/* cancelled */}
          {status === "cancelled" && (
            <span
              className="
                inline-flex items-center
                px-4 py-1.5
                text-xs rounded-2xl font-medium
                bg-red-100 text-red-700
              "
            >
              {formatOrderStatus(status)}
            </span>
          )}
        </div>

        {/* detail */}
        <MyButton
          to={`/admin/orders/${id}`}
          className="
            col-start-2 w-fit h-fit
            px-4 py-1.5
            text-xs rounded-2xl font-medium
            text-highlight bg-highlight/5
            hover:bg-highlight hover:text-white
            border border-highlight/20
            transition-all
          "
        >
          Chi tiết
        </MyButton>
      </td>
    </>
  );
};

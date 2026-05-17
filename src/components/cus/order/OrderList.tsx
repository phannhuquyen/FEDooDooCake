import type { OrderType } from "./OrderTabs";
import OrderCard from "./OrderCard";
import { useEffect } from "react";
import { socket } from "../../../api/socket";
import toast from "react-hot-toast";

type Props = {
  orders: OrderType[];
  setOrders: React.Dispatch<React.SetStateAction<OrderType[]>>;
};

const OrderList = ({ orders, setOrders }: Props) => {
  useEffect(() => {
    socket.on("update-order-status", (updatedOrder) => {
      setOrders((prev) =>
        prev.map((item) =>
          item._id === updatedOrder._id ? updatedOrder : item,
        ),
      );
      toast.success(`Đơn hàng ${updatedOrder._id} đã cập nhật trạng thái`);
    });

    return () => {
      socket.off("update-order-status");
    };
  }, []);
  return (
    <div className="space-y-6">
      {orders.length > 0 ? (
        orders.map((order) => (
          <OrderCard key={order._id} order={order} setOrders={setOrders} />
        ))
      ) : (
        <div className="bg-white rounded-xl shadow-sm p-10 text-center">
          <p className="text-gray-500">Không có đơn hàng nào</p>
        </div>
      )}
    </div>
  );
};

export default OrderList;

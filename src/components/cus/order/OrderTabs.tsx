import { useEffect, useMemo, useState } from "react";
import OrderList from "./OrderList";
import { orderApi } from "../../../api/orderApi";

const tabs = [
  { name: "Đơn hàng hiện tại", href: "#" },
  { name: "Đơn hàng đã mua", href: "#" },
  { name: "Đơn hàng đã hủy", href: "#" },
  { name: "Lịch sử đơn hàng", href: "#" },
];

export type OrderType = {
  _id: string;

  createdAt: string;

  totalPrice: number;

  status: string;

  items: any[];
};

const OrderTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  const [orders, setOrders] = useState<OrderType[]>([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);

        const userId = localStorage.getItem("userId") as string;

        const res = await orderApi.getByUser(userId);

        setOrders(res.data);
      } catch (error: any) {
        console.error(error?.response?.data?.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // lọc theo tab
  const filteredOrders = useMemo(() => {
    switch (activeTab) {
      // pending - confirmed - shipping
      case "Đơn hàng hiện tại":
        return orders.filter((order) =>
          ["pending", "confirmed", "shipping"].includes(order.status),
        );

      // completed
      case "Đơn hàng đã mua":
        return orders.filter((order) => order.status === "completed");

      // cancelled
      case "Đơn hàng đã hủy":
        return orders.filter((order) => order.status === "cancelled");

      // tất cả
      case "Lịch sử đơn hàng":
        return orders;

      default:
        return [];
    }
  }, [activeTab, orders]);


  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 border-b border-gray-200">
        <nav className="-mb-px flex justify-center space-x-4 md:space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-semibold text-sm transition-colors duration-200 ${
                activeTab === tab.name
                  ? "border-highlight text-highlight"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {loading ? (
        <div className="text-center py-10 text-gray-500">
          Đang tải đơn hàng...
        </div>
      ) : (
        <OrderList orders={filteredOrders} setOrders={setOrders} />
      )}
    </div>
  );
};

export default OrderTabs;

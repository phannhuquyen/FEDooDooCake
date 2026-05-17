import { useEffect, useMemo, useState } from "react";

import MyButton from "../../buttons/MyButton";
import AdminOrderTable from "./AdminOrderTable";

import { orderApi } from "../../../api/orderApi";
import { socket } from "../../../api/socket";
import toast from "react-hot-toast";

const tabs = [
  {
    name: "Vừa nhận",
    status: "pending",
  },

  {
    name: "Đang làm",
    status: "confirmed",
  },

  {
    name: "Đã chuẩn bị",
    status: "shipping",
  },

  {
    name: "Đã giao",
    status: "completed",
  },

  {
    name: "Đã hủy",
    status: "cancelled",
  },
];

const tabHistory = {
  name: "Lịch sử đơn hàng",
  status: "all",
};

const AdminOrderTabs = () => {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const [orders, setOrders] = useState<any[]>([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    socket.on("new-order", (newOrder) => {
      setOrders((prev) => [newOrder, ...prev]);
      toast.success("Có đơn hàng mới", {
        duration: 4000,
        icon: "🛒",
      });
    });

    return () => {
      socket.off("new-order");
    };
  }, []);

  useEffect(() => {
    socket.on("cancel-order", (updatedOrder) => {
      setOrders((prev) =>
        prev.map((item) =>
          item._id === updatedOrder._id ? updatedOrder : item,
        ),
      );
      toast.error(`Đơn hàng ${updatedOrder._id} đã bị hủy`);
    });

    return () => {
      socket.off("cancel-order");
    };
  }, []);

  // fetch orders
  const fetchOrders = async () => {
    try {
      setLoading(true);

      const res = await orderApi.getAll();

      setOrders(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // filter orders
  const filteredOrders = useMemo(() => {
    if (currentTab.status === "all") {
      return orders;
    }

    return orders.filter((order) => order.status === currentTab.status);
  }, [orders, currentTab]);

  return (
    <div>
      {/* tabs */}
      <nav className="mb-6 border-b border-gray-100">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-6">
            {tabs.map((tab) => (
              <MyButton
                key={tab.name}
                onClick={() => setCurrentTab(tab)}
                className={`
                  pb-2 text-sm font-semibold
                  transition-colors
                  ${
                    currentTab.name === tab.name
                      ? "border-b-2 border-highlight text-gray-900"
                      : "text-gray-500 hover:text-gray-900"
                  }
                `}
              >
                {tab.name}
              </MyButton>
            ))}
          </div>

          {/* history */}
          <MyButton
            onClick={() => setCurrentTab(tabHistory)}
            className={`
              pb-2 text-sm font-semibold
              text-highlight
              hover:opacity-80
              transition-opacity
              ${
                currentTab.name === tabHistory.name
                  ? "border-b-2 border-highlight"
                  : ""
              }
            `}
          >
            {tabHistory.name}
          </MyButton>
        </div>
      </nav>

      {/* content */}
      {loading ? (
        <div className="py-10 text-center text-gray-500">
          Đang tải đơn hàng...
        </div>
      ) : (
        <AdminOrderTable orders={filteredOrders} fetchOrders={fetchOrders} />
      )}
    </div>
  );
};

export default AdminOrderTabs;

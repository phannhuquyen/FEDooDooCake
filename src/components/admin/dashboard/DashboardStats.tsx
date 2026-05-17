import { useEffect, useState } from "react";
import { statisticsApi } from "../../../api/statisticsApi";

const DashboardStats = () => {
  const [stats, setStats] = useState<any>(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      setLoading(true);

      const res = await statisticsApi.getDashboardStats();

      setStats(res.data);
    } catch (error: any) {
      console.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const formatMoney = (value: number) => {
    return value.toLocaleString("vi-VN");
  };

  const dashboardItems = [
    {
      title: "Tổng doanh thu hôm nay",

      value: `${formatMoney(stats?.revenue?.value || 0)}đ`,

      change: `${stats?.revenue?.percent || 0}% so với hôm qua`,

      changeType: Number(stats?.revenue?.percent) >= 0 ? "up" : "down",
    },

    {
      title: "Số đơn hàng hôm nay",

      value: stats?.orders?.value || 0,

      change: `${stats?.orders?.percent || 0}% so với hôm qua`,

      changeType: Number(stats?.orders?.percent) >= 0 ? "up" : "down",
    },

    {
      title: "Số khách hàng mới hôm nay",

      value: stats?.users?.value || 0,

      change: `${stats?.users?.percent || 0}% so với hôm qua`,

      changeType: Number(stats?.users?.percent) >= 0 ? "up" : "down",
    },
  ];

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-500">
        Đang tải thống kê...
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {dashboardItems.map((stat, index) => (
        <div
          className="flex flex-col gap-2 rounded-xl p-6 border border-gray-200 bg-white"
          key={index}
        >
          <p className="text-gray-600 text-base font-medium">{stat.title}</p>

          <p className="text-gray-900 text-3xl font-bold">{stat.value}</p>

          <p
            className={`text-sm font-medium flex items-center gap-1 ${
              stat.changeType === "up" ? "text-green-600" : "text-red-600"
            }`}
          >
            <span>{stat.changeType === "up" ? "↑" : "↓"}</span>

            {stat.change}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;

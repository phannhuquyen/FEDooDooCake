import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { useEffect, useState } from "react";

import { Line } from "react-chartjs-2";
import { statisticsApi } from "../../../api/statisticsApi";

// register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

type StatisticType = {
  label: string;

  revenue: number;

  orders: number;
};

const MyCharts = () => {
  const [type, setType] = useState<"7days" | "30days" | "12months">("7days");

  const [data, setData] = useState<StatisticType[]>([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchStatistics();
  }, [type]);

  const fetchStatistics = async () => {
    try {
      setLoading(true);

      let res;

      if (type === "7days") {
        res = await statisticsApi.getRevenueByDay(7);
      } else if (type === "30days") {
        res = await statisticsApi.getRevenueByDay(30);
      } else {
        res = await statisticsApi.getRevenueByMonth(12);
      }

      setData(res.data);
    } catch (error: any) {
      console.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const chartData = {
    labels: data.map((d) => d.label),

    datasets: [
      {
        label: "Doanh thu",

        data: data.map((d) => d.revenue),

        borderColor: "rgb(34,197,94)",

        backgroundColor: "rgba(34,197,94,0.15)",

        tension: 0.4,

        fill: true,

        yAxisID: "y",
      },

      {
        label: "Số đơn hàng",

        data: data.map((d) => d.orders),

        borderColor: "rgb(59,130,246)",

        backgroundColor: "rgba(59,130,246,0.15)",

        tension: 0.4,

        fill: false,

        yAxisID: "y1",
      },
    ],
  };

  const options = {
    responsive: true,

    maintainAspectRatio: false,

    interaction: {
      mode: "index" as const,

      intersect: false,
    },

    plugins: {
      legend: {
        position: "top" as const,
      },

      title: {
        display: true,

        text: "Biểu đồ thống kê",
      },
    },

    scales: {
      y: {
        type: "linear" as const,

        display: true,

        position: "left" as const,

        title: {
          display: true,

          text: "Doanh thu",
        },
      },

      y1: {
        type: "linear" as const,

        display: true,

        position: "right" as const,

        grid: {
          drawOnChartArea: false,
        },

        title: {
          display: true,

          text: "Đơn hàng",
        },
      },
    },
  };

  return (
    <div className="w-full bg-white p-5 rounded-xl shadow-sm">
      {/* top */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Biểu đồ thống kê</h2>

        <select
          value={type}
          onChange={(e) =>
            setType(e.target.value as "7days" | "30days" | "12months")
          }
          className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-highlight"
        >
          <option value="7days">7 ngày gần nhất</option>

          <option value="30days">30 ngày gần nhất</option>

          <option value="12months">12 tháng gần nhất</option>
        </select>
      </div>

      {/* chart */}
      <div className="h-100">
        {loading ? (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            Đang tải dữ liệu...
          </div>
        ) : (
          <Line data={chartData} options={options} />
        )}
      </div>
    </div>
  );
};

export default MyCharts;

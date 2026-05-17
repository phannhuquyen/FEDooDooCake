import axiosClient from "./axiosClient";

const STATISTICS_URL = "https://doodoocake-api.onrender.com/api/statistics";

export const statisticsApi = {
  // dashboard
  getDashboardStats: () => {
    return axiosClient.get(`${STATISTICS_URL}/dashboard`);
  },

  // theo ngày
  getRevenueByDay: (limit: number) => {
    return axiosClient.get(`${STATISTICS_URL}/revenue/day?limit=${limit}`);
  },

  // theo tháng
  getRevenueByMonth: (limit: number) => {
    return axiosClient.get(`${STATISTICS_URL}/revenue/month?limit=${limit}`);
  },
};

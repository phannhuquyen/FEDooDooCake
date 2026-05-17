import DashboardHeader from "../../components/admin/dashboard/DashboardHeader";
import DashboardStats from "../../components/admin/dashboard/DashboardStats";
import MyCharts from "../../components/admin/dashboard/MyCharts";

const DashBoard = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <DashboardHeader />
      <DashboardStats />
      <MyCharts />
    </div>
  );
};

export default DashBoard;

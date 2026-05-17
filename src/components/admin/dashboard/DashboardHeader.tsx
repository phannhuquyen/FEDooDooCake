import { IconNotification } from "../../../utils/icons";
import MyButton from "../../buttons/MyButton";

const DashboardHeader = () => {
  const name = "Quản trị viên";
  const iconNotification = <IconNotification />;
  return (
    <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-gray-900 text-3xl font-bold leading-tight tracking-tight">
          Tổng quan
        </h1>
        <p className="text-gray-500 text-base font-normal leading-normal">
          Chào mừng {name}, đây là tổng quan hoạt động của của hàng ngày hôm
          nay.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <MyButton className="relative rounded-lg p-2 hover:bg-gray-200 text-gray-600">
          <span className=" ">{iconNotification}</span>
          <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-highlight opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-highlight"></span>
          </span>
        </MyButton>
      </div>
    </div>
  );
};

export default DashboardHeader;

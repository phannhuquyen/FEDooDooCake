import { formatCurrency } from "../../../utils/formatCurrency";

const AdminOrderSummary = ({ summary }: { summary: any }) => {

  return (
    <div className="bg-slate-50 p-6 flex flex-col gap-3 border-t border-slate-100 ">
      <div className="flex justify-between text-sm">
        <span className="text-gray-500 ">Tạm tính</span>
        <span className="font-medium text-[#181114] ">
          {formatCurrency(summary.totalPrice)}
        </span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-500 ">Phí vận chuyển</span>
        <span className="font-medium text-[#181114] ">
          {formatCurrency(summary.fee)}
        </span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-500 ">Giảm giá</span>
        <span className="font-medium text-green-600 ">
          -{formatCurrency(summary.promotion)}
        </span>
      </div>
      <div className="h-px bg-slate-200 my-1"></div>
      <div className="flex justify-between items-center">
        <span className="font-bold text-lg text-[#181114] ">Tổng cộng</span>
        <span className="font-bold text-2xl text-highlight">
          {formatCurrency(summary.total)}
        </span>
      </div>
    </div>
  );
};

export default AdminOrderSummary;

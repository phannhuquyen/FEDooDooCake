import { useNavigate } from "react-router-dom";
import MyButton from "../../buttons/MyButton";
import { IconPrinter } from "../../../utils/icons";

const AdminOrderDetailHeader = ({ id, time }: { id: string; time: string }) => {
  const navigation = useNavigate();
  const goBack = () => {
    navigation(-1);
  };
  return (
    <div>
      <MyButton
        onClick={goBack}
        className="print:hidden mb-1 text-sm text-gray-500 hover:text-highlight transition-colors"
      >
        Quay lại
      </MyButton>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-[#181114] text-3xl font-black leading-tight">
            Đơn hàng {id}
          </h1>
          <p className="text-[#896172] text-sm mt-1">Đặt lúc: {time}</p>
        </div>
        <div className="flex items-center gap-3">
          <MyButton
            onClick={() => {
              window.print();
            }}
            className="print:hidden flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            <span   text-gray-500>
              <IconPrinter/>
            </span>
            In hóa đơn
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderDetailHeader;

import { IconEdit,  IconEmail,  IconPhone,  IconProfile } from "../../../utils/icons";

type props = {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
};
const CustomerCard = (customer: props) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
      <h2 className="text-lg font-bold text-[#181114] mb-4 flex items-center gap-2">
        <span className="  text-highlight text-3xl"><IconProfile/></span>
        Khách hàng
      </h2>
      <div className="flex flex-col gap-3 text-sm">
        <div className="flex items-center gap-3 text-gray-600 ">
          <span className="  text-[18px]"><IconEdit/></span>
          {customer.customerName}
        </div>
        <div className="flex items-center gap-3 text-gray-600 ">
          <span className="  text-[18px]"><IconEmail/></span>
          {customer.customerEmail}
        </div>
        <div className="flex items-center gap-3 text-gray-600 ">
          <span className="  text-[18px]"><IconPhone/></span>
          {customer.customerPhone}
        </div>
      
      </div>
    </div>
  );
};

export default CustomerCard;

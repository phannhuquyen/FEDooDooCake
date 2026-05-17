import { formatOrderStatus, type OrderStatus } from "../../../utils/formatOrderStatus";
import { IconMoney } from "../../../utils/icons";

const PaymentCard = ({
  paymentMethod,
  status,
}: {
  paymentMethod: string;
  status: string;
}) => {
  let style = "";

  // enum:
  // ["pending", "confirmed", "shipping", "completed", "cancelled"]

  switch (status) {
    case "pending":
      style = "bg-blue-100 text-blue-800 ";

      break;

    case "confirmed":
      style = "bg-yellow-100 text-yellow-800 ";

      break;

    case "shipping":
      style = "bg-yellow-100 text-yellow-800 ";

      break;
    case "completed":
      style = "bg-green-100 text-green-800 ";
      break;
    case "cancelled":
      style = "bg-error-bg text-error-text";
      break;
    default:
  }
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
      <h2 className="text-lg font-bold text-[#181114] mb-4 flex items-center gap-2">
        <span className="  text-highlight text-3xl">
          <IconMoney />
        </span>
        Phương thức
      </h2>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Phương thức</span>
          <span className="text-sm font-medium text-[#181114] ">
            {paymentMethod}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Trạng thái</span>
          <span
            className={`inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium ring-1 ring-inset ring-yellow-600/20 ${style}`}
           
          >
            {formatOrderStatus(status as OrderStatus)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;

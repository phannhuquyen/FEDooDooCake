import {
  formatOrderStatus,
  type OrderStatus,
} from "../../../utils/formatOrderStatus";

type Props = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  images: string[];
};

const OrderItemList = ({
  items,
  status,
}: {
  items: Props[];
  status: OrderStatus;
}) => {
  function styleStatus() {
    switch (status) {
      case "pending":
        return "bg-blue-100 text-blue-800 ";
      case "confirmed":
        return "bg-yellow-100 text-yellow-800 ";
      case "shipping":
        return "bg-yellow-100 text-yellow-800 ";
      case "completed":
        return "bg-green-100 text-green-800 ";
      case "cancelled":
        return "bg-error-bg text-error-text";
      default:
        "";
        break;
    }
  }
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 mb-4 border-b border-gray-200 ">
        <div>
          <h2 className="text-lg font-bold text-gray-800">
            Danh sách sản phẩm
          </h2>
          <p className="text-sm text-gray-500 ">{items.length} sản phẩm</p>
        </div>
        <span
          className={`mt-2 sm:mt-0 inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full ${styleStatus()}`}
        >
          {formatOrderStatus(status)}
        </span>
      </div>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.productId} className="flex items-center gap-4">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16"
              style={{ backgroundImage: `url(${item.images[0]})` }}
            ></div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">{item.name}</p>
              <p className="text-sm text-gray-500">Số lượng: {item.quantity}</p>
            </div>
            <p className="font-semibold text-gray-700">
              {item.price.toLocaleString()}₫
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderItemList;

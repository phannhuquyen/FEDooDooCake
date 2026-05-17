import { formatCurrency } from "../../../utils/formatCurrency";

const CheckoutItem = ({ item }: { item: any }) => {
  return (
    <div className="flex items-start gap-4">
      <div
        className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg h-16 w-16 shrink-0"
        style={{
          backgroundImage: `url(${item.image})`,
        }}
      ></div>
      <div className="flex-1">
        <p className="text-base font-semibold text-gray-800 ">{item.name}</p>
        <p className="text-sm text-gray-500 ">SL:{item.quantity}</p>
        <p className="text-sm text-gray-500 ">{formatCurrency(item.price)}</p>
      </div>
      <p className="text-base font-medium text-gray-800">{formatCurrency(item.totalPrice)}</p>
    </div>
  );
};

export default CheckoutItem;

import { formatCurrency } from "../../../utils/formatCurrency";

const OrderDetailProductRow = ({ product }: { product: any }) => {
  return (
    <tr>
      <td className="px-6 py-4">
        <div className="flex items-center gap-4">
          <div
            className="size-12 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 "
            style={{
              backgroundImage: `url("${product.images[0]}")`,
              // backgroundColor: "red",
              backgroundSize: "cover",
            }}
          ></div>
          <div>
            <p className="font-bold text-[#181114]">{product.name}</p>
            <p className="text-xs text-gray-500">Note</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-center text-gray-600">
        {formatCurrency(product.price)}
      </td>
      <td className="px-6 py-4 text-center text-gray-600">
        {formatCurrency(product.quantity)}
      </td>
      <td className="px-6 py-4 text-right font-bold text-[#181114]">
        {formatCurrency(product.price * product.quantity)}
      </td>
    </tr>
  );
};

export default OrderDetailProductRow;

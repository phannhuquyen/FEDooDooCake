import { formatCurrency } from "../../../utils/formatCurrency";

const OrderSummary = ({ totalPrice, fee, promotion,  paymentMethod }: { totalPrice: number; fee: number; promotion: number;  paymentMethod: string }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-lg font-bold text-gray-800 mb-4 pb-4 border-b border-gray-200 700">Tóm tắt đơn hàng</h2>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
            <span className="text-gray-500">Tạm tính:</span>
            <span className="font-semibold text-gray-700">{formatCurrency(totalPrice-fee+promotion) }</span>
        </div>
        <div className="flex justify-between">
            <span className="text-gray-500">Phí vận chuyển:</span>
            <span className="font-semibold text-gray-700">{formatCurrency(fee)}</span>
        </div>
        <div className="flex justify-between">
            <span className="text-gray-500">Giảm giá:</span>
            <span className="font-semibold text-gray-700">-{formatCurrency(promotion)}</span>
        </div>
        <div className="flex justify-between pt-4 border-t border-gray-200">
            <span className="text-lg font-bold text-gray-800">Tổng cộng:</span>
            <span className="text-xl font-bold text-highlight">{formatCurrency(totalPrice)}</span>
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-gray-200 ">
        <h3 className="text-base font-semibold text-gray-800  mb-2">Phương thức thanh toán</h3>
        <p className="text-sm text-gray-500">{paymentMethod}</p>
      </div>
    </div>
  )
}

export default OrderSummary

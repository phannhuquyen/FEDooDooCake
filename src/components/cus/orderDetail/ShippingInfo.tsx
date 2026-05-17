

const ShippingInfo = ({ name, phone, address, email }: { name: string; phone: string; address: string; email: string }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200  pb-4">
        Thông tin giao hàng
      </h2>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
            <span className="text-gray-500">Người nhận:</span>
            <span className="font-semibold text-gray-700 text-right">{name}</span>
        </div>
        <div className="flex justify-between">
            <span className="text-gray-500">Email:</span>
            <span className="font-semibold text-gray-700 text-right">{email}</span>
        </div>
        <div className="flex justify-between">
            <span className="text-gray-500">Số điện thoại:</span>
            <span className="font-semibold text-gray-700 text-right">{phone}</span>
        </div>
        <div className="flex justify-between">
            <span className="text-gray-500">Địa chỉ:</span>
            <span className="font-semibold text-gray-700 text-right">{address}</span>
        </div>
      </div>
    </div>
  )
}

export default ShippingInfo

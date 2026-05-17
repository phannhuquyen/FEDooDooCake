type Props = {
  paymentMethod: string;
  setPaymentMethod: any;
};

const PaymentMethod = ({
  paymentMethod,
  setPaymentMethod,
}: Props) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Phương thức thanh toán
      </h2>

      <div className="space-y-3">
        <label className="flex items-center p-4 border rounded-lg cursor-pointer">
          <input
            type="radio"
            checked={paymentMethod === "COD"}
            onChange={() =>
              setPaymentMethod("COD")
            }
          />

          <span className="ml-3">
            Thanh toán khi nhận hàng
          </span>
        </label>

        <label className="flex items-center p-4 border rounded-lg cursor-pointer">
          <input
            type="radio"
            checked={paymentMethod === "MOMO"}
            onChange={() =>
              setPaymentMethod("MOMO")
            }
          />

          <span className="ml-3">
            Ví MoMo
          </span>
        </label>
      </div>
    </div>
  );
};

export default PaymentMethod;
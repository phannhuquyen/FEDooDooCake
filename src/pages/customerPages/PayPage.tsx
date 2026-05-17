import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CheckoutForm from "../../components/cus/checkout/CheckoutForm";
import CheckoutSummary from "../../components/cus/checkout/CheckoutSummary";
import PaymentMethod from "../../components/cus/checkout/PaymentMethod";
import { userApi } from "../../api/userApi";

const PayPage = () => {
  const location = useLocation();

  const {
    selectedCart,
    totalQuantity,
    subTotal,
    shippingFee,
    total,
  } = location.state;

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [paymentMethod, setPaymentMethod] =
    useState("COD");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userId = localStorage.getItem(
          "userId",
        ) as string;

        const res = await userApi.getById(
          userId,
        );

        setUserInfo({
          name: res.data.name || "",
          email: res.data.email || "",
          phone: res.data.phone || "",
          address: res.data.address || "",
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-black tracking-[-0.033em] text-gray-800 ">
          Thanh toán
        </h1>

        <p className="mt-2 text-gray-500">
          Vui lòng hoàn tất quá trình thanh toán để đặt hàng
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="w-full lg:w-3/5 space-y-8">
          <CheckoutForm
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />

          <PaymentMethod
            paymentMethod={paymentMethod}
            setPaymentMethod={
              setPaymentMethod
            }
          />
        </div>

        <div className="w-full lg:w-2/5">
          <CheckoutSummary
            selectedCart={selectedCart}
            totalQuantity={totalQuantity}
            subTotal={subTotal}
            shippingFee={shippingFee}
            total={total}
            paymentMethod={paymentMethod}
            checkoutInfo={userInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default PayPage;
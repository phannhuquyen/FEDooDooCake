import OrderTabs from "../../components/cus/order/OrderTabs";
import OrderTitle from "../../components/cus/order/OrderTitle";

const OrderPage = () => {
  return (
    <div className="md:py-8">
      <OrderTitle />
      <OrderTabs />
    </div>
  );
};

export default OrderPage;

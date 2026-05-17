import { useEffect, useState } from "react";
import CartList from "../../components/cus/cart/CartList";
import OrderSummary from "../../components/cus/cart/OrderSummary";
import { userApi } from "../../api/userApi";

export interface YourCart {
  _id: string;
  productId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  totalPrice: number;
  selected: boolean;
}

const CartPage = () => {
  const [yourCart, setYourCart] = useState<YourCart[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const userId = localStorage.getItem("userId") as string;

        const res = await userApi.getCart(userId);

        setYourCart(res.data);

        // lấy item đã selected
        const selected = res.data
          .filter((item: YourCart) => item.selected)
          .map((item: YourCart) => item._id);

        setSelectedItems(selected);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCart();
  }, []);

  return (
    <div className="md:py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-black tracking-[-0.033em] text-gray-800 ">
          Giỏ hàng của bạn
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <CartList
          yourCart={yourCart}
          setYourCart={setYourCart}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />

        <OrderSummary
          yourCart={yourCart}
          selectedItems={selectedItems}
        />
      </div>
    </div>
  );
};

export default CartPage;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import OrderDetailHeader from "../../components/cus/orderDetail/OrderDetailHeader";
import OrderItemList from "../../components/cus/orderDetail/OrderItemList";
import ShippingInfo from "../../components/cus/orderDetail/ShippingInfo";
import OrderSummary from "../../components/cus/orderDetail/OrderSummary";

import { orderApi } from "../../api/orderApi";

type OrderStatus =
  | "pending"
  | "confirmed"
  | "shipping"
  | "completed"
  | "cancelled";

interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  images: string[];
}

interface OrderDetail {
  _id: string;

  userId: string;

  email: string;

  name: string;

  phone: string;

  address: string;

  items: OrderItem[];

  totalPrice: number;

  fee: number;

  promotion: number;

  paymentMethod: string;

  status: OrderStatus;

  createdAt: string;
}

const OrderDetailPage = () => {
  const { id } = useParams();

  const [orderDetail, setOrderDetail] =
    useState<OrderDetail | null>(null);

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    const fetchOrderDetail = async () => {
      try {
        setLoading(true);

        if (!id) return;

        const res =
          await orderApi.getById(id);

        setOrderDetail(res.data);
        // console.log(res.data);
        
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetail();
  }, [id]);

  // loading
  if (loading) {
    return (
      <div className="max-w-5xl mx-auto py-20 text-center text-gray-500">
        Đang tải chi tiết đơn hàng...
      </div>
    );
  }

  // not found
  if (!orderDetail) {
    return (
      <div className="max-w-5xl mx-auto py-20 text-center text-red-500">
        Không tìm thấy đơn hàng
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <OrderDetailHeader
        id={orderDetail._id}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* left */}
        <div className="lg:col-span-2 space-y-6">
          <OrderItemList
            items={orderDetail.items}
            status={orderDetail.status}
          />

          <ShippingInfo
            name={orderDetail.name}
            phone={orderDetail.phone}
            address={orderDetail.address}
            email={orderDetail.email}
          />
        </div>

        {/* right */}
        <div className="lg:col-span-1 space-y-6">
          <OrderSummary
            totalPrice={
              orderDetail.totalPrice
            }
            fee={orderDetail.fee}
            promotion={
              orderDetail.promotion
            }
       
            paymentMethod={
              orderDetail.paymentMethod
            }
          />
        </div>
      </div>
    </div>
  );
};

export default OrderDetailPage;
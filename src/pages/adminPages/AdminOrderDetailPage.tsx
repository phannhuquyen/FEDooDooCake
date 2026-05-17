import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AdminOrderDetailHeader from "../../components/admin/orderDetail/AdminOrderDetailHeader";
import AdminOrderProductTable from "../../components/admin/orderDetail/AdminOrderProductTable";
import CustomerCard from "../../components/admin/orderDetail/CustomerCard";
import PaymentCard from "../../components/admin/orderDetail/PaymentCard";
import ShippingCard from "../../components/admin/orderDetail/ShippingCard";

import { orderApi } from "../../api/orderApi";

const AdminOrderDetailPage = () => {
  const { id } = useParams();

  const [order, setOrder] = useState<any>(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrderDetail = async () => {
      try {
        setLoading(true);

        if (!id) return;

        const res = await orderApi.getById(id);

        setOrder(res.data);
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
      <div className="py-20 text-center text-gray-500">
        Đang tải chi tiết đơn hàng...
      </div>
    );
  }

  // not found
  if (!order) {
    return (
      <div className="py-20 text-center text-red-500">
        Không tìm thấy đơn hàng
      </div>
    );
  }

  // summary
  const summary = {
    total: order.totalPrice + order.fee - order.promotion,

    fee: order.fee,

    promotion: order.promotion,

    totalPrice: order.totalPrice,
  };

  // customer
  const customer = {
    customerName: order.name || "Khách hàng",

    customerEmail: order.email || "Chưa có email",

    customerPhone: order.phone || "Chưa có SĐT",
  };

  return (
    <div className="w-full mx-auto max-w-7xl">
      {/* header */}
      <AdminOrderDetailHeader
        id={order._id}
        time={new Date(order.createdAt).toLocaleString("vi-VN")}
      />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* left */}
        <AdminOrderProductTable
          products={order.items || []}
          summary={summary}
        />

        {/* right */}
        <div className="flex flex-col gap-6">
          <CustomerCard {...customer} />

          <ShippingCard customerAddress={order.address} />

          <PaymentCard
            paymentMethod={order.paymentMethod}
            status={order.status}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminOrderDetailPage;

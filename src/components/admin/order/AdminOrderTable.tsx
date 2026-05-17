import AdminOrderRow from "./AdminOrderRow";

type Props = {
  orders: any[];

  fetchOrders?: () => void;
};

const AdminOrderTable = ({
  orders,
  fetchOrders,
}: Props) => {
  const th = [
    "Mã đơn",
    "Khách hàng",
    "Thời gian",
    "Tổng tiền",
    "Thao tác",
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50/50">
            {th.map((item) => (
              <th
                key={item}
                className="py-3 px-4 text-sm font-semibold text-gray-500"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <AdminOrderRow
                key={order._id}
                order={order}
                fetchOrders={fetchOrders}
              />
            ))
          ) : (
            <tr>
              <td
                colSpan={5}
                className="py-10 text-center text-gray-500"
              >
                Không có đơn hàng nào
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrderTable;
import AdminOrderSummary from "./AdminOrderSummary";
import OrderDetailProductRow from "./OrderDetailProductRow";

const AdminOrderProductTable = ({
  products,
  summary,
}: {
  products: any[];
  summary: any;
}) => {
  const th = [
    { name: "Sản phẩm" },
    { name: "Đơn giá" },
    { name: "Số lượng" },
    { name: "Tổng" },
  ];
  return (
    <div className="xl:col-span-2 flex flex-col gap-6">
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-lg font-bold text-[#181114] ">
            Danh sách sản phẩm
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-xs uppercase text-gray-500 font-semibold">
              <tr>
                {th.map((item, index) => (
                  <th key={index} className="px-6 py-4 not-first:text-center">
                    {item.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {products.map((product) => (
                <OrderDetailProductRow key={product.id} product={product} />
              ))}
            </tbody>
          </table>
        </div>

        <AdminOrderSummary summary={summary} />
      </div>
    </div>
  );
};

export default AdminOrderProductTable;

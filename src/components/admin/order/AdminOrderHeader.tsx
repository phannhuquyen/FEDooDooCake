import { IconSearch } from "../../../utils/icons";

const AdminOrderHeader = () => {
  return (
    <header className=" mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Quản lý đơn hàng
        </h1>
        <p className="text-gray-500">
          Theo dõi và quản lý quy trình xử lý đơn hàng của bạn.
        </p>
      </div>
      {/* search bar */}
      <div className="relative w-full md:w-96">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <IconSearch />
        </span>
        <input
          type="text"
          placeholder="Tìm kiếm theo mã đơn hoặc tên khách hàng..."
          className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-custom bg-white text-sm focus:outline-none focus:ring-2 focus:ring-highlight focus:border-transparent transition-all shadow-sm"
        />
      </div>
    </header>
  );
};

export default AdminOrderHeader;

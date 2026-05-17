

type Props = {
  userInfo: any;
  setUserInfo: any;
};

const CheckoutForm = ({
  userInfo,
  setUserInfo,
}: Props) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setUserInfo({
      ...userInfo,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Thông tin giao hàng
      </h2>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="text-sm font-medium text-gray-700"
            >
              Họ và tên
            </label>

            <input
              type="text"
              id="name"
              value={userInfo.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 rounded-lg border border-gray-300"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="text-sm font-medium text-gray-700"
            >
              Số điện thoại
            </label>

            <input
              type="text"
              id="phone"
              value={userInfo.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 rounded-lg border border-gray-300"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-700"
          >
            Email
          </label>

          <input
            type="text"
            id="email"
            value={userInfo.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 rounded-lg border border-gray-300"
          />
        </div>

        <div>
          <label
            htmlFor="address"
            className="text-sm font-medium text-gray-700"
          >
            Địa chỉ
          </label>

          <input
            type="text"
            id="address"
            value={userInfo.address}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 rounded-lg border border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;

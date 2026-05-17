import { NavLink, useNavigate } from "react-router-dom";
import MyButton from "../../buttons/MyButton";
import {
  IconChangePassword,
  IconDashboard,
  IconFeatured,
  IconLogOut,
  IconOrder,
  IconProduct,
} from "../../../utils/icons";
import { useState } from "react";
import ConfirmModal from "../../common/ConfirmModal";

const AdminSideNavBar = () => {
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(false);
  const navItems = [
    {
      name: "Bảng điều khiển",
      icon: <IconDashboard />,
      path: "/admin",
    },
    {
      name: "Đơn hàng",
      icon: <IconOrder />,
      path: "/admin/orders",
    },
    {
      name: "Sản phẩm",
      icon: <IconProduct />,
      path: "/admin/products",
    },
    {
      name: "Sản phẩm nổi bật",
      icon: <IconFeatured />,
      path: "/admin/featured",
    },
    {
      name: "Thay đổi mật khẩu",
      icon: <IconChangePassword />,
      path: "/admin/change-password",
    },
  ];

  return (
    <aside className="flex w-64 flex-col bg-white  p-4 sticky top-0 h-screen print:hidden">
      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 px-3 py-2">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBamCYTKmpaHgIYFnI9vOQW4LRBYU3rxbSsLXtjaP5hgUX734tyBJ9IBAbdLiGdBaebxPqqlK-y6hmog26C7f8YNb4rUVTzbAv270mscVweXi4Rt682F11N23jh9w1zJzT8jd0XUY7ZEAu9wOalGL5YAY4mriusrzs7fDh9M9w6FGJis6pvG4zzLhsLEl2mhkeobOJaPXRIgFhttGkYvGWAWu1F2sRh_3--3KCC9IvfIe27FyysbkGglmjHT6LMq8qTZCy5GJQJu6c")`,
              }}
            ></div>
            <div className="flex flex-col">
              <h1 className="text-gray-900 text-base font-bold leading-normal">
                DooDooCake
              </h1>
              <p className="text-gray-500 text-sm font-normal leading-normal">
                Quản lý cửa hàng
              </p>
            </div>
          </div>

          <nav className="flex flex-col gap-2 mt-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/admin"} // Đánh dấu active chỉ khi đường dẫn chính xác với "/admin/"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200
    ${
      isActive
        ? "bg-highlight/20 text-highlight"
        : "text-gray-700 hover:bg-gray-200 hover:text-highlight"
    }`
                }
              >
                <span className="  fill ">{item.icon}</span>
                <p className=" text-sm font-semibold leading-normal">
                  {item.name}
                </p>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-1">
          <MyButton className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 ">
            <span className="  text-gray-700 ">
              <IconLogOut />
            </span>
            <p
              onClick={() => {
                setConfirm(!confirm);
              }}
              className="text-gray-700  text-sm font-medium leading-normal"
            >
              Đăng xuất
            </p>
          </MyButton>
        </div>
      </div>
      <ConfirmModal
        // title="Thông báo"
        message="Bạn muốn đăng xuất khỏi tài khoản quản trị"
        confirmText="Đăng xuất"
        open={confirm}
        onClose={() => {
          setConfirm(!confirm);
        }}
        onConfirm={() => {
          localStorage.clear();
          navigate("/");
        }}
      />
    </aside>
  );
};

export default AdminSideNavBar;

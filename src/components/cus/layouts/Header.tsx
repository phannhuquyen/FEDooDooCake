import { NavLink, useNavigate } from "react-router-dom";
import {
  IconCart,
  IconDooDooCake,
  IconLogOut,
  IconProfile,
} from "../../../utils/icons";
import HeaderProductSearch from "./HeaderProductSearch";
import MyButton from "../../buttons/MyButton";
import { useState } from "react";
import ConfirmModal from "../../common/ConfirmModal";

const Header = () => {
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");
  const navList = [
    { name: "Trang chủ", path: "/" },
    { name: "Sản phẩm", path: "/products" },
    { name: "Đơn hàng", path: "/orders" },
    { name: "Giới thiệu", path: "/about" },
    { name: "Liên hệ", path: "/contact" },
  ];

  const iconList = [
    { name: "cart", path: "/cart", icon: <IconCart /> },
    {
      name: "profile",
      path: userId ? "/profile" : "/login",
      icon: <IconProfile />,
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto max-w-7xl">
        <nav className=" flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200/50 py-3 ">
          <div className="flex items-center gap-8">
            <NavLink to={"/"} className="flex items-center gap-3">
              <span className="text-highlight  text-4xl font-bold">
                <IconDooDooCake />
              </span>
              <h2 className="text-highlight  text-lg font-bold">DooDooCake</h2>
            </NavLink>
            <ul className="hidden md:flex items-center gap-8">
              {navList.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="text-primary hover:text-highlight text-sm font-medium [&.active]:text-highlight transition-colors duration-300"
                >
                  {item.name}
                </NavLink>
              ))}
            </ul>
          </div>

          <ul className="flex flex-1 justify-end gap-2 md:gap-4">
            <HeaderProductSearch />

            {iconList.map((item) => (
              <NavLink
                key={item.path}
                className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full size-10 bg-black/5 text-highlight hover:bg-highlight/20 dark:hover:bg-highlight/30"
                to={item.path}
              >
                <span className="text-2xl">{item.icon}</span>
              </NavLink>
            ))}

            <div className="group relative flex flex-col items-center">
              <MyButton
                onClick={() => {
                  setLogout(true);
                }}
                className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full size-10 bg-black/5 text-highlight hover:bg-highlight/20 dark:hover:bg-highlight/30"
              >
                <span className="text-2xl">
                  <IconLogOut />
                </span>
              </MyButton>

              {/* Tooltip */}
              <span className="absolute top-full mt-2 scale-0 rounded bg-gray-800 px-2 py-1 text-xs text-white group-hover:scale-100 transition-all">
                Đăng xuất
              </span>
            </div>
          </ul>
        </nav>
      </div>
      <ConfirmModal
        open={logout}
        title="Thông báo"
        message="Xác nhận đăng xuất khỏi tài khoản"
        onConfirm={() => {
          localStorage.clear();
          navigate("/");
        }}
        onClose={() => {
          setLogout(false);
        }}
      />
    </header>
  );
};

export default Header;

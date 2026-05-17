// import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import HomePage from "./pages/customerPages/HomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import Register from "./pages/RegisterPage.tsx";
import MasterLayoutCus from "./pages/MasterLayoutCus.tsx";
import ProductPage from "./pages/customerPages/ProductPage.tsx";
import OrderPage from "./pages/customerPages/OrderPage.tsx";
import AboutPage from "./pages/customerPages/AboutPage.tsx";
import ContactPage from "./pages/customerPages/ContactPage.tsx";
import CartPage from "./pages/customerPages/CartPage.tsx";
import ProfilePage from "./pages/customerPages/ProfilePage.tsx";
import PayPage from "./pages/customerPages/PayPage.tsx";
import ProductDetailPage from "./pages/customerPages/ProductDetailPage.tsx";
import OrderDetailPage from "./pages/customerPages/OrderDetailPage.tsx";

import DashBoard from "./pages/adminPages/DashBoard.tsx";
import AdminProductPage from "./pages/adminPages/AdminProductPage.tsx";
import AdminOrderPage from "./pages/adminPages/AdminOrderPage.tsx";
import MasterLayoutAdmin from "./pages/MasterLayoutAdmin.tsx";
import AdminOrderDetailPage from "./pages/adminPages/AdminOrderDetailPage.tsx";
import AdminEditProductPage from "./pages/adminPages/AdminEditProductPage.tsx";
import AdminCreateProductPage from "./pages/adminPages/AdminCreateProductPage.tsx";
// import ProductList from "./components/cus/product/ProductList.tsx";
import { auth } from "./helper/helper.ts";
import CustomerChangePasswordPage from "./pages/customerPages/CustomerChangePasswordPage.tsx";
import AdminChangePasswordPage from "./pages/adminPages/AdminChangePasswordPage.tsx";
import AdminFeaturedProductsPage from "./pages/adminPages/AdminFeaturedProductsPage.tsx";

import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route element={<CustomerRoute />}>
            <Route path="/" element={<MasterLayoutCus />}>
              <Route index element={<HomePage />} />
              <Route path="/products" element={<ProductPage />}>
                {/* <Route index element={<ProductList />} />

              <Route path="category/:categoryId" element={<ProductList />} /> */}
              </Route>
              <Route path="/orders" element={<OrderPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/pay" element={<PayPage />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route path="/orders/:id" element={<OrderDetailPage />} />
              <Route
                path="/change-password"
                element={<CustomerChangePasswordPage />}
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Route>

          <Route element={<AdminRoute />}>
            <Route path="/admin" element={<MasterLayoutAdmin />}>
              <Route index element={<DashBoard />} />
              <Route path="/admin/products" element={<AdminProductPage />} />
              <Route path="/admin/orders" element={<AdminOrderPage />} />
              <Route
                path="/admin/orders/:id"
                element={<AdminOrderDetailPage />}
              />
              <Route
                path="/admin/products/edit/:id"
                element={<AdminEditProductPage />}
              />
              <Route
                path="/admin/products/create"
                element={<AdminCreateProductPage />}
              />
              <Route
                path="/admin/change-password"
                element={<AdminChangePasswordPage />}
              />
              <Route
                path="/admin/featured"
                element={<AdminFeaturedProductsPage />}
              />
            </Route>
            <Route path="*" element={<AdminRoute />} />
          </Route>

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

export const CustomerRoute = () => {
  const role = auth.getRole();

  if (role === "admin") return <Navigate to={"/admin"} />;
  return <Outlet />;
};

export const AdminRoute = () => {
  const role = auth.getRole();

  if (role !== "admin") {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

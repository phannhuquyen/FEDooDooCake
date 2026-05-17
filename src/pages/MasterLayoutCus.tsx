import { Outlet } from "react-router-dom";
import Header from "../components/cus/layouts/Header";
import Footer from "../components/cus/layouts/Footer";

const MasterLayoutCus = () => {
  return (
    <div className="max-w-screen mx-auto bg-[rgb(248_246_247)] font-primary">
      <Header />
      <main className="max-w-7xl min-h-[calc(100vh-360px)] mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MasterLayoutCus;

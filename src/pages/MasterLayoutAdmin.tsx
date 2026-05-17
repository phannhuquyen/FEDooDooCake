import { Outlet } from "react-router-dom";
import AdminSideNavBar from "../components/admin/layout/AdminSideNavBar";

const MasterLayoutAdmin = () => {
  return (
    <div className="font-display bg-[rgb(248_246_247)] ">
      <div className="relative flex min-h-screen w-full">
        {/* sidebar */}
        <AdminSideNavBar />
        {/* maincontent */}
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MasterLayoutAdmin;

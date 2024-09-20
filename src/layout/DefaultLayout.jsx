import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DefaultLayout = () => {
  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;

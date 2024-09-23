import { Outlet } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";
const RootLayout = () => {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-start">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;

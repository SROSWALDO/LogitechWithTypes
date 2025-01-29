import Navbar from "./Navbar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full min-h-screen font-poppins">
      <Navbar />
      <Header showDrawer={function (): void {
              throw new Error("Function not implemented.");
          } } />
      <Outlet /> 
    </div>
  );
};

export default Layout;

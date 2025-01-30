import Navbar from "./Navbar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full min-h-screen font-poppins">
      <Navbar />
      <Header showDrawer={showDrawer} />
      <Outlet context={{ onClose, open, isModalOpen, showModal, handleCancel }} />
    </div>
  );
};

export default Layout;

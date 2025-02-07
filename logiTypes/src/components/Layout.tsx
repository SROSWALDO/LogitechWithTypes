import Navbar from "./Navbar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import ProductModal from "./ProductModal";
import { message } from "antd";
import Cart from "./Cart";

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

  const [messageApi, contextHolder] = message.useMessage();
  
    const success = () => {
      messageApi.open({
        type: 'success',
        content: 'Producto agregado correctamente!',
      });
    };
  
    const deleteProduct = () => {
      messageApi.open({
        type: 'info',
        content: 'Producto eliminado correctamente!'
      })
    }
  
    const errorAlert = () => {
      messageApi.open({
        type: 'error',
        content: 'Error al agregar el product, falta de stock!'
      })
    }

  return (
    <div className="w-full min-h-screen font-poppins">
      {contextHolder}
      <Navbar />
      <Header showDrawer={showDrawer} />

      <Cart errorAlert={errorAlert} open={open} onClose={onClose} deleteProductAlert={deleteProduct}  />
      <ProductModal isModalOpen={isModalOpen} handleCancel={handleCancel} success={success} errorAlert={errorAlert}  />

      <Outlet context={{ onClose, open, isModalOpen, showModal, handleCancel, deleteProduct, showDrawer }} />
    </div>
  );
};

export default Layout;

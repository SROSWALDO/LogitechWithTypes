import Navbar from "./Navbar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import ProductModal from "./ProductModal";
import { message, Modal } from "antd";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { getProduct2 } from "../store/actions";

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

  //* modal
  const product2 = useSelector((state: RootState ) => state.product2);
  const [isModalOp, setIsModalOp] = useState(false);

  const showModal2 = () => {
    setIsModalOp(true);
  };

  const handleCancel2 = () => {
    setIsModalOp(false);
  };

  const dispatch = useDispatch<AppDispatch>()

  const handleGetProduct = () => {
    dispatch(getProduct2())
  }



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
      <Header showDrawer={showDrawer} showModal={showModal2} handleCancel={handleCancel2} />

      <Modal footer={false} open={isModalOp} onCancel={handleCancel2}>
        <h1>Deseas comprar el logitech G pro?</h1>
        {product2 && (
          <div>
            <img className="w-[200px]" src={product2.image} alt="" />
            <h1>{product2.name}</h1>
          </div>
        )
        }
        <div className="mt-3">
          <button onClick={handleGetProduct} className="bg-blue-500 hover:bg-blue-400 text-white px-7 rounded py-2 mr-5 cursor-pointer" >Si</button>
          <button onClick={handleCancel2} className="bg-red-500 hover:bg-red-400 text-white px-7 rounded py-2 cursor-pointer ">No</button>
        </div>
      </Modal>

      <Cart errorAlert={errorAlert} open={open} onClose={onClose} deleteProductAlert={deleteProduct}  />
      <ProductModal isModalOpen={isModalOpen} handleCancel={handleCancel} success={success} errorAlert={errorAlert}  />

      <Outlet context={{ onClose, open, isModalOpen, showModal, handleCancel, deleteProduct, showDrawer }} />
    </div>
  );
};

export default Layout;

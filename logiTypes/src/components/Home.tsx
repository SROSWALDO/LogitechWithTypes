import { useDispatch, useSelector } from "react-redux"
import Header from "./Header"
import Navbar from "./Navbar"
import { useEffect, useState } from "react"
import { getProducts } from "../store/actions"
import { AppDispatch, RootState } from "../store/store"
import ProductDetail from "./ProductDetail"
import { message, Pagination, Popover } from "antd"
import ProductModal from "./ProductModal"
import Cart from "./Cart"
import Filters from "./Filters"


const Home = () => {

  const dispatch = useDispatch<AppDispatch>()
  const products = useSelector((state: RootState ) => state.products);
  const [page, setPage] = useState(1);

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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const productsForPage = 6;
  const startIndex = (page - 1) * productsForPage
  const endIndex = startIndex + productsForPage
  const productsPaginates = products.slice(startIndex,endIndex)
  const handlePageChange = (page: number) => {
    setPage(page)
  }

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getProducts())
  },[dispatch])

  return (
    <div className="w-full min-h-screen font-poppins ">
      {contextHolder}
      {/* <Navbar/> */}

      {/* <Header showDrawer={showDrawer}/> */}

      <div className="mt-5 flex justify-end mr-28 " > 
        <Popover placement="bottomLeft" content={
          <Filters/>
        } >
          <div className="w-[60px] border-b-2 ">
          <h1 className="text-xl">Filters</h1>
          </div>
        </Popover>
      </div>

      <div className="flex flex-wrap justify-center w-full mb-5">
      {productsPaginates.map(product => (
        <ProductDetail key={product.id} product={product} showModal={showModal} />
      ))}
      </div>

      <ProductModal isModalOpen={isModalOpen} handleCancel={handleCancel} success={success} errorAlert={errorAlert}  />

      <Cart open={open} onClose={onClose} deleteProductAlert={deleteProduct}  />

      <Pagination style={{marginBottom: "15px"}} align="center" onChange={handlePageChange} total={products.length} pageSize={productsForPage} current={page}  />

    </div>
  )
}

export default Home
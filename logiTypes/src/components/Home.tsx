import { useDispatch, useSelector } from "react-redux"
import Header from "./Header"
import Navbar from "./Navbar"
import { useEffect, useState } from "react"
import { getProducts } from "../store/actions"
import { AppDispatch, RootState } from "../store/store"
import ProductDetail from "./ProductDetail"
import { Drawer, Pagination } from "antd"


const Home = () => {

  const dispatch = useDispatch<AppDispatch>()
  const products = useSelector((state: RootState ) => state.products);
  const [page, setPage] = useState(1)

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
      <Navbar/>

      <Header showDrawer={showDrawer}/>

      <div className="flex flex-wrap justify-center w-full mb-5">
      {productsPaginates.map(product => (
        <ProductDetail key={product.id} product={product} />
      ))}
      </div>

      <Drawer onClose={onClose} open={open} >
        <p>Hola</p>
      </Drawer>

      <Pagination style={{marginBottom: "15px"}} align="center" onChange={handlePageChange} total={products.length} pageSize={productsForPage} current={page}  />

    </div>
  )
}

export default Home
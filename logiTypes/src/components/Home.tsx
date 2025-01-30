import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getProducts } from "../store/actions"
import { AppDispatch, RootState } from "../store/store"
import ProductDetail from "./ProductDetail"
import { Pagination, Popover } from "antd"
import Filters from "./Filters"
import { useOutletContext } from "react-router-dom"

type OutletContextType = {
  isModalOpen: boolean
  showModal: () => void

};

const Home = () => {
  const { showModal } = useOutletContext<OutletContextType>();

  const dispatch = useDispatch<AppDispatch>()
  const products = useSelector((state: RootState ) => state.products);
  const [page, setPage] = useState(1);

  const productsForPage = 6;
  const startIndex = (page - 1) * productsForPage
  const endIndex = startIndex + productsForPage
  const productsPaginates = products.slice(startIndex,endIndex)
  const handlePageChange = (page: number) => {
    setPage(page)
  }

  

  useEffect(() => {
    dispatch(getProducts())
  },[dispatch])

  return (
    <div className="w-full min-h-screen font-poppins ">
      

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

      <Pagination style={{marginBottom: "15px"}} align="center" onChange={handlePageChange} total={products.length} pageSize={productsForPage} current={page}  />

    </div>
  )
}

export default Home
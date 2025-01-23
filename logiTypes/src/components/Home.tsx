import { useDispatch, useSelector } from "react-redux"
import Header from "./Header"
import Navbar from "./Navbar"
import { useEffect } from "react"
import { getProducts } from "../store/actions"
import { AppDispatch, RootState } from "../store/store"
import ProductDetail from "./ProductDetail"


const Home = () => {

  const dispatch = useDispatch<AppDispatch>()
  const products = useSelector((state: RootState ) => state.products)

  useEffect(() => {
    dispatch(getProducts())
  },[dispatch])

  return (
    <div className="w-full min-h-screen font-poppins ">
      <Navbar/>

      <Header/>

      <div className="flex flex-wrap justify-center w-full">
      {products.map(product => (
        <ProductDetail key={product.id} product={product} />
      ))}
      </div>

    </div>
  )
}

export default Home
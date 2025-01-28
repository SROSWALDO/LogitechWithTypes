import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/store"
import { filterByCategory, orderByPrice } from "../store/actions"

const Filters = () => {

    const productsCopy = useSelector((state: RootState) => state.products_copy )
    const dispatch = useDispatch<AppDispatch>() 

    const categories = Array.from(
        new Set(productsCopy.map(product => product.category))
    )

    const handleFilterCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const category = e.target.value
        dispatch(filterByCategory(category))
    }

    const handleOrderPrice = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const order = e.target.value;
        dispatch(orderByPrice(order))
    }

  return (
    <div className="flex flex-col w-[250px] " >
      <select onChange={handleFilterCategory} >
        <option value="">Filter by category</option>
        {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
        ))}

      </select>

      <select onChange={handleOrderPrice} >
        <option value="">Filter by price</option>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
    </div>
  )
}

export default Filters

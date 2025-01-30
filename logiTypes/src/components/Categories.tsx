
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../store/store";
import { useEffect } from "react";
import {  getProducts } from "../store/actions";
import { useOutletContext, useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";

type OutletContextType = {
  showModal: () => void
};

const Categories = () => {
  const { showModal} = useOutletContext<OutletContextType>();
  const products = useSelector((state: RootState) => state.products);

  const dispatch = useDispatch<AppDispatch>();

  const { category } = useParams();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filteredProducts = category 
  ? products.filter(product => product.category === category) 
  : products;


  return (
    <div className="w-full min-h-screen">
      

      <div className="flex flex-wrap justify-center w-full mb-5">
        {filteredProducts.map(product => (
            <ProductDetail key={product.id} product={product} showModal={showModal} />
        ))}
      </div>
    </div>
  );
};

export default Categories;

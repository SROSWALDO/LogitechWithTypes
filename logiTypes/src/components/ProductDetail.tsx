/* eslint-disable react-refresh/only-export-components */
import { Product } from "../types";
import cart from "../assets/cart_add.svg";
import { Carousel } from "antd";
import { getProduct } from "../store/actions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";

type ProductDetailProps = {
  product: Product;
  showModal: () => void;
};

export type colorsType = {
  blanco: string;
  negro: string;
  rosa: string;
  fuchsia: string;
  plateado: string;
};

export const colors: colorsType = {
  blanco: "#ffffff",
  negro: "#000000",
  rosa: "#FFC0CB",
  fuchsia: "#FF00FF",
  plateado: "#C0C0C0",
};

export const useAppDispatch: () => AppDispatch = useDispatch;

// const handleAddToCart = (product: Product) => {

//   dispatch(addToCart())
// }

const ProductDetail = ({ product, showModal }: ProductDetailProps) => {
  const dispatch = useAppDispatch();

  const handleModal = () => {
    dispatch(getProduct(product.id));
    showModal();
  };
  return (
    <div className="flex flex-col justify-between shadow-md p-1 bg-white mt-5 mx-3 ">
      <div className=" w-[380px] h-[350px] bg-slate-100 m-1  ">
        <Carousel arrows={false} autoplay={true} autoplaySpeed={2800}>
          {product?.images.map((image, index) => (
            <img
              className="w-[380px] h-[350px] object-contain"
              key={index}
              src={image.url}
              alt=""
            />
          ))}
        </Carousel>
      </div>

      <div className="flex justify-center">
        {product.variants.map((variant, index) => (
          <div
            style={{
              backgroundColor: colors[variant.color as keyof colorsType],
            }}
            key={index}
            className="w-6 h-6 rounded-full border border-black mx-1"
            title={variant.color}
          ></div>
        ))}
      </div>

      <div>
        <h1 className="font-semibold uppercase mt-5 text-lg text-center flex-1 ">
          {product.name}
        </h1>
        <p className="w-[370px] font-light text-gray-500 text-sm mt-5 text-center">
          {product.description}
        </p>

        <div className="flex justify-between items-center">
          <p className="mt-5 font-semibold text-xl">
            $
            {product.price.toString().length > 3
              ? product.price.toString().slice(0, -3) +
                "," +
                product.price.toString().slice(-3)
              : product.price}
          </p>

          <img
            onClick={() => handleModal()}
            className="bg-black rounded-full h-8 w-8 p-1 cursor-pointer hover:bg-black/80 mr-5"
            src={cart}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

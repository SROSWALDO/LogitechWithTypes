import { Carousel, Modal } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { colors, colorsType, useAppDispatch } from "./ProductDetail";
import { useState } from "react";
import { CartItem } from "../types";
import { addToCart } from "../store/actions";

type ProductModalProps = {
  handleCancel: () => void;
  isModalOpen: boolean;
  success: () => void;
  errorAlert: () => void;
};

const ProductModal = ({ handleCancel, isModalOpen, success, errorAlert }: ProductModalProps) => {
  const product = useSelector((state: RootState) => state.product);

  const dispatch = useAppDispatch()

  const selectedColor = (color: string) => {
    setProductData((prevData) => ({
      ...prevData,
      color,
    }));
  };

  const [productData, setProductData] = useState({
    color: "",
    quantity: 1,
  });

  const handleAddToCart = async () => {
    if (!product) {
      console.error("Product is undefined or null");
      return;
    }

    if (!productData.color) {
      console.error("No color selected");
      return;
    }

    const data: CartItem = {
      productId: product.id,
      color: productData.color,
      quantity: productData.quantity,
    };

    const response = await dispatch(addToCart(data));

    if(response.success) {
      handleCancel()
      setProductData({
        color: "",
        quantity: 1
      })
      success()
    } else {
      console.error("Error al agregar al carrito")
      errorAlert()
    }
  };

  return (
    <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
      <div className=" bg-[#F1F5F9] ">
        <Carousel arrows={true}>
          {product?.images?.map((image, index) => (
            <img
              className="w-[300px] h-[300px] object-contain pl-5 "
              key={index}
              src={image.url}
              alt=""
            />
          ))}
        </Carousel>
      </div>
      <div>
        <h1 className="text-black font-semibold text-xl w-[300px] text-center mt-3 m-auto ">
          {product?.name}
        </h1>
        <div className="flex justify-center mt-5">
          {product?.variants?.map((variant, index) => (
            <div
            onClick={() => selectedColor(variant.color)}
              style={{
                backgroundColor: colors[variant.color as keyof colorsType],
              }}
              key={index}
              title={variant.color}
              className={`w-6 h-6 rounded-full border border-black mx-1 cursor-pointer ${productData.color === variant.color ? 'border border-blue-500' : '' } `}
            ></div>
          ))}
        </div>
        <div>
          <p className="mt-4 w-[250px] text-center text-sm m-auto ">
            {product?.description}
          </p>
        </div>
        <div className="flex justify-between px-2 items-center mt-5">
          <p className="text-black font-semibold text-lg">${product?.price}</p>
          <button onClick={handleAddToCart} className="bg-black p-2 text-white px-6 rounded ">Buy</button>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;

import { Drawer } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useAppDispatch } from "./ProductDetail";
import { useEffect } from "react";
import { deleteProduct, getCart } from "../store/actions";
import trash from "../assets/trash.svg";
import { ProductDelete } from "../types";

type CartProps = {
  open: boolean;
  onClose: () => void;
};

const Cart = ({ open, onClose }: CartProps) => {
  const cart = useSelector((state: RootState) => state.cart);

  const dispatch = useAppDispatch();

  const handleDeleteProduct = (product:ProductDelete) => {
    dispatch(deleteProduct(product.productId, product.color))
  }

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  

  return (
    <Drawer
      open={open}
      onClose={onClose}
      headerStyle={{ padding: "10px" }}
      width={400}
      bodyStyle={{ padding: "10px" }}
    >
      <div className=" border-b-gray-300 border-b pb-2">
        <h1 className="text-2xl font-semibold ">Shopping Cart</h1>
      </div>

      {cart.map((product) => (
        <div
          className="flex my-5 items-center max-h-[500px]  "
          key={product.productId + product.color}
        >
          <div>
            <img className="w-[100px] " src={product.image} alt="" />
          </div>

          <div className="ml-2">
            <div className="flex justify-between w-[260px]">
              <h1 className="font-semibold text-base">{product.name}</h1>
              <img onClick={() => handleDeleteProduct(product)} className="w-5" src={trash} alt="" />
            </div>
            <p className="font-semibold">
              Color:{" "}
              <span className="text-gray-600 font-normal">
                {product.color.charAt(0).toUpperCase() + product.color.slice(1)}
              </span>
            </p>

            <div className="flex mt-2 justify-between w-[250px]">
              <div className="flex">
                <button className="w-8 h-5 flex items-center justify-center border border-gray-300  rounded-full">
                  -
                </button>
                <p className="mx-2">{product.quantity}</p>
                <button className="w-8 h-5 flex items-center justify-center border border-gray-300  rounded-full">
                  +
                </button>
              </div>

              <div>
                <p className="font-semibold text-base">${product.price}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div>
        <p className="text-xl font-semibold">
          Total: $
          {cart.reduce(
            (acumulador, product) =>
              acumulador + product.price * product.quantity,
            0
          )}
          .00
        </p>
      </div>
    </Drawer>
  );
};

export default Cart;

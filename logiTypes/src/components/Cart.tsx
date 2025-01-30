import { Drawer } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useAppDispatch } from "./ProductDetail";
import { useEffect } from "react";
import { deleteProduct, editProduct, getCart } from "../store/actions";
import trash from "../assets/trash.svg";
import { ProductDelete, ProductEdited } from "../types";

type CartProps = {
  open: boolean;
  onClose: () => void;
  deleteProductAlert: () => void;
};

const Cart = ({ open, onClose, deleteProductAlert }: CartProps) => {
  const cart = useSelector((state: RootState) => state.cart);

  const dispatch = useAppDispatch();

  const handleDeleteProduct = (product: ProductDelete) => {
    dispatch(deleteProduct(product.productId, product.color));
    deleteProductAlert();
  };

  const handleLessQuantity = (product: ProductEdited) => {
    if (product.quantity > 1) {
      dispatch(
        editProduct(product.productId, {
          color: product.color,
          quantity: product.quantity - 1,
        })
      );
    }
  };

  const handleMoreQuantity = (product: ProductEdited) => {
    dispatch(
      editProduct(product.productId, {
        color: product.color,
        quantity: product.quantity + 1,
      })
    );
  };

  const formatToPesos = (amount: number) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(amount);
  };

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <Drawer
      open={open}
      onClose={onClose}
      headerStyle={{ padding: "10px" }}
      width={450}
      bodyStyle={{ padding: "10px" }}
    >
      {cart.length > 0 ? (
        <div>
          <div className=" border-b-gray-300 border-b pb-2">
            <h1 className="text-2xl font-semibold uppercase">Shopping Cart</h1>
          </div>

          <div className="max-h-[490px] overflow-y-auto shadow-md mb-1 ">
            {cart.map((product) => (
              <div
                className="flex my-3 items-center"
                key={product.productId + product.color}
              >
                <div>
                  <img className="w-[130px] " src={product.image} alt="" />
                </div>

                <div className="ml-2">
                  <div className="flex justify-between w-[270px]">
                    <h1 className="font-semibold  uppercase">{product.name}</h1>
                    <img
                      onClick={() => handleDeleteProduct(product)}
                      className="w-6 cursor-pointer hover:scale-105 "
                      src={trash}
                      alt=""
                    />
                  </div>
                  <p className="font-semibold">
                    Color:{" "}
                    <span className="text-gray-600 font-normal">
                      {product.color.charAt(0).toUpperCase() +
                        product.color.slice(1)}
                    </span>
                  </p>

                  <div className="flex items-center mt-2 justify-between w-[270px]">
                    <div className="flex items-center border-gray-300 border p-[2px]">
                      <button
                        onClick={() => handleLessQuantity(product)}
                        className="w-10 h-10 flex hover:bg-slate-300 items-center justify-center border  border-none rounded-md cursor-pointer "
                      >
                        -
                      </button>
                      <p className="mx-5">{product.quantity}</p>
                      <button
                        onClick={() => handleMoreQuantity(product)}
                        className="w-10 h-10 hover:bg-slate-300 flex items-center justify-center border border-none  rounded-md cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    <div>
                      <p className="font-semibold text-base">
                        {formatToPesos(product.price * product.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7">
            <p className="font-semibold">
              Subtotal de artículo:{" "}
              <span className="font-normal text-gray-500">
                (Sin incluir impuestos ni envío)
              </span>
            </p>
            <p className="text-4xl mt-1 font-bold">
              {formatToPesos(
                cart.reduce(
                  (acumulador, product) =>
                    acumulador + product.price * product.quantity,
                  0
                )
              )}
            </p>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-base font-semibold mt-5 text-center ">
            Tu carro está vacío. Empezar a comprar ahora
          </h1>
          <div className="flex justify-center mt-5">
            <button
              onClick={onClose}
              className="bg-black font-semibold text-white w-full py-5 cursor-pointer hover:bg-black/90"
            >
              CERRAR
            </button>
          </div>
        </div>
      )}
    </Drawer>
  );
};

export default Cart;

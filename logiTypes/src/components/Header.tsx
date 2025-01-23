
import logitech from "../assets/logitech.png";
import banner from "../assets/promo.jpg";
import search from "../assets/search.svg";
import user from "../assets/user.svg";
import cart from "../assets/cart.svg";

type HeaderProps = {
  showDrawer:() => void
}

const Header = ({showDrawer}: HeaderProps) => {
  return (
    <header className="bg-[#32176D] w-full h-[530px] relative">
        <nav className="flex px-40 pt-5 justify-between z-[100] relative">
          <div>
            <img className="w-32" src={logitech} alt="" />
          </div>

          <div className="flex">

            <p className="text-white uppercase font-semibold mx-5 cursor-pointer">
              Conocer mas
            </p>
          
            
            <p className="text-white uppercase font-semibold mx-5">Descubre</p>
            <p className="text-white uppercase font-semibold mx-5">Empresas</p>
            <p className="text-white uppercase font-semibold mx-5">
              Asistencia
            </p>
          </div>

          <div className="flex items-center z-[9999] ">
            <div className="w-[160px] bg-white/40 p-1 rounded-xl flex">
              <input
                className="bg-transparent placeholder:text-white w-[120px] focus:outline-none "
                type="text"
                placeholder="Buscar..."
              />
              <img className="w-6" src={search} alt="search" />
            </div>
            <img className="mx-2 cursor-pointer " src={user} alt="user" />
        
            <img onClick={showDrawer} className="ml-2 cursor-pointer " src={cart} alt="cart" />
             
          </div>
        </nav>

        <div className="mt-16 ml-[158px]">
          <h2 className="text-5xl text-white font-semibold w-[390px] ">
            NUEVO AÑO, NUEVO EQUIPO
          </h2>
          <p className="text-white text-xl mt-5">
            ¡ Empieza el año ahorrando !
          </p>
          <p className="text-white text-xl mt-5 font-semibold">
            20% de descuento en todos nuestros productos
          </p>
          <p className="text-white text-sm mt-3 font-light">
            Oferta por tiempo limitado.{" "}
            <span className="font-semibold">Aplican Exclusiónes*</span>
          </p>

          <button className="uppercase bg-white p-4 px-9 mt-4 text-[14px] font-semibold ">
            Compra ahora
          </button>
        </div>

        <img
          className="absolute w-[890px] h-full top-0 right-0  object-cover object-left "
          style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)" }}
          src={banner}
          alt=""
        />
      </header>
  )
}

export default Header

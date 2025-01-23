import banner from "../assets/banner.jpg";
import world from '../assets/world.svg'

const Navbar = () => {
  return (
    <div className="w-full h-16 flex justify-between shadow-md px-16 items-center">
    
      <div className="flex items-center ">
        <img className="w-48" src={banner} alt="" />
            <p className="text-gray-500 text-sm ">Nuestras marcas</p>
          
      </div>

      <div className="flex">
      <img className="w-[18px]" src={world} alt="" />
      <p className="text-gray-500 font-semibold ml-1 text-sm">Mexico</p>

      </div>

    </div>
  )
}

export default Navbar
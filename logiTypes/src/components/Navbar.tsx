import { Dropdown, MenuProps } from "antd";
import banner from "../assets/banner.jpg";
import world from "../assets/world.svg";
import { DownOutlined } from "@ant-design/icons";
import astro from '../assets/astro.svg'
import streamlabs from '../assets/streamlabs.png'
import ultimate from '../assets/ultimateEars.png'

const Navbar = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div className="flex items-center justify-center">
          <img src={astro} alt="Banner" className="w-14 my-2 opacity-50 hover:opacity-100 " />
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="flex items-center justify-center">
          <img src={streamlabs} alt="Mundo" className="w-16 my-2 opacity-50 hover:opacity-100 " />
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="flex items-center justify-center">
          <img src={ultimate} alt="Mundo" className="w-12 my-2 opacity-50 filter grayscale hover:filter-none hover:opacity-100 " />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full h-16 flex justify-between shadow-md px-16 items-center">
      <div className="flex items-center ">
        <img className="w-48" src={banner} alt="" />

        <Dropdown  menu={{ items }}>
          <div className="flex items-center  ">
            <p className="text-gray-500 text-sm mr-1">Nuestras marcas</p>
            <DownOutlined  style={{ color: 'gray' }} />
          </div>
        </Dropdown>
      </div>

      <div className="flex">
        <img className="w-[18px]" src={world} alt="" />
        <p className="text-gray-500 font-semibold ml-1 text-sm">Mexico</p>
      </div>
    </div>
  );
};

export default Navbar;

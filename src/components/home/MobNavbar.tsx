"use client";
import React from "react";

import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMenuOutline } from "react-icons/io5";
import { AiOutlineHome, AiOutlineAppstore } from "react-icons/ai";

const MobNavbar = () => {
  const Menus = [
    { name: "Home", icon: <AiOutlineHome />, dis: "translate-x-0" },
    { name: "Cart", icon: <HiOutlineShoppingBag />, dis: "translate-x-16" },
    { name: "Liked", icon: <FiHeart />, dis: "translate-x-32" },
    { name: "Photos", icon: <IoMenuOutline />, dis: "translate-x-48" },
    { name: "Settings", icon: <AiOutlineAppstore />, dis: "translate-x-64" },
  ];
  const [active, setActive] = React.useState(0);

  return (
    <div className="bg-gray-200 max-h-[4.4rem] h-full px-6 rounded-t-lg lg:hidden fixed bottom-0 left-0 right-0 z-50">
      <ul className="flex relative">
        <span
          className={`bg-black/60 duration-500 ${Menus[active].dis} border-4 border-white h-16 w-16 absolute
         -top-5 rounded-full`}
        >
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
          rounded-tr-[11px] shadow-myShadow1"
          />
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
          rounded-tl-[11px] shadow-myShadow2"
          />
        </span>
        {Menus.map((menu, i) => (
          <li key={i} className="w-16">
            <a
              className="flex items-center flex-col space-y-2 text-center pt-6"
              onClick={() => setActive(i)}
            >
              <span
                className={`text-xl cursor-pointer duration-500 ${
                  i === active && "-mt-6 text-white relative z-10"
                }`}
              >
                {menu.icon}
              </span>
              <span
                className={` ${
                  active === i
                    ? "translate-y-4 duration-700 opacity-100"
                    : "opacity-0 translate-y-10"
                } `}
              >
                {menu.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobNavbar;

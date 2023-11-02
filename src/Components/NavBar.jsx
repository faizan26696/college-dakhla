import { useState } from "react";
import Button from "./Button";
import { FiMenu } from "react-icons/fi";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  // eslint-disable-next-line
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <>
      {" "}
      <div className=" fixed z-50 w-full flex bg-black h-20 justify-between  items-center p-1 sm:justify-around  ">
        <div className="flex items-center justify-between w-full  sm:w-[8rem] ">
          <div className="block md:hidden text-white text-3xl pl-[1rem]">
            <FiMenu />
          </div>

          <div>
            <img
              className="cursor-pointer pr-[3rem]"
              src="https://collegedakhla.com/wp-content/uploads/elementor/thumbs/COLLEGE-WHITE-q2iwfvul0ru9epmp8zzy5u1mf8fq043d9u8xksyfpc.png"
              alt="logo"
            />
          </div>
        </div>
        <div className="hidden md:block bg-white w-[0.5px] h-full"></div>

        <div className="hidden md:block">
          <ul className="flex text-white  justify-between  ">
            <li className="hover:bg-[yellowgreen]  duration-200 rounded-lg p-3 cursor-pointer font-semibold">
              HOME
            </li>
            <li className="hover:bg-[yellowgreen]  duration-200 rounded-lg p-3 cursor-pointer font-semibold">
              ADMISSION
            </li>
            <li className="hover:bg-[yellowgreen]  duration-200 rounded-lg p-3 cursor-pointer font-semibold">
              ABOUT US
            </li>
            <li className="hover:bg-[yellowgreen]  duration-200 rounded-lg p-3 cursor-pointer font-semibold">
              COURSES
            </li>
            <li className="hover:bg-[yellowgreen]  duration-200 rounded-lg p-3 cursor-pointer font-semibold">
              MBBS
            </li>
            <li className="hover:bg-[yellowgreen]  duration-200 rounded-lg p-3 cursor-pointer font-semibold">
              CONTACT US
            </li>
          </ul>
        </div>
        <div className="hidden md:block bg-white w-[0.5px] h-full "></div>
        <div className="hidden md:block">
          <Button
            className=" bg-green-500 cursor-pointer p-3 text-white hover:bg-[tomato]  duration-200"
            text="Call +91123456789"
          />
        </div>
      </div>
    </>
  );
};

export default NavBar;

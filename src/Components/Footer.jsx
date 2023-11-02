import React from "react";
import { MdOutlineLocationCity } from "react-icons/md";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <div className="bg-black ">
      <div className="pt-[2rem] bg-black h-[400px]  pb-4 flex items-center justify-around  ">
        <div className="px-[2rem] p-2">
          <img
            className="pl-3"
            src="https://collegedakhla.com/wp-content/uploads/elementor/thumbs/COLLEGE-WHITE-q2iwfvul0ru9epmp8zzy5u1mf8fq043d9u8xksyfpc.png"
            alt="logo"
          />
          <div className="text-white  flex items-start gap-1 p-2">
            <span>
              {" "}
              <MdOutlineLocationCity className="text-[yellowgreen] pt-2 text-3xl" />
            </span>
            <p className="w-[300px] text-left">
              First Floor , Plot No. 2 , Niti Khand 1, Near Mangal Chowk,
              Indrapuram. Ghaziabad (UP) 201014
            </p>
          </div>

          <div className="text-white  pl-3 flex items-center  gap-2  p-2">
            <span>
              {" "}
              <AiOutlineMail className="text-[yellowgreen] text-[18px]" />
            </span>
            <p>director@collegedakhla.com</p>
          </div>
          <div className="text-white pl-3 flex items-center  gap-2  p-2">
            <span>
              {" "}
              <AiOutlinePhone className="text-[yellowgreen] text-[18px] " />
            </span>
            <p>+919899880100</p>
          </div>
          <div className="flex items-center pl-3">
            <SocialIcons />
          </div>
        </div>

        <div className="flex justify-around gap-[3rem]   ">
          <div className="text-white">
            <h2 className="text-bold text-2xl p-2 gap-[1rem] pb-[2rem]">
              Quick Links
            </h2>
            <ul className="p-2 cursor-pointer">
              <li className="cursor-pointer hover:text-orange-500 duration-200 pb-2">
                MBBS
              </li>
              <li className="cursor-pointer hover:text-orange-500 duration-200  pb-2">
                B.Tech
              </li>
              <li className="cursor-pointer hover:text-orange-500 duration-200 pb-2">
                BCA
              </li>
              <li className="cursor-pointer hover:text-orange-500 duration-200 pb-2">
                Enquiry
              </li>
            </ul>
          </div>

          <div className="text-white">
            <h2 className="text-bold text-2xl p-2 pb-[2rem]">Helpful Links</h2>
            <ul className="p-2 cursor-pointer">
              <li className="cursor-pointer hover:text-orange-500 duration-200 pb-2">
                Term of Service
              </li>
              <li className="cursor-pointer hover:text-orange-500 duration-200 pb-2">
                Privacy Policy
              </li>
              <li className="cursor-pointer hover:text-orange-500 duration-200 pb-2">
                Cookie Policy
              </li>
              <li className="cursor-pointer hover:text-orange-500 duration-200 pb-2">
                Contact us
              </li>
            </ul>
          </div>
          <div className="text-white pr-2">
            <h2 className="text-bold text-2xl p-2 pb-[2rem]">Page</h2>

            <ul className="p-2 cursor-pointer">
              <li className="cursor-pointer hover:text-orange-500 duration-200 pb-2">
                About us
              </li>
              <li className="cursor-pointer hover:text-orange-500 duration-200 pb-2">
                Careers
              </li>
              <li className="cursor-pointer hover:text-orange-500 duration-200 pb-2">
                News & Article
              </li>
              <li className="cursor-pointer hover:text-orange-500 duration-200  pb-2">
                Legal Notice
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="">
        <div className="bg-white w-400 h-[0.3px] "></div>
        <div>
          <p className="text-gray-200 text-[12px] p-[2rem]">
            Copyright © 2022 College Dakhla, All rights reserved. Built by
            Webstack Ocean. <br />
            Term of Service | Privacy Policy | Cookie Policy Contact us
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

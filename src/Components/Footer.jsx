import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <div className="bg-black ">
      <div className="pt-[2rem] bg-black h-[400px]  pb-4 flex items-center justify-between  ">
        <div className="px-[2rem] p-2">
          <img
            src="https://collegedakhla.com/wp-content/uploads/elementor/thumbs/COLLEGE-WHITE-q2iwfvul0ru9epmp8zzy5u1mf8fq043d9u8xksyfpc.png"
            alt="logo"
          />
          <div className="text-white flex items-center p-2">
            <span>
              {" "}
              <HiOutlineLocationMarker className="text-[yellowgreen] text-[18px]" />
            </span>
            <p>
              First Floor , Plot No. 2 , Niti Khand 1, Near Mangal Chowk,
              Indrapuram. Ghaziabad (UP) 201014
            </p>
          </div>

          <div className="text-white flex items-center p-2">
            <span>
              {" "}
              <AiOutlineMail className="text-[yellowgreen] text-[18px]" />
            </span>
            <p>director@collegedakhla.com</p>
          </div>
          <div className="text-white flex items-center p-2">
            <span>
              {" "}
              <AiOutlinePhone className="text-[yellowgreen] text-[18px] " />
            </span>
            <p>+919899880100</p>
          </div>
          <div flex items-center pl-3>
            <SocialIcons />
          </div>
        </div>

        <div className="flex justify-between  ">
          <div className="text-white">
            <h2 className="text-bold text-2xl p-2 gap-[1rem]">Quick Links</h2>
            <ul className="p-2 cursor-pointer">
              <li>MBBS</li>
              <li>B.Tech</li>
              <li>BCA</li>
              <li>Enquiry</li>
            </ul>
          </div>

          <div className="text-white">
            <h2 className="text-bold text-2xl p-2">Helpful Links</h2>
            <ul className="p-2 cursor-pointer">
              <li>Term of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="text-white pr-2">
            <h2 className="text-bold text-2xl p-2">Page</h2>

            <ul className="p-2 cursor-pointer">
              <li>About us</li>
              <li>Careers</li>
              <li>News & Article</li>
              <li>Legal Notice</li>
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

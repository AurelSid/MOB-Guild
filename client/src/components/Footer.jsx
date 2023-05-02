import React from "react";
import Logo from "../assets/images/Logo.png";
import {
  FaTwitter,
  FaInstagram,
  FaTelegram,
  FaDiscord,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black h-full w-full ">
      <div className="md:flex w-full    justify-around   ">
        <div className="md:flex items-center justify-center  order-2 hidden  ">
          <img src={Logo} alt="" className=" h-14" />
        </div>
        <div className="flex invert justify-center items-center order-1 ">
          <FaTwitter className="w-5 h-5  m-3" />
          <FaTelegram className="w-5 h-5  m-3" />
          <FaInstagram className="w-5 h-5  m-3" />
          <FaDiscord className="w-5 h-5  m-3" />
          <FaFacebook className="w-5 h-5  m-3" />
        </div>

        <div className="flex  text-white order-3 pb-5 md:pb-0">
          <h1 className="m-auto">
            © Copyright 2023 MOBguild. All rights reserved
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;

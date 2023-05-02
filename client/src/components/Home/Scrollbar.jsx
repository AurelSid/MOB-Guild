import React from "react";
import Image from "../../assets/images/controler.png";
import Logo from "../../assets/images/logo.png";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Scrollbar = () => {
  return (
    <div className=" flex fixed w-40 right-0 h-full z-9999 justify-center">
      <div className="m-auto">
        <div className=" bg-white w-2 h-8 rounded-full opacity-50 my-4"></div>
        <div className=" bg-white w-2 h-8 rounded-full opacity-50 my-4"></div>
        <div className=" bg-white w-2 h-8 rounded-full opacity-50 my-4"></div>
        <div className=" bg-white w-2 h-8 rounded-full opacity-50 my-4"></div>
      </div>
    </div>
  );
};

export default Scrollbar;

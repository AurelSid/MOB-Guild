import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AiFillWallet } from "react-icons/ai";

import { BsStack } from "react-icons/Bs";
const Navdesktop = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-20 w-full  z-20  fixed bg-zinc-900"
    >
      <div className="flex my-auto px-5 justify-ceneter h-full w-full relative ">
        <img
          src={Logo}
          alt=""
          className="w-20 h-20 my-auto"
          onClick={() => navigate("/Home")}
        />

        <div id="LIST" className=" flex w-7/12 m-auto h-full  ">
          <div
            className="text-white hover:bg-neutral-800 transition duration-500 ease-in-out h-full  flex cursor-pointer w-24 "
            onClick={() => navigate("/Games")}
          >
            <ul className="m-auto">Games</ul>
          </div>
          <div
            className="text-white hover:bg-neutral-800 transition duration-500 ease-in-out h-full flex px-5 cursor-pointer w-24  "
            onClick={() => navigate("/About")}
          >
            <ul className="m-auto">About</ul>
          </div>
          <div
            className="text-white hover:bg-neutral-800 transition duration-500 ease-in-out h-full flex px-5 cursor-pointer w-24  "
            onClick={() => (
              (window.location.href = "mailto:aurelsid021@gmail.com"),
              handleClick(),
              handleSwitch()
            )}
          >
            <ul className="m-auto">Contact</ul>
          </div>
          <div className="text-white hover:bg-neutral-800 transition duration-500 ease-in-out h-full flex px-5 cursor-pointer   ">
            <ul className="m-auto">Leaderboard</ul>
          </div>
        </div>
        <div className=" flex  h-full">
          <div
            className="text-white  hover:bg-neutral-800 transition duration-500 ease-in-out h-full flex px-5 cursor-pointer  "
            onClick={() => navigate("/Stacking")}
          >
            <h1 className="m-auto">Stacking</h1>
            <div className="m-auto pl-3">
              <BsStack />
            </div>
          </div>

          <button
            className="text-white bg-neutral-500 hover:bg-emerald-400  transition duration-500 ease-in-out  m-auto py-1.5 px-4 rounded-full flex ml-4   "
            onClick={() => navigate("/Login")}
          >
            Connect
            <div className="m-auto pl-3">
              <AiFillWallet />
            </div>
          </button>
        </div>
      </div>
      <div className="w-full bg-gradient-to-t from-neutral-800  via-lime-300 to-emerald-400 h-1"></div>
    </motion.div>
  );
};

export default Navdesktop;

import React from "react";
import Image from "../assets/images/Metamask.png";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import character from "../assets/images/login.png";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="background flex flex-col md:flex-row items-center justify-center p-12 gradient-bg-hero h-screen">
      <motion.img
        src={character}
        alt=""
        className="md:block fixed -bottom-40 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 2 }}
      />
      <motion.div
        className="hero-text md:w-1/2 md:ml-0 md:flex  z-20"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="hero-image m-auto w-9/12 md:w-6/12 p-5 md:p-0 mr-10 ">
          <img
            src={Image}
            alt="Hero Image"
            className="object-center rounded-lg"
          />
        </div>
        <div className="m-auto">
          <p className="md:text-2xl text-green-200 mb-6 ">
            Connect with metamask to view and handle all your activities right
            form your Metastate dashboard.
          </p>
          <button
            onClick={() => navigate("/Shop")}
            className="bg-gray-700 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full cursor-pointer"
          >
            Connect Wallet
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;

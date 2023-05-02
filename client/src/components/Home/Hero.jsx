import React from "react";
import Image from "../../assets/images/controler.png";
import Logo from "../../assets/images/Logo.png";
import character from "../../assets/images/PolyGame.png";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className=" background">
        <div className="flex  flex-col md:flex-row-reverse items-center justify-center md:p-12 p-2 h-screen w-sfull    ">
          <motion.div
            className="bg-neutral-900 h-screen w-screen absolute  justify-center items-center flex z-50   "
            initial={{ x: 0 }}
            animate={{ x: -2000 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 2.5 }}
          >
            <div>
              <motion.img
                src={Logo}
                alt=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
                className="md:h-screen"
              />
            </div>
          </motion.div>

          <div className="md:w-4/12 w-60  ">
            <motion.img
              src={Image}
              alt="Hero Image"
              className="object-center rounded-lg  "
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <motion.div
            className="hero-text md:w-4/12 md:ml-5  text-left p-5 md:p-0 z-40"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            onClick={() => navigate("/Games")}
          >
            <h1 className="text-2xl md:text-5xl  font-bold mb-4 text-white mobile-landscape:text-lg ">
              Join the MOB
            </h1>
            <p className="md:text-2xl text-md text-green-200 mb-6 mobile-landscape:text-sm  ">
              Leading the way in play to earn gaming guilds
            </p>
            <p className="text-sm text-green-200 mb-6 text-justify mobile-landscape:p-2 md:text-base pr-10  ">
              Enter the world of blockchain gaming and join our crypto gaming
              guild. Battle for rewards, explore new possibilities, and become
              part of our fun and welcoming community. Let's conquer the crypto
              gaming universe together
            </p>
            <div className="flex">
              <button className="text-white  bg-neutral-600 py-1 px-5 mr-2 rounded-md ">
                Join the Mob
              </button>
              <button className="text-white  bg-neutral-600 py-1 px-8 ml-2 rounded-md ">
                Follow us
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

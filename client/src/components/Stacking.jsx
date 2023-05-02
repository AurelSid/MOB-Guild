import React from "react";

import Chest from "../assets/images/chest.png";

import "../App.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Stacking = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className=" background h-full w-full ">
        <div className="flex  flex-col md:flex-row-reverse items-center justify-center pt-9  ">
          <motion.div
            className="  md:w-5/12   md:m-20   bg-gradient-to-r from-lime-300 to-emerald-400 rounded-3xl p-1 shadow-2xl shadow-black  "
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="flex  justify-between w-full h-full bg-neutral-700 bg-opacity-100 backdrop-blur-lg rounded-2xl p-3  ">
              <div className="m-auto h-full w-full ">
                <div className="m-auto">
                  <h1 className="text-white md:text-2xl font-bold">
                    $MOB Price
                  </h1>
                  <h1 className=" text-emerald-300 md:text-2xl  font-bold">
                    1.07$
                  </h1>
                </div>
              </div>
              <div className="flex m-auto justify-center items-center h-full w-full">
                <h1 className="text-white md:text-2xl m-auto">MOB Price</h1>
              </div>
              <div className="flex m-1  items-center w-full bg-gradient-to-r from-lime-300 to-emerald-400 rounded-xl px-4 py-1 justify-between  ">
                <div className="justify-left text-left">
                  <h1 className=" text-2xl font-bold text-neutral-700">
                    1.07$
                  </h1>
                  <h1>You balance</h1>
                </div>
                <button className="text-neutral-700 font-bold bg-white bg-opacity-40 px-8  rounded-lg shadow-md shadow-neutral-900 ml-5">
                  BUY <br /> MOB
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            className=" md:w-4/12 md:m-20  text-left p-5 md:pb-0 "
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h1 className="text-2xl md:text-5xl  font-bold mb-4 text-white mobile-landscape:text-lg ">
              Staking at its finest
            </h1>

            <p className="text-sm text-green-200 mb-6 text-justify mobile-landscape:p-2 md:text-base pr-10  ">
              Deposit your MOB tokens and lock them up for some period of time.
              In return, you’ll get more MOB, and rewards, like early access to
              our partners’ products and whitelists.
            </p>
            <div className="flex">
              <button className="text-white  bg-neutral-600 py-1 px-5 mr-2 rounded-md ">
                Deposit Now
              </button>
            </div>
          </motion.div>
        </div>
        <div className="md:flex items-center justify-center md:p-12 p-2  ">
          <motion.div
            className="  md:w-8/12      bg-gradient-to-r from-lime-300 to-emerald-400 rounded-3xl p-1 shadow-2xl shadow-black m-10   "
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="md:flex h-full w-full ">
              <div className="w-full h-dull justify-between p-5 bg-neutral-700 rounded-3xl ">
                <div>
                  <h1 className="font-bold text-white text-3xl text-left my-4">
                    $MOB SINGLE STAKING POOL
                  </h1>
                </div>
                <div>
                  <div className=" justify-between flex ">
                    <div className="text-left w-full white-glassmorphism rounded-xl p-3 my-2 ">
                      <h1 className="text-white text-xl font-semibold py-2">
                        Total value locked: $4.000.000
                      </h1>
                      <h1 className="text-white font-bold text-4xl bg-gradient-to-t from-lime-300 to-emerald-400 text-transparent bg-clip-text py-5">
                        APR : 11.5%
                      </h1>
                      <div className="w-full h-3 bg-gradient-to-r from-lime-300 to-emerald-400 rounded-full"></div>
                    </div>
                  </div>
                  <button className="bg-emerald-400 rounded-3xl text-xl w-9/12 p-3 font-bold my-3 text-neutral-700 shadow-neutral-800 shadow-xl">
                    <h1 className="">STAKE NOW</h1>
                  </button>
                </div>
              </div>
              <div className="w-full flex h-full m-auto  ">
                <img src={Chest} alt="" className=" m-auto" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Stacking;

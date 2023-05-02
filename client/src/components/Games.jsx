import React from "react";

import "../App.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import laptop from "../assets/images/laptop.png";
import { FaUsers } from "react-icons/fa";
const About = () => {
  const navigate = useNavigate();
  return (
    <div className="background items-center justify-center h-full md:pb-20 pb-10">
      <motion.div
        className="w-full  justify-center items-center pt-40 mb-40 relative flex "
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        <div className="md:text-8xl text-3xl  text-green-200 font-bold absolute  m-auto z-10 ">
          <h1 className="bg-gradient-to-r from-emerald-500 to-green-200 text-transparent bg-clip-text shadow-2xl md:mb-40 cursor-default ">
            WELCOME TO THE GAME HUB
          </h1>
        </div>

        <img src={laptop} alt="" className="m-auto opacity-80 p-4 md:p-0 " />
      </motion.div>

      {/*////////////////////////////*/}
      {/*////////////////////////////*/}

      <div className="h-full   w-full ">
        <motion.div
          className="lg:grid grid-cols-2 "
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          {/*////////////////////////////*/}

          <div className="m-auto w-full md:flex justify-center items-center py-3 ">
            <motion.div
              className="  md:w-10/12 md:10/12      bg-gradient-to-r from-lime-300 to-emerald-400 rounded-3xl p-1 shadow-2xl shadow-black  mx-14    "
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="md:flex ">
                <div className="w-full h-full justify-between p-5 bg-neutral-700 md:rounded-l-3xl rounded-t-3xl md:rounded-tr-none md:m-1 ">
                  <div>
                    <h1 className="font-bold text-white text-lg md:text-2xl text-left md:my-4">
                      BIG TIME || MMORPG
                    </h1>
                  </div>
                  <div>
                    <div className=" justify-between flex  ">
                      <div className="text-left w-full white-glassmorphism rounded-xl p-3 my-2 ">
                        <h1 className="text-white md:text-xl font-semibold py-2 flex">
                          14.000 Players total{" "}
                          <div className="my-auto ml-2">
                            <FaUsers />
                          </div>
                        </h1>
                        <h1 className="text-white font-bold text-lg md:text-3xl bg-gradient-to-t from-lime-300 to-emerald-400 text-transparent bg-clip-text py-5">
                          MOBsters : 2.000
                        </h1>
                        <div className="w-full h-3 bg-gradient-to-r from-lime-300 to-emerald-400 rounded-full"></div>
                      </div>
                    </div>
                    <button className="bg-emerald-400 rounded-3xl text-lg w-9/12 p-2 font-bold md:my-3 my-1 text-neutral-700 shadow-neutral-800 shadow-xl">
                      <h1 className="">Play NOW</h1>
                    </button>
                  </div>
                </div>
                <div className="flex md:p-1 md:mt-0 mt-2 w-full ">
                  <img
                    src="https://static1.squarespace.com/static/58af450eb3db2b0582612f1d/58af55d29a6bf733a4093aaa/621c89137e85c74fcd266e4c/1646123871316/tethan.jpg?format=1500w"
                    alt=""
                    className="rounded-b-3xl md:rounded-bl-none  md:rounded-r-3xl object-fill "
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/*///////////////////////////////////////////// */}
          {/*///////////////////////////////////////////// */}
          {/*///////////////////////////////////////////// */}
          {/*///////////////////////////////////////////// */}

          <div className="m-auto w-full md:flex justify-center items-center py-3 ">
            <motion.div
              className="  md:w-10/12 md:10/12     bg-gradient-to-r from-lime-300 to-emerald-400 rounded-3xl p-1 shadow-2xl shadow-black  mx-14    "
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="md:flex ">
                <div className="w-full h-dull justify-between p-5 bg-neutral-700 md:rounded-l-3xl rounded-t-3xl md:rounded-tr-none md:m-1 ">
                  <div>
                    <h1 className="font-bold text-white text-lg md:text-2xl text-left md:my-4">
                      BIG TIME || MMORPG
                    </h1>
                  </div>
                  <div>
                    <div className=" justify-between flex  ">
                      <div className="text-left w-full white-glassmorphism rounded-xl p-3 my-2 ">
                        <h1 className="text-white md:text-xl font-semibold py-2 flex">
                          14.000 Players total{" "}
                          <div className="my-auto ml-2">
                            <FaUsers />
                          </div>
                        </h1>
                        <h1 className="text-white font-bold text-lg md:text-3xl bg-gradient-to-t from-lime-300 to-emerald-400 text-transparent bg-clip-text py-5">
                          MOBsters : 2.000
                        </h1>
                        <div className="w-full h-3 bg-gradient-to-r from-lime-300 to-emerald-400 rounded-full"></div>
                      </div>
                    </div>
                    <button className="bg-emerald-400 rounded-3xl text-lg w-9/12 p-2 font-bold md:my-3 my-1 text-neutral-700 shadow-neutral-800 shadow-xl">
                      <h1 className="">Play NOW</h1>
                    </button>
                  </div>
                </div>
                <div className="flex md:p-1 md:mt-0 mt-2 w-full ">
                  <img
                    src="https://cdn.coingape.com/wp-content/uploads/2023/01/31120831/Illuvium-A-beginners-guide.jpg"
                    alt=""
                    className="rounded-b-3xl md:rounded-bl-none  md:rounded-r-3xl object-fill"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/*///////////////////////////////////////////// */}
          {/*///////////////////////////////////////////// */}

          <div className="m-auto w-full md:flex justify-center items-center py-3 ">
            <motion.div
              className="  md:w-10/12 md:10/12     bg-gradient-to-r from-lime-300 to-emerald-400 rounded-3xl p-1 shadow-2xl shadow-black  mx-14  "
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="md:flex ">
                <div className="w-full h-dull justify-between p-5 bg-neutral-700 md:rounded-l-3xl rounded-t-3xl md:rounded-tr-none md:m-1 ">
                  <div>
                    <h1 className="font-bold text-white text-lg md:text-2xl text-left md:my-4">
                      BIG TIME || MMORPG
                    </h1>
                  </div>
                  <div>
                    <div className=" justify-between flex  ">
                      <div className="text-left w-full white-glassmorphism rounded-xl p-3 my-2 ">
                        <h1 className="text-white md:text-xl font-semibold py-2 flex">
                          14.000 Players total{" "}
                          <div className="my-auto ml-2">
                            <FaUsers />
                          </div>
                        </h1>
                        <h1 className="text-white font-bold text-lg md:text-3xl bg-gradient-to-t from-lime-300 to-emerald-400 text-transparent bg-clip-text py-5">
                          MOBsters : 2.000
                        </h1>
                        <div className="w-full h-3 bg-gradient-to-r from-lime-300 to-emerald-400 rounded-full"></div>
                      </div>
                    </div>
                    <button className="bg-emerald-400 rounded-3xl text-lg w-9/12 p-2 font-bold md:my-3 my-1 text-neutral-700 shadow-neutral-800 shadow-xl">
                      <h1 className="">Play NOW</h1>
                    </button>
                  </div>
                </div>
                <div className="flex md:p-1 md:mt-0 mt-2 w-full ">
                  <img
                    src="https://gaminglyfe.com/wp-content/uploads/2021/07/Big-Time.jpg"
                    alt=""
                    className="rounded-b-3xl md:rounded-bl-none  md:rounded-r-3xl object-fill"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/*/////////////////////////////////////////////////////// */}
          {/*/////////////////////////////////////////////////////// */}

          <div className="m-auto w-full md:flex justify-center items-center py-3 ">
            <motion.div
              className="  md:w-10/12 md:10/12     bg-gradient-to-r from-lime-300 to-emerald-400 rounded-3xl p-1 shadow-2xl shadow-black  mx-14    "
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="md:flex ">
                <div className="w-full h-dull justify-between p-5 bg-neutral-700 md:rounded-l-3xl rounded-t-3xl md:rounded-tr-none md:m-1 ">
                  <div>
                    <h1 className="font-bold text-white text-lg md:text-2xl text-left md:my-4">
                      NYAN HEROES || MMORPG
                    </h1>
                  </div>
                  <div>
                    <div className=" justify-between flex  ">
                      <div className="text-left w-full white-glassmorphism rounded-xl p-3 my-2 ">
                        <h1 className="text-white md:text-xl font-semibold py-2 flex">
                          14.000 Players total{" "}
                          <div className="my-auto ml-2">
                            <FaUsers />
                          </div>
                        </h1>
                        <h1 className="text-white font-bold text-lg md:text-3xl bg-gradient-to-t from-lime-300 to-emerald-400 text-transparent bg-clip-text py-5">
                          MOBsters : 2.000
                        </h1>
                        <div className="w-full h-3 bg-gradient-to-r from-lime-300 to-emerald-400 rounded-full"></div>
                      </div>
                    </div>
                    <button className="bg-emerald-400 rounded-3xl text-lg w-9/12 p-2 font-bold md:my-3 my-1 text-neutral-700 shadow-neutral-800 shadow-xl">
                      <h1 className="">Play NOW</h1>
                    </button>
                  </div>
                </div>
                <div className="flex md:p-1 md:mt-0 mt-2 w-full ">
                  <img
                    src="https://beanstalk-9fcd.kxcdn.com/wp-content/uploads/2022/02/nyan-heroes.png"
                    alt=""
                    className="rounded-b-3xl md:rounded-bl-none  md:rounded-r-3xl object-fill"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      {/*/////////////////////////////////////////////////////// */}
      {/*/////////////////////////////////////////////////////// */}
    </div>
  );
};

export default About;

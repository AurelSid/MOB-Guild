import React from "react";

import "../App.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import quest from "../assets/images/quest.png";
import reward from "../assets/images/reward.png";
import leaderboard from "../assets/images/leaderboard.png";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="background h-full w-full justify-center items-center">
      <div className="m-auto md:p-5 md:pt-20 ">
        <div className="w-full h-full justify-center items-center pb-10  pt-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            <h1 className="md:text-7xl text-4xl bg-gradient-to-r from-emerald-300 to-lime-300 text-transparent bg-clip-text font-bold  md:p-0 cursor-default">
              COMPLETE QUESTS , RANK UP , AND TRUMPH
            </h1>
          </motion.div>
        </div>
        <div>
          <div className="flex">
            <div className="md:flex items-center justify-center w-full md:h-full ">
              <motion.div
                className="m-2   h-40 md:h-1/2 md:w-80"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 30, opacity: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
              >
                <div className=" m-auto md:m-2 card shadow-black shadow-2xl h-full   rounded-3xl   border-green-200 border-4 ">
                  <div className="h-full w-full ">
                    <h1 className=" text-2xl font-semibold md:text-left m-3 text-green-200">
                      Quests
                    </h1>
                    <div className="md:m-auto  w-full h-full flex md:block    ">
                      <motion.img
                        whileHover={{ y: -20 }}
                        src={quest}
                        alt=""
                        className="md:m-auto md:w-40 h-20 w-20 md:mt-20 mx-3 md:h-40"
                      />
                      <p className=" text-center md:text-xl text-sm font-semibold mx-3   md:my-5 md:mx-3 text-green-200">
                        Complete daily and weekly quests to show your skills and
                        climb up the leaderboard
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="m-2   h-40 md:h-1/2 md:w-80"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 30, opacity: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
              >
                <div className=" m-auto md:m-2 card shadow-black shadow-2xl h-full   rounded-3xl   border-green-200 border-4 ">
                  <div className="h-full w-full ">
                    <h1 className=" text-2xl font-semibold md:text-left m-3 text-green-200">
                      Quests
                    </h1>
                    <div className="md:m-auto  w-full h-full flex md:block    ">
                      <motion.img
                        whileHover={{ y: -20 }}
                        src={quest}
                        alt=""
                        className="md:m-auto md:w-40 h-20 w-20 md:mt-20 mx-3 md:h-40"
                      />
                      <p className=" text-center md:text-xl text-sm font-semibold mx-3   md:my-5 md:mx-3 text-green-200">
                        Complete daily and weekly quests to show your skills and
                        climb up the leaderboard
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="m-2   h-40 md:h-1/2 md:w-80"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 30, opacity: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
              >
                <div className=" m-auto md:m-2 card shadow-black shadow-2xl h-full   rounded-3xl   border-green-200 border-4 ">
                  <div className="h-full w-full ">
                    <h1 className=" text-2xl font-semibold md:text-left m-3 text-green-200">
                      Quests
                    </h1>
                    <div className="md:m-auto  w-full h-full flex md:block    ">
                      <motion.img
                        whileHover={{ y: -20 }}
                        src={quest}
                        alt=""
                        className="md:m-auto md:w-40 h-20 w-20 md:mt-20 mx-3 md:h-40"
                      />
                      <p className=" text-center md:text-xl text-sm font-semibold mx-3   md:my-5 md:mx-3 text-green-200">
                        Complete daily and weekly quests to show your skills and
                        climb up the leaderboard
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="py-20
            md:flex items-center justify-cener h-full w-full"
          >
            <motion.div
              className="m-auto lg:flex h-full w-full justify-center items-center p-5 md:p-0  "
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
            >
              <div className="">
                <img
                  src="https://nyanheroes.com/images/community.png"
                  a
                  className="m-auto"
                />
              </div>
              <div className=" text-left bg-white bg-opacity-5 rounded-lg shadow-2xl shadow-neutral-900 p-10 lg:w-5/12 lg:m-10 md:p-5  ">
                <h1 className=" md:text-4xl text-2xl font-bold bg-gradient-to-r from-emerald-300 to-lime-300 text-transparent bg-clip-text  w-full  py-2 ">
                  A strong team || A strong community
                </h1>
                <h1 className=" md:text-xl  text-sm  font-semibold bg-gradient-to-r from-emerald-300 to-lime-300 text-transparent bg-clip-text    py-5 ">
                  At MOB project, we have assembled a team of experienced
                  individuals who are committed to the success of our project.
                  We are dedicated to creating an innovative and exciting gaming
                  experience that utilizes the power of cryptocurrency and
                  blockchain technology. With our team's combined experience and
                  knowledge, we are confident in the success of our project and
                  look forward to bringing it to the crypto gaming community.
                </h1>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

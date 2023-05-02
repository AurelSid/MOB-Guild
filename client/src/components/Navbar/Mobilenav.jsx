import React, { useState } from "react";
import { GrContact } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import { AiFillWallet } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import Image from "../../assets/images/logo.png";

import { BsStack } from "react-icons/Bs";
import { GiGamepad } from "react-icons/Gi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";

import { useNavigate } from "react-router-dom";
const Mobilenav = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const [Switch, setSwitch] = useState(false);
  const handleSwitch = () => {
    setSwitch(!Switch);
  };

  return (
    <div
      className={
        open
          ? "fixed h-full w-full   mobile-menu z-50 "
          : " fixed  w-full z-50    "
      }
    >
      <motion.div className="fixed -top-7   justify-center  items-center h-20 bg-black w-screen ">
        <img
          src={Image}
          className=" fixed h-20 w-20 m-5 right-0 pb-3    "
          onClick={() => {
            if (Switch) {
              handleClick();
              handleSwitch();
              navigate("Home");
            } else {
              navigate("Home");
            }
          }}
        />
        <FiMenu
          className={Switch ? " hidden" : "w-8 m-10 h-8 invert -left-5 fixed"}
          onClick={() => {
            handleClick();
            handleSwitch();
          }}
        />
        <AiOutlineClose
          className={Switch ? "w-8 m-10 h-8 invert -left-5 fixed" : "hidden"}
          onClick={() => {
            handleClick();
            handleSwitch();
          }}
        />
      </motion.div>

      <div
        className={
          open
            ? "justify-center items-center pb-40 flex  w-full h-full  "
            : "hidden "
        }
      >
        <div className=" grid-cols-3 grid p-4">
          {/*///////////////////////////////// */}

          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center w-20 h-20 m-0.5   bg-slate-400  p-1 hover:bg-green-400 "
            onClick={() => (navigate("/Games"), handleClick(), handleSwitch())}
          >
            <motion.div layout="position">
              <GiGamepad className=" w-12 h-12  " />
            </motion.div>
          </motion.div>

          {/*///////////////////////////////// */}

          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center w-20 h-20 m-0.5   bg-slate-400  p-1 hover:bg-green-400
             "
            onClick={() => (navigate("/Home"), handleClick(), handleSwitch())}
          >
            <motion.div layout="position">
              <AiOutlineHome className=" w-12 h-12  " />
            </motion.div>
          </motion.div>
          {/*///////////////////////////////// */}

          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center w-20 h-20 m-0.5   bg-slate-400  p-1 hover:bg-green-400 "
            onClick={() => (navigate("/Login"), handleClick(), handleSwitch())}
          >
            <motion.div className="flex"></motion.div>
          </motion.div>
          {/*///////////////////////////////// */}

          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center w-20 h-20 m-0.5   bg-slate-400  p-1 hover:bg-green-400 "
            onClick={() => (
              (window.location.href = "mailto:aurelsid021@gmail.com"),
              handleClick(),
              handleSwitch()
            )}
          >
            <motion.div layout="position">
              <GrContact className=" w-12 h-12  " />
            </motion.div>
          </motion.div>
          {/*///////////////////////////////// */}
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center w-20 h-20 m-0.5   bg-slate-400  p-1 hover:bg-green-400 "
            onClick={() => (
              navigate("/Stacking"), handleClick(), handleSwitch()
            )}
          >
            <motion.div layout="position">
              <BsStack className=" w-12 h-12  " />
            </motion.div>
          </motion.div>
          {/*///////////////////////////////// */}
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center w-20 h-20 m-0.5   bg-slate-400  p-1 hover:bg-green-400 "
            onClick={() => (navigate("/About"), handleClick(), handleSwitch())}
          >
            <motion.div>
              <AiOutlineQuestionCircle className=" w-12 h-12 m-auto " />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Mobilenav;

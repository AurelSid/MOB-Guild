import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navdesktop from "./Navdesktop";
import Mobilenav from "./Mobilenav";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="hidden lg:block Z-20 ">
        <Navdesktop />
      </div>
      <div className="lg:hidden">
        <Mobilenav />
      </div>
    </div>
  );
};

export default Navbar;

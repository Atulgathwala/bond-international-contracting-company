import React from "react";
import LOGOIMG from "../../assets/logo/logo.png";

const Logo = () => {
  return (
    <a href="#" className="flex items-center">
      <img src={LOGOIMG} className="h-[55px]" alt="BIC Logo" />
    </a>
  );
};

export default Logo;
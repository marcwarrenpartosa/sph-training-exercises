import React from "react";
import Logo from "../assets/images/logo.png";
const Navbar = () => {
  return (
    <div className="flex">
      <img src={Logo} alt="Logo" className="w-15" />
      <div>Books</div>
      <div>Members</div>
    </div>
  );
};

export default Navbar;

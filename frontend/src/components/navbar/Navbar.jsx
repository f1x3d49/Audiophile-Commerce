import React, { useState } from "react";

// asset imports
import logo from "../../assets/shared/desktop/logo.svg";
import { ReactComponent as Hamburger } from "../../assets/shared/tablet/icon-hamburger.svg";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="h-[4rem] w-full  flex shrink-0 justify-between items-center border-b-2 border-border tb:px-8">
      {/* Logo */}
      <img src={logo} alt="Company Logo" />
      <div></div>
    </nav>
  );
};

export default Navbar;

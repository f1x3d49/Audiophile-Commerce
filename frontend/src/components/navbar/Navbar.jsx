import React, { useEffect, useState } from "react";

// asset imports
import logo from "../../assets/shared/desktop/logo.svg";
import { ReactComponent as Hamburger } from "../../assets/shared/tablet/icon-hamburger.svg";
import { ReactComponent as CheckoutCart } from "../../assets/shared/desktop/icon-cart.svg";
import Slider from "./Slider";

const Navbar = ({ background }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(open);
  });

  return (
    <nav
      className={`h-[5rem] td:h-[6rem] w-full flex shrink-0 justify-between items-center  bg-${background} `}
    >
      {/* Navbar Container */}
      <div className="w-full h-full border-b-2 flex justify-between items-center border-border px-5 tb:mx-10 dt:mx-20">
        {/* Container for the logo and hamburger button */}
        <div className="hidden tb:flex items-center justify-between w-1/3 tb:w-auto gap-8">
          {/* Hamburger Button */}
          <button className="dt:hidden" onClick={() => setOpen(true)}>
            <Hamburger />
          </button>
          <img src={logo} alt="Company Logo" />
        </div>

        {/* New Hamburger and logo for mobile version */}
        <button className="tb:hidden" onClick={() => setOpen(true)}>
          <Hamburger />
        </button>

        <img src={logo} alt="Company Logo" className="tb:hidden" />

        {/* Here the two elements end */}

        {/* Desktop Navigation Buttons */}
        <ul className="hidden dt:flex justify-between items-center gap-8 text-color6">
          <li>
            <button className="sub-title hover:text-color1">Home</button>
          </li>
          <li>
            <button className="sub-title hover:text-color1">Headphones</button>
          </li>
          <li>
            <button className="sub-title hover:text-color1">Speakers</button>
          </li>
          <li>
            <button className="sub-title hover:text-color1">Earphones</button>
          </li>
        </ul>
        {/* Checkout Button */}
        <button>
          <CheckoutCart />
        </button>
        <Slider open={open} setOpen={setOpen} />
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { ReactComponent as IconArrow } from "../../assets/shared/desktop/icon-arrow-right.svg";

const Button3 = () => {
  return (
    <button className="w-[160px] h-[48px] flex items-center justify-center gap-3 flex-shrink-0 bg-color6 ">
      <p className="sub-title text-color7 opacity-50 hover:text-color1 hover:opacity-100">
        Shop
      </p>
      <IconArrow />
    </button>
  );
};

export default Button3;

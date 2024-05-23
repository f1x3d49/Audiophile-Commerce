import React from "react";

// Arrow for Button
import { ReactComponent as ArrowR } from "../../assets/shared/desktop/icon-arrow-right.svg";

// Thumbnail Images
import headphonesthumbnail from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import earphonethumbnail from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import speakerthumbnail from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";

const ThreeButtonComponent = () => {
  return (
    <div className="flex flex-col tb:flex-row justify-center items-center tb:gap-8  h-full w-full">
      {/* First Button Container */}
      <div className="relative w-full h-[217px]  flex items-end justify-center">
        <button className="h-3/5 w-full bg-color3 flex flex-col items-center justify-end pb-4 gap-1 rounded-lg group">
          <h1 className="font-[700] text-[15px] tracking-[1.07px] text-color7 uppercase">
            Headphones
          </h1>
          <div className="flex items-center justify-center gap-2">
            <p className="sub-title text-color7 opacity-50 group-hover:text-color1 group-hover:opacity-100">
              Shop
            </p>
            <ArrowR />
          </div>
        </button>
        <img
          src={headphonesthumbnail}
          alt="headphones"
          className="h-auto w-3/6 z-10 absolute bottom-10"
        />
      </div>
      {/* Second Button Container */}
      <div className="relative w-full h-[217px] flex items-end justify-center">
        <button className="h-3/5 w-full bg-color3 flex flex-col items-center justify-end pb-4 gap-1 rounded-lg group">
          <h1 className="font-[700] text-[15px] tracking-[1.07px] text-color7 uppercase">
            Speakers
          </h1>
          <div className="flex items-center justify-center gap-2">
            <p className="sub-title text-color7 opacity-50 group-hover:text-color1 group-hover:opacity-100">
              Shop
            </p>
            <ArrowR />
          </div>
        </button>
        <img
          src={speakerthumbnail}
          alt="headphones"
          className="h-auto w-3/6 z-10 absolute bottom-10"
        />
      </div>
      {/* Third Button Container */}
      <div className="relative w-full h-[217px] flex items-end justify-center">
        <button className="h-3/5 w-full bg-color3 flex flex-col items-center justify-end pb-4 gap-1 rounded-lg group">
          <h1 className="font-[700] text-[15px] tracking-[1.07px] text-color7 uppercase">
            Earphones
          </h1>
          <div className="flex items-center justify-center gap-2">
            <p className="sub-title text-color7 opacity-50 group-hover:text-color1 group-hover:opacity-100">
              Shop
            </p>
            <ArrowR />
          </div>
        </button>
        <img
          src={earphonethumbnail}
          alt="headphones"
          className="h-auto w-3/6 z-10 absolute bottom-10"
        />
      </div>
    </div>
  );
};

export default ThreeButtonComponent;

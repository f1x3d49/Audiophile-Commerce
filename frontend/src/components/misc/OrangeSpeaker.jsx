import React from "react";

// Button Import
import Button4 from "../buttons/Button4";

// Image Imports
import mobilespeakers from "../../assets/home/mobile/image-speaker-zx9.png";
import tabletspeakers from "../../assets/home/tablet/image-speaker-zx9.png";
import desktopspeakers from "../../assets/home/desktop/image-speaker-zx9.png";

const OrangeSpeaker = () => {
  return (
    <div className="w-full h-full flex flex-col dt:flex-row items-center justify-center gap-6 tb:gap-10 rounded-lg bg-color1 px-8 py-8">
      <div className="flex items-center justify-center w-full h-full">
        <img
          src={mobilespeakers}
          alt="speakers"
          className="h-3/4 w-3/4 tb:hidden object-center"
        />
        <img
          src={tabletspeakers}
          alt="speakers"
          className="h-2/4 w-2/4 mb:hidden tb:block dt:hidden"
        />
        <img
          src={desktopspeakers}
          alt="speakers"
          className="h-auto w-auto mb:hidden dt:block"
        />
      </div>
      {/* Text and Button */}
      <div className="w-full h-full max-w-1/4 flex flex-col items-center justify-center gap-6 mb:px-2 tb:px-36 dt:items-start dt:px-[20rem]">
        <h1 className="h1 text-color6 text-center mb:text-[36px] tb:text-[56px] mb:leading-[45px] tb:leading-[65px] dt:text-left">
          zx9 speaker
        </h1>
        <p className="body text-color3 text-center dt:text-left dt:leading-[25px]">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button4 />
      </div>
    </div>
  );
};

export default OrangeSpeaker;

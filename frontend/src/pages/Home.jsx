import React from "react";

// Components
import Navbar from "../components/navbar/Navbar";
import Button1 from "../components/buttons/Button1";
import ThreeButtonComponent from "../components/buttons/ThreeButtonComponent";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col items-start justify-center">
      <Navbar background={"color2"} />
      {/* Hero section */}
      <section className=" w-full h-screen flex items-center justify-center dt:justify-start bg-mobileHero tb:bg-tabletHero dt:bg-desktopHero  bg-no-repeat bg-cover bg-top">
        <div className="flex items-center dt:w-[35%] dt:ml-32 justify-center dt:items-start flex-col text-center dt:text-left gap-4 tb:gap-8">
          <h2 className="toverline text-color6 opacity-50">New Product</h2>
          <h1 className="h3 text-color6 ">XX99 Mark II Headphones</h1>

          <p className="body text-color6 opacity-75 tb:w-[60%]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button1 />
        </div>
      </section>
      {/* Second section */}
      <section className="w-full h-full px-6 py-12 flex items-center justify-center bg-color6">
        <ThreeButtonComponent />
      </section>
    </div>
  );
};

export default Home;

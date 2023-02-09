import React from "react";
import banner from "../../../Assets/banner.jpg";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <div className="banner -mb-6">
      <img src={banner} alt="" />
      <div className="banner-text lg:pt-11 pt-24 ">
        <h1 className="lg:text-7xl text-3xl text-black font-semibold font-serif mb-7">
          We provide the best
        </h1>
        <h1 className="lg:text-7xl text-3xl text-black font-semibold font-serif mb-10">
          Tutors in Town
        </h1>
        <p className="text-gray-600 text-xl font-serif mb-12">
          We design and build beautiful websites, apps and branding
        </p>
        <button className="bg-green-500 text-white hover:bg-green-200 hover:text-gray-800 font-bold px-8 py-4 rounded-xl">
          Job Board
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;

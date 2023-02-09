import React from "react";
import aboutUs from "../../../Assets/about.gif";
import underlIne from "../../../Assets/rsz_images.jpg";

const AboutUs = () => {
  return (
    <div className="w-full bg-lime-50 lg:-mt-8 lg:pt-12 -mt-16">
      <div className="grid lg:grid-cols-2 grid-cols-1 mx-auto text-center w-4/5 pt-10">
        <div>
          <img src={aboutUs} alt="" className="w-full mr-20" />
        </div>
        <div className="lg:text-start text-center lg:ml-20 mx-8 mt-8">
          <h3 className="font-semibold text-xl uppercase inline-block">
            About Us
          </h3>
          <img
            src={underlIne}
            alt=""
            className="w-28 -mt-1 h-2 lg:ml-0 ml-16"
          />
          <h1 className=" lg:text-5xl text-3xl font-bold my-3">
            Best Institution For
          </h1>
          <h1 className=" lg:text-5xl text-3xl font-bold mb-3">
            Finding Tutors
          </h1>
          <p>
            Your work is going to fill a large part of your life, and the only
            way to be truly satisfied is to do what you believe is great work.
            And the only way to do great work
          </p>
          <button className="bg-green-500 text-white hover:bg-green-200 hover:text-gray-800 font-bold px-12 py-4 rounded-xl my-8">
            Find Tutors
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

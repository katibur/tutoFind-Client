import React from "react";
import googlePlayStore from "../../../Assets/googlePlayStore.png";
import appleStore from "../../../Assets/appleStore.png";

const Connection = () => {
  return (
    <div className="w-full bg-lime-50 lg:-mt-10 pt-20 pb-6 -mt-16">
      <div className="text-center mx-auto lg:w-1/2 w-2/3 mb-5 mt-8 bg-lime-50">
        <h1 className=" lg:text-5xl text-3xl font-semibold">
          Connected care for Students
        </h1>
        <p className="text-xl my-5 text-gray-500 mb-12">
          TutoFind is a connected care platform designed to deliver continuity
          of health monitoring, education, and support for children and
          families. Our focus is primarily on families and children who need a
          support system for proactive health monitoring and well-being
          management.
        </p>
        <div className="flex justify-around flex-wrap">
          <button className="text-start bg-black text-white px-4 py-2 rounded-md mb-5">
            <img className="h-16 w-48" src={googlePlayStore} alt="" />
          </button>
          <button className="text-start bg-black text-white px-4 py-2 rounded-md mb-5">
            <img className="h-16 w-48" src={appleStore} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Connection;

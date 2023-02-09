import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full bg-lime-50 -mt-10 lg:pt-40 pt-8 lg:-mb-4 pb-5">
      <div className="text-center mx-auto lg:w-1/2 w-2/3 mb-5">
        <h1 className=" lg:text-7xl text-3xl font-bold my-3">
          Find Your Tutors
        </h1>
        <h1 className=" lg:text-7xl text-3xl font-bold mb-3">With TutoFind</h1>
        <p className="text-xl my-5 text-gray-500 mb-12">
          We find and provide best teachers in your area.
        </p>
        <div className="inline-block">
          <button className="bg-green-500 text-white hover:bg-green-200 hover:text-gray-800 font-bold px-12 py-4 rounded-xl">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

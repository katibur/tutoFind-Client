import React from "react";
import appliedStudents from "../../../Assets/appliedstudents.jpg";
import { ImBriefcase } from "react-icons/im";
import { FcReading } from "react-icons/fc";
import { FcRating } from "react-icons/fc";
import { GiTeacher } from "react-icons/gi";

const Statistics = () => {
  return (
    <div className="w-full bg-lime-50 lg:-mt-10 pt-20 pb-6 -mt-28">
      <div className=" text-white text-start lg:py-16 lg:px-8 py-10 px-4 grid lg:grid-cols-5 grid-cols-1 bg-green-400 lg:mx-56 mx-4 mb-5 rounded-2xl">
        <div className="mb-6 grid grid-cols-2 p-3 ">
          <div>
            <img className="h-16 w-16" src={appliedStudents} alt="" />
          </div>
          <div className="lg:-ml-8 -ml-16 -mt-2">
            <p className="font-bold text-5xl">275</p>
            <p>Total Applied</p>
          </div>
        </div>
        <div className="mb-6 grid grid-cols-2 p-3">
          <div>
            <ImBriefcase className="h-16 w-16"></ImBriefcase>
          </div>
          <div className="lg:-ml-8 -ml-16 -mt-2">
            <p className="font-bold text-5xl">345</p>
            <p>Live Tuition Jobs</p>
          </div>
        </div>
        <div className="mb-6 grid grid-cols-2 p-3">
          <div>
            <FcReading className="h-16 w-16"></FcReading>
          </div>
          <div className="lg:-ml-8 -ml-16 -mt-2">
            <p className="font-bold text-5xl">142</p>
            <p>Total Students</p>
          </div>
        </div>
        <div className="mb-6 grid grid-cols-2 p-3">
          <div>
            <GiTeacher className="h-16 w-16"></GiTeacher>
          </div>
          <div className="lg:-ml-8 -ml-16 -mt-2">
            <p className="font-bold text-5xl">877</p>
            <p>Total Tutors</p>
          </div>
        </div>
        <div className="mb-6 grid grid-cols-2 p-3">
          <div>
            <FcRating className="h-16 w-16"></FcRating>
          </div>
          <div className="lg:-ml-8 -ml-16 -mt-2">
            <p className="font-bold text-5xl">4.8/5</p>
            <p>Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

import React from "react";
import { Link, useRouteError } from "react-router-dom";

const DisplayError = () => {
  const error = useRouteError();

  return (
    <div className="mx-auto text-center">
      <p className="text-red-500">Something Went Wrong</p>
      <p className="text-red-500">{error.statusText || error.message}</p>
      <Link to="/">
        <button className="bg-red-600 rounded-md text-white px-4 py-2 m-5">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default DisplayError;

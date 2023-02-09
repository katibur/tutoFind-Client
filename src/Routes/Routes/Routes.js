import { createBrowserRouter, Link } from "react-router-dom";
import DisplayError from "../../Components/Shared/DisplayError/DisplayError";
import Main from "../../Layouts/Main/Main";
import Home from "../../Pages/Home/Home";
import errorPhoto from "../../Assets/Error.gif";
import About from "../../Pages/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/aboutUs",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <div className="max-w-screen-2xl mx-auto my-10">
        <Link to="/">
          <button className="bg-red-600 rounded-md text-white px-4 py-2 m-5">
            Go Home
          </button>
        </Link>
        <img className="mx-auto w-full" src={errorPhoto} alt="" />
      </div>
    ),
  },
]);

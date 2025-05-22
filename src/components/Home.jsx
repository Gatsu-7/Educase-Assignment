import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 px-4">
      <div className="w-full h-[812px] max-w-sm bg-gray-100 p-6 rounded-md shadow-md flex flex-col justify-end">
        <h1 className="text-[28px] font-medium text-[#1D2226] mb-3">
          Welcome to PopX
        </h1>
        <p className="text-[18px] text-[#1D2226] opacity-60 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <Link to="/signup">
          <button className="w-full h-12 bg-[#6C25FF] text-white font-medium rounded-md mb-3">
            Create Account
          </button>
        </Link>
        <button className="w-full h-12 bg-[#6C25FF4B] font-medium rounded-md">
          <Link to="/signin">Already Registered? Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;

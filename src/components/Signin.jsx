import React from "react";

const Signin = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 px-4">
      <div className="w-full h-[812px] max-w-sm bg-gray-100 rounded-md p-6 shadow-md flex flex-col">
        <h1 className="text-2xl font-medium text-[#1D2226] w-[188px] mb-2 font-[Rubik]">
          Signin to your PopX account
        </h1>
        <p className="text-[18px] text-[#1D2226] opacity-60 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <form className="flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="emailaddress"
                className="text-sm text-[#6C25FF] flex items-center"
              >
                Email Address
              </label>
              <input
                type="email"
                id="emailaddress"
                placeholder="Enter Your Email Address"
                className="w-full h-10 border border-[#CBCBCB] rounded-md px-3 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-sm text-[#6C25FF] flex items-center"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter Your Password"
                className="w-full h-10 border border-[#CBCBCB] rounded-md px-3 outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-[46px] bg-gray-300 text-white rounded-md font-medium mt-6 hover:bg-[#5a1ee4]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;

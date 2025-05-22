import React from "react";
import photo from "../assets/a.png";
import photod from "../assets/a1.png";
const Account = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 px-4">
      <div className=" relative w-full h-[812px] max-w-sm bg-gray-100 rounded-md  shadow-md flex flex-col">
        <h1 className="h-[68px] p-6 text-[18px]">Account Settings</h1>
        <div className="bg-gray-200 flex space-x-5 p-6">
          <img src={photo} alt="" />
          <img
            src={photod}
            alt=""
            className="w-[21px] h-[23px] absolute top-[147px] left-[79px]"
          />
          <div>
            <h1 className="text-[14px]">Marry Doe</h1>
            <p className="text-[15px]">Marry@Gmail.Com</p>
          </div>
        </div>
        <div className="bg-gray-200 p-6 flex flex-grow flex-col">
          <p className="w-[337px]  ">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
          <hr className="border-t border-dotted border-gray-300 opacity-60 my-4" />
        </div>
      </div>
    </div>
  );
};

export default Account;

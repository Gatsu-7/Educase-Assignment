import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    phonenumber: "",
    emailaddress: "",
    password: "",
    companyname: "",
    isAgency: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredValues = {
      fullname: "Marry Doe",
      phonenumber: "Marry Doe",
      emailaddress: "Marry Doe",
      password: "Marry Doe",
      companyname: "Marry Doe",
      isAgency: "yes",
    };

    const isValid = Object.entries(requiredValues).every(
      ([key, value]) => formData[key] === value
    );

    if (isValid) {
      navigate("/account");
    } else {
      alert("Please ensure all fields are correctly filled.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 px-4">
      <div className="w-full h-[812px] max-w-sm bg-gray-100 rounded-md p-6 shadow-md flex flex-col">
        <h1 className="text-2xl font-medium text-[#1D2226] mb-6 font-[Rubik]">
          Create your PopX account
        </h1>

        <form
          className="flex flex-col space-y-4 flex-grow justify-between"
          onSubmit={handleSubmit}
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="fullname"
                className="text-sm text-[#6C25FF] flex items-center"
              >
                Full Name <span className="text-red-400 ml-1">*</span>
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Enter Full name"
                value={formData.fullname}
                onChange={handleChange}
                className="w-full h-10 border border-[#CBCBCB] rounded-md px-3 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="phonenumber"
                className="text-sm text-[#6C25FF] flex items-center"
              >
                Phone Number <span className="text-red-400 ml-1">*</span>
              </label>
              <input
                type="text"
                id="phonenumber"
                name="phonenumber"
                placeholder="Enter Phone Number"
                value={formData.phonenumber}
                onChange={handleChange}
                className="w-full h-10 border border-[#CBCBCB] rounded-md px-3 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="emailaddress"
                className="text-sm text-[#6C25FF] flex items-center"
              >
                Email Address <span className="text-red-400 ml-1">*</span>
              </label>
              <input
                type="text"
                id="emailaddress"
                name="emailaddress"
                placeholder="Enter Your Email Address"
                value={formData.emailaddress}
                onChange={handleChange}
                className="w-full h-10 border border-[#CBCBCB] rounded-md px-3 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-sm text-[#6C25FF] flex items-center"
              >
                Password <span className="text-red-400 ml-1">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Your Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full h-10 border border-[#CBCBCB] rounded-md px-3 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="companyname"
                className="text-sm text-[#6C25FF] flex items-center"
              >
                Company Name <span className="text-red-400 ml-1">*</span>
              </label>
              <input
                type="text"
                id="companyname"
                name="companyname"
                placeholder="Enter Your Company Name"
                value={formData.companyname}
                onChange={handleChange}
                className="w-full h-10 border border-[#CBCBCB] rounded-md px-3 outline-none"
              />
            </div>

            <fieldset className="mb-2">
              <legend className="text-sm font-medium mb-2 flex items-center">
                Are you an agency? <span className="text-red-400 ml-1">*</span>
              </legend>

              <div className="flex items-center space-x-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="isAgency"
                    value="yes"
                    checked={formData.isAgency === "yes"}
                    onChange={handleChange}
                  />
                  <span>Yes</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="isAgency"
                    value="no"
                    checked={formData.isAgency === "no"}
                    onChange={handleChange}
                  />
                  <span>No</span>
                </label>
              </div>
            </fieldset>
          </div>

          <button
            type="submit"
            className="w-full h-[46px] bg-[#6C25FF] text-white rounded-md font-medium mt-6 hover:bg-[#5a1ee4]"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

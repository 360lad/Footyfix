// import React,{useState} from "react"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const navigate = useNavigate();
  const [FormData, setFormData] = useState({
    emailAddress: "",
    password: "",
    phoneNumber: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
      setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if(FormData.emailAddress=== "") {
      setErrorMessage("Please fill in your email address");
      return;
    } else if (FormData.password=== "") {
      setErrorMessage("Please fill in your password");
      return;
    } else if (FormData.password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long");
      return;
    } else if (FormData.phoneNumber=== "") {
      setErrorMessage("Please fill in your phone number");
      return;
    } else if (FormData.phoneNumber.length < 10) {
      setErrorMessage("Phone number must be at least 10 characters long");
      return;
    } else {
      setErrorMessage("");
      try {
        const userCredential = await  createUserWithEmailAndPassword(
          auth,
          FormData.emailAddress,
          FormData.password
        );
        const user = userCredential.user;
        console.log(userCredential  );
        if (user) {
          const details = await addDoc(collection(db, " "), FormData);
          navigate("/login");

          console.log(details);
        }

        // alert("Successfully Registered");
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(error.code, error.message);
      }
    }
  };

  return (
    <div>
      <div className="container mx-auto  flex  gap-20">
        <div>
          <div className="flex gap-100  ">
            <div className="text-white w-[400px] font-sans font-small text-6xl ">
              <h1>Sports Tournament 2024</h1>
            </div>
            <div className="w-[300px]  border-none">
              <img src="src/assets/footy-images/FreeVector-Football.jpg" />
            </div>
          </div>
          <div className="flex gap-10 mt-20 ">
            <div className="w-[200px]">
              <img src="src/assets/footy-images/cup-gold.jpeg" />
            </div>
            <div className="w-[200px] ">
              <img src="src/assets/footy-images/silver.jpeg" />
            </div>
            <div className="w-[200px]">
              <img src="src/assets/footy-images/silverplastic.jpeg" />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="shadow-lg border border-white-100">
              <h2 className="text-center font-bold font-sans text-2xl text-white">
                Create an Account
              </h2>
              <div className="flex justify-center mt-4">
                <button
                  className="border border-white-500 py-2 px-4 rounded-full text-white bg-transparent"
                  onClick={() => console.log("Sign Up with Google")}
                >
                  <FcGoogle size={24} />
                  <span>Sign Up With Google</span>
                </button>
                <button
                  className="border border-gray-500 py-2 px-4 rounded-full text-white bg-transparent ml-4"
                  onClick={() => console.log("Sign Up with Facebook")}
                >
                  <IoLogoFacebook size={24} />
                  <span>Sign Up With Facebook</span>
                </button>
              </div>
              <div className="flex justify-center items-center mt-4">
                <div className="border-b-2 border-gray-700 w-1/4"></div>
                <div className="text-white mx-4">or</div>
                <div className="border-b-2 border-gray-700 w-1/4"></div>
              </div>
              <div className="flex flex-col items-center mt-4">
                <input
                  className="mt-4 py-6 px-8 border border-gray-400  w-[600px] flex justify-between items-center rounded-2xl"
                  type="text"
                  placeholder="Email Address"
                  name="emailAddress"
                  // value={FormData.emailAddress}
                  onChange={handleChange}
                />
                <div className="">
                  <input
                    className="mt-6 py-6 px-8 border border-gray-400  w-[600px] flex justify-between items-center rounded-2xl"
                    type="text"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    // value={FormData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className=" mt-6 border   border-gray-400 w-[600px] flex justify-between items-center rounded-2xl">
                  <input
                    className="text-1xl py-5 px-5 flex-1 "
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    // value={FormDatea.password}
                    onChange={handleChange}
                  />
                </div>
                <div
                  className="pr-3 cursor-pointer text-white mb-4"
                  onClick={handleShowPassword}
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </div>
                
                <button
                  className=" mt-6 border border-white-500 py-2 px-4 rounded-full text-white bg-transparent"
                  onClick={handleSignUp}
                >
                  Create Account
                </button>
                {errorMessage && (
                  <p className="text-red-500 mt-2">{errorMessage}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

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
      <div className="container mx-auto  flex flex-wrap m-[2em]">
        <div className="m-[2em]">
          <div className="flex items-center">
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
        <div className="m-[2em]">
          <div>
            <div className="shadow-lg border rounded p-[2em]">
              <h2 className="text-center font-bold font-sans text-2xl text-white">
                Create an Account
              </h2>
             
              <div className="flex flex-col items-center mt-4">
                <input
                  className="mt-4 p-[1em] border border-gray-400  flex justify-between items-center rounded outline-none"
                  type="text"
                  placeholder="Email Address"
                  name="emailAddress"
                  // value={FormData.emailAddress}
                  onChange={handleChange}
                />
                <div className="">
                  <input
                    className="mt-6 p-[1em] border border-gray-400   flex justify-between items-center rounded outline-none"
                    type="text"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    // value={FormData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex items-center justify-center">
                <div className=" mt-6 border  rounded outline-none    flex  items-center justify-center ">
                  <input
                    className="text-1xl p-[1em] flex-1 "
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    // value={FormDatea.password}
                    onChange={handleChange}
                  />
                </div>
                <div
                  className="pr-3 cursor-pointer text-white m-[.5em]"
                  onClick={handleShowPassword}
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </div>
                </div>
                {errorMessage && (
                  <p className="text-red-500 mt-2">{errorMessage}</p>
                )}
                
                <button
                  className=" mt-6 border border-white-500 py-2 px-4 rounded-full text-white bg-transparent"
                  onClick={handleSignUp}
                >
                  Create Account
                </button>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

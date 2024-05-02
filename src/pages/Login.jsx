import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const validateEmail = (email) => {
  
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!email.trim()) {
      errors.email = "Please fill in your email";
    } else if (!validateEmail(email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
    setErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      console.log("Login successful!");
    
    }
 
    signInWithEmailAndPassword(
      auth,
     showPassword.emailAddress,
      showPassword.password
    )
      .then(async (userData) => {
        const user = userData.user;
        console.log(user);
        Navigate("/home")
        if (user) {
          const newUser = await addDoc(collection(db, "users") ,showPassword);
          console.log(newUser);
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="container mx-auto  flex m-[3em] gap-[2em] flex-wrap">
        <div className="flex flex-col mt-10">
          <div className="flex  gap-5 mt-8 ">
            <div className="bg-gray-200 w-[100px] h-[80px] justify-center flex flex-wrap items-center  text-5xl">
              F
            </div>

            <div className="bg-[#6645c9] w-[100px] h-[80px] justify-center flex flex-wrap items-center "></div>
            <div className=" bg-gray-200 w-[100px] h-[80px] justify-center flex flex-wrap items-center text-5xl ">I</div>
            <div className="bg-[#6645c9] w-[100px] h-[80px] justify-center flex flex-wrap items-center "></div>
            <div className="bg-gray-200 w-[100px] h-[80px] justify-center flex flex-wrap items-center  text-5xl">X</div>
            <div className="bg-[#6645c9] w-[100px] h-[80px] justify-center flex flex-wrap items-center "></div>
          </div>
          <div className="flex gap-5 mt-8">
            <div className="bg-[#6645c9] w-[100px] h-[80px] justify-center flex flex-wrap items-center  text-2xl"></div>

            <div className="bg-gray-200 w-[100px] h-[80px] justify-center flex flex-wrap items-center text-5xl ">
              O
            </div>
            <div className=" bg-[#6645c9] w-[100px] h-[80px] justify-center flex flex-wrap items-center "></div>
            <div className="bg-gray-200 w-[100px] h-[80px] justify-center flex flex-wrap items-center "></div>
            <div className="bg-[#6645c9] w-[100px] h-[80px] justify-center flex flex-wrap items-center "></div>
            <div className="bg-gray-200 w-[100px] h-[80px] justify-center flex flex-wrap items-center "></div>
          </div>
          <div className="flex gap-5 mt-8">
            <div className="bg-gray-200 w-[100px] h-[80px] justify-center flex flex-wrap items-center  text-2xl">
              
            </div>

            <div className="bg-[#6645c9] w-[100px] h-[80px] justify-center flex flex-wrap items-center "></div>
            <div className=" bg-gray-200 w-[100px] h-[80px] justify-center flex flex-wrap items-center  text-5xl">
              O
            </div>
            <div className="bg-[#6645c9] w-[100px] h-[80px] justify-center flex flex-wrap items-center "></div>
            <div className="bg-gray-200 w-[100px] h-[80px] justify-center flex flex-wrap items-center "></div>
            <div className="bg-[#6645c9] w-[100px] h-[80px] justify-center flex flex-wrap items-center "></div>
          </div>
          <div className="flex gap-5 mt-6">
            <div className="bg-[#6645c9] w-[100px] h-[80px] justify-center flex flex-wrap items-center  text-2xl"></div>

            <div className="bg-gray-200 w-[100px] h-[80px] justify-center flex flex-wrap items-center text-5xl "></div>
            <div className=" bg-[#6645c9] w-[100px] h-[80px] justify-center flex flex-wrap items-center "></div>
            <div className="bg-gray-200 w-[100px] h-[80px] justify-center flex flex-wrap items-center text-5xl">T</div>
            <div className="bg-[#6645c9] w-[100px] h-[80px] justify-center flex flex-wrap items-center  ">
              
            </div>
            <div className="bg-gray-200 w-[100px] h-[80px] justify-center flex flex-wrap items-center "></div>
          </div>
          <div className="flex gap-5 mt-6">
            <div className="bg-gray-200 w-[100px] h-[80px] justify-center flex flex-wrap items-center  text-2xl">
              
            </div>

            <div className="bg-[#6645c9] w-[100px] h-[80px] justify-center flex flex-wrap items-center "></div>
            <div className=" bg-gray-200 w-[100px] h-[80px] justify-center flex flex-wrap items-center "></div>
            <div className="bg-[#6645c9] w-[100px] h-[80px] justify-center flex flex-wrap items-center "></div>
            <div className="bg-gray-200 w-[100px] h-[80px] justify-center flex flex-wrap items-center text-5xl">
              Y
            </div>
            <div className="bg-[#6645c9] w-[100px] h-[80px] justify-center flex flex-wrap items-center "></div>
          </div>
        </div>
        <div>
        <div className="m-[1em]" >
      <h2 className="text-center font-bold font-sans text-2xl text-white">
        Login To Your Account
      </h2><div className="shadow-md border border-white-100 p-8 rounded-lg">

  <form onSubmit={handleSubmit} className="flex flex-col items-center">
    <input
      className="mt-4 border  p-[1em] mb-4 rounded outline-none"
      type="text"
      placeholder="Email Address"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    {errors.email && <p className="text-red-500">{errors.email}</p>}
    <div className=" flex items-center">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        className="mt-4 border outline-none rounded p-[1em]"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="  flex items-center  cursor-pointer text-white m-[.2em]" onClick={handleShowPassword}>
        {showPassword ? <FaRegEyeSlash   
      /> : <FaRegEye  className="text-white" />}
      </div>
    </div>
    {errors.password && <p className="text-red-500">{errors.password}</p>}
    <div className="flex justify-between items-center mt-4">
      <div className="flex items-center gap-2">
        <input type="checkbox" />
        <p>Remember Me</p>
      </div>
      <p className="text-[#6645c9]">Forgot Password?</p>
    </div>
    <div className="flex justify-center">
      <Link to="/">
      <button 
        type="submit"
        className="text-1xl border border-gray-400 py-[1em] px-[2em] m-[1em] rounded-full  text-[#6645c9] text-decoration-color-white flex items-center"
      >
        Sign In
      </button>
      </Link>
    </div>
  </form>

  <div className="flex gap-3 items-center justify-center mt-6">
    <div className="border-b-2 border-gray-700 w-1/3"></div>
    <div className="text-white">or</div>
    <div className="border-b-2 border-gray-700 w-1/3"></div>
  </div>

  <div className="mt-4 border  p-4 rounded flex items-center">
    <FcGoogle size={24} />
    <p className="ml-2">Sign In With Google</p>
  </div>

  <p className=" text- text-center mt-6">
    Don't Have An Account Yet? <span className="text-[#6645c9]">Sign Up Free</span>
  </p>
</div>
</div>
</div>
</div>
</div>
)}

export default Login;
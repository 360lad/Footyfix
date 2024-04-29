import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"; 
import { FaRegEyeSlash } from "react-icons/fa";
function Login() {
  const [showPassword ,setShowPassword]=useState(true)
  function handleShowPassword(){<div className="bg-gray-200 w-[100px] h-[80px] justify-center flex flex-wrap items-center "></div>
    setShowPassword(prev=>!prev)
  }
  return (
    <div>
      <div className="container mx-auto  flex  justify-between ">
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
          <div>
            <h2 className="text-center font-bold font-sans text-2xl text-white">
              Login To Your Account
            </h2>
          </div>
          <div>
            <input
              className=" mt-8 border border-white-500 py-8 px-[10em] rounded-full text-gray"
              type="text"
              placeholder="Email Address "
            ></input>
          </div>
          <div className="mt-8 border border-white-500  text-gray w-[500px] rounded-full flex items-center justify-between ">
            <input
              className=" text-1xl  py-5 px-5    text-white bg-transparent flex-1"
              type={showPassword?"password":"text"}
              placeholder="Password "
            />
            <div className="pr-3 cursor-pointer text-white " onClick={handleShowPassword}>{showPassword?<FaRegEyeSlash />:<FaRegEye />}
              
            </div>
          </div>
          <div className="flex  justify-between items-center ">
            <div className="flex items-center gap-10 mt-5 ">
              <input type="checkbox" />
              <p>Remember Me</p>
            </div>
            <div>
              <p className="mt-10 text-[#6645c9]  ">Forgot Password?</p>
            </div>
          </div>
          <div>
            <input
              className=" mt-10 border border-white-500 py-8 px-[10em]  rounded-full square  text-[#6645c9] text-decoration-color-white"
              type="text"
              placeholder="Sign In "
            ></input>
          </div>
          <div className="flex gap-3 items-center mt-10">
            <div className="border-b-2 border-gray-700 w-[300px]"></div>
            <div className="text-white">or</div>
            <div className="border-b-2 border-gray-700 w-[300px]"></div>
          </div>
          <div className="text-2xl mt-10 border border-gray-400 py-4 px-30  rounded-full flex items-center gap-6 text-blue-800 justify-center">
            <FcGoogle size={40}/>
            <p>Sign Up With Google</p>
          </div>
          <div>
            <p className="font-sans text-2xl text-center mt-10">
              Dont Have An Account Yet?
              <span className="text-[#6645c9] gap-3 ">Sign Up Free</span>{" "}
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default Login;

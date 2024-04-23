function Login(){
 return(
    <div>
   <div className="container mx-auto  flex  gap-5">
        
        <div>
            <div>
            <div className="bg-white-200 w-[100px] h-[200px] justify-center flex flex-wrap items-center ">F</div>
            <div className="bg-black-200 w-[100px] h-[200px] justify-center flex flex-wrap items-center "></div>
            <div className="bg-white-200 w-[100px] h-[200px] justify-center flex flex-wrap items-center "></div> 
            <div className="bg-black-200 w-[100px] h-[200px] justify-center flex flex-wrap items-center "></div>
            </div>
            <div>
            <div className="bg-white-200 w-[100px] h-[200px] justify-center flex flex-wrap items-center ">X</div>
            <div className="bg-black-200 w-[100px] h-[200px] justify-center flex flex-wrap items-center ">O</div>
            <div className="bg-white-200 w-[100px] h-[200px] justify-center flex flex-wrap items-center "></div>
            <div className="bg-black-200 w-[100px] h-[200px] justify-center flex flex-wrap items-center "></div>
            </div>
            <div>
            <div className="bg-white-200 w-[100px] h-[200px] justify-center flex flex-wrap items-center "></div>
            <div className="bg-black-200 w-[100px] h-[200px] justify-center flex flex-wrap items-center ">I</div>
            <div className="bg-white-200 w-[100px] h-[200px] justify-center flex flex-wrap items-center ">O</div>
            <div className="bg-black-200 w-[100px] h-[200px] justify-center flex flex-wrap items-center ">Y</div>
            </div>
            <div>
            <div className="bg-white-200 w-[100px] h-[200px] justify-center flex flex-wrap items-center "></div>
            <div className="bg-black-200 w-[100px] h-[200px] justify-center flex flex-wrap items-center "></div>
            <div className="bg-white-200 w-[100px] h-[200px] justify-center flex flex-wrap items-center ">F</div>
            <div className="bg-black-200 w-[100px] h-[200px] justify-center flex flex-wrap items-center ">T</div>
            </div>
                </div>
        <div>
        
          <div>
         <h1 className="text-center font-bold font-sans text-2xl">Login to your Account</h1> 
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
          className=" text-1xl  py-5 px-5  bg-transparent flex-1"
          type={showPassword?"password":"text"}
          placeholder="Password "
        />
        <div className="pr-3 cursor-pointer" onClick={handleShowPassword}>
          {showPassword?<FaEyeSlash />:<FaRegEye />}
       
       
        
        </div>
        </div>
        <div className="flex  justify-between items-center ">
        
        <div className="flex items-center gap-10 mt-5 ">
          <input  type="checkbox"/>
          <p>Remember Me</p>
        </div>
        <div>
          <p className="mt-10">Forgot Password?</p>
        </div>
        </div>
        <div>
        <input
          className=" mt-10 border border-white-500 py-8 px-[10em]  rounded-full square  bg-[#45c9a1] text-decoration-color-white"
          type="text"
          placeholder="Sign In "
        ></input>
        </div>
        <div className="flex gap-3 items-center mt-10">
                  <div className="border-b-2 border-gray-700 w-[300px]"></div>
  <div>or</div>
  <div className="border-b-2 border-gray-700 w-[300px]"></div>
              </div>
              <div className="text-2xl mt-10 border border-gray-400 py-4 px-30  rounded-full flex items-center gap-6 text-blue-800 justify-center">
      <FcGoogle size={40}/>
          <p>Sign Up With Google</p>
    
        </div>
        <div>
          <p className="font-sans text-2xl text-center mt-10">Dont Have An Account Yet?<span className="text-[#45c9a1] gap-3 ">Sign Up Free</span> </p>
        </div>
        </div>
        </div>
        <div>
          
        </div>     
    </div>
 )   
}
export default Login
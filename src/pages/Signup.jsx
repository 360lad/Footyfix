
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
// import { createUserWithEmailAndPassword} from "firebase/auth";
// import { auth,db} from "../Firebase";/
// import { collection,addDoc } from "firebase/firestore";
import { FcGoogle } from "react-icons/fc"; 
import { IoLogoFacebook } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
function Signup(){
  const [showPassword ,setShowPassword]=useState(true)
  function handleShowPassword(){<div className="bg-gray-200 w-[100px] h-[80px] justify-center flex flex-wrap items-center "></div>
    setShowPassword(prev=>!prev)
  }
  const [formInput, setPassword] = useState({
    emailAddress:"",
    password:"",
    phoneNumber:"",
    });
    const [errorMessage,setErrorMessage] = useState("");

    function handleInputChange(e) {
      setFormInput({ ...formInput,[e.target.name]:e.target.value})
    }
    function handleSignUp(){
      console.log(password);
      if (formInput.emailAddress === ""){
        setErrorMessage("Kindly fill in the emailAddress");
      }else if (formInput.password === ""){
        setErrorMessage("Kindly fill in the password");
      }else if (formInput.password.length < 8){
        setShowPassword("password  should have a  minimum & maximum of 8 characters ")
      }
    else if (formInput.phoneNumber.length<10){
        setErrorMessage("phone number should have a minimum & maximum of 10 characters");
      } else {setErrorMessage("");
    createUserWithEmailAndPassword(auth,
      formInput.emailAddress,
      formInput.password
      )
      .then(async (useerData) => {
        const user = userData.user;
        console.log(user);
        if (user) {
          const newUser = await addDoc(collection(db, "users"),formInput);
          console.log(newUser);
        }
      })
      .catch((error) => console.log(error));
    }
    }
    return(
       
      
  
  
    
        <div>
          <div className="container mx-auto  flex  gap-20">
            <div>
           <div className="flex gap-100  ">
            <div className="text-white w-[400px] font-sans font-small text-6xl ">
            <h1 >Sports Tournament 2024</h1>
            </div>
        <div className="w-[300px]  border-none">
            <img src="src/assets/footy-images/FreeVector-Football.jpg" />
            
            </div>
           </div>
           <div className="flex gap-10 mt-20 ">
            <div className="w-[200px]">
              <img src="src/assets/footy-images/cup-gold.jpeg"/>
             
            </div>
            <div className="w-[200px] ">
              <img src="src/assets/footy-images/silver.jpeg"  />
             
            </div>
            <div className="w-[200px]">
              <img src="src/assets/footy-images/silverplastic.jpeg" />
            </div>
           </div>
       </div>
       <div>
           <div>
            <h2 className="text-center font-bold font-sans text-2xl text-white">
              Create an Account            </h2>
          </div>
          <div className="flex">
          <div className="text-2xl mt-10 border border-none border-gray-400 py-4 px-30   flex items-center gap-6 text-blue-800 justify-center">
            <FcGoogle size={40}/>
            <p>Sign Up With Google</p>
          </div>
          <div className="text-2xl mt-10 border border-gray-400 py-4 px-20 border-none   flex items-center gap-6 text-blue-800 justify-center">
          <IoLogoFacebook  size={40}/>
                        <p>Sign Up With Google</p>
          </div>
          </div>
          <div className="flex gap-3 items-center mt-10">
            <div className="border-b-2 border-gray-700 w-[300px]"></div>
            <div className="text-white">or</div>
            <div className="border-b-2 border-gray-700 w-[300px]"></div>
          </div>
          <div>
            <input
              className=" mt-8 border border-white-500 py-8 px-[10em] rounded-full text-gray"
              type="text"
              placeholder="Email Address "
              name="emailAddress"
              onChange={handleInputChange}
            ></input>
          </div>
          <div>
            <input
              className=" mt-8 border border-white-500 py-8 px-[10em] rounded-full text-gray"
              type="text"
              placeholder="Phone Number "
              name="phoneNumber"
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="bg-white mt-8 border border-black-500 py-8 w-[570px] rounded-full text-gray gap-10 flex items-center justify-between ">
            <input className="outline-none"
              
              type={showPassword?"password":"text"}
              placeholder="Password "
              name="password"
              onChange={handleInputChange}
            />
            <div className="pr-3 cursor-pointer" onClick={handleShowPassword}>{showPassword?<FaRegEyeSlash />:<FaRegEye />}
              
            </div>
          </div>
          <div className="flex  justify-between items-center ">
            <div className="flex items-center gap-10 mt-5 ">
              <input type="checkbox" />
              <p>Remember Me</p>
            </div>
            <div>
              <p className="mt-10 text-white  ">Forgot Password?</p>
            </div>
          </div>
          <div className="items-center">
            <button
              className=" mt-10 border border-white-500 py-2 px-[5em]  rounded-full square  items-center text-white font-bold text-2xl " onChange={handleInputChange} >Create Account</button>
          </div>
          
          
          
          <div>
            <p className="font-sans text-2xl text-center mt-10 gap-5">
              Dont Have An Account Yet?
              <span className="text-[#6645c9] gap-5 ">Sign Up Free</span>{" "}
            </p>
          </div>
        </div>
        </div>
        </div>
    


  
    
   

     
      
      
        
    )
      }
export default Signup  
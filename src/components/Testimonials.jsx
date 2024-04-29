import React from "react";
import Testimonial from "./Testimonial";


import male from "../assets/footy-images/male-profile.png";
import female from "../assets/footy-images/female-profile.png";

function Testimonials() {
  

  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-center font-bold font-sans text-2xl text-white mt-24">Testimonials</h1>
        <div>
          <div className="flex gap-5 items-center flex-wrap">
            <Testimonial img={male} />
            <Testimonial img={female} />
          </div>
          <div>
         
          
          </div>
        </div>
      </div>
    </div>
  );
}



export default Testimonials;

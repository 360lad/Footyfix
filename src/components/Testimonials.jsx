import React from "react";
import Testimonial from "./Testimonial";


function Testimonials() {
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-center font-bold font-sans text-2xl text-white mt-24 mt-4">
          Testimonials
        </h1>
        <div>
          <div className="flex gap-8 justify-center mt-7">
            <div>
              <Testimonial paragraph="This is one of our coaches who trains uor students to play football" />
            </div>
            <Testimonial
              paragraph="The organisation and staff were very good, the tournament itself went very well all as per the program. Teams present were at good level which made the competition even more interesting.
Staff welcome and managers briefing was excellent."
            />
            <Testimonial paragraph=" I would just like to say that the football tournament
             was excellent 🙂 it flowed extremely well and was very well organised ,
              i cannot praise you enough for it. You have created some fantastic memories for
               teams and the coach's involved. " />
            <Testimonial paragraph="Being an Insightful Player is an opportunity 
            to get out there and tell a positive story rather than the negative ones
             that sometimes get told. Kids hear me and relate to me; maybe something I’ve 
             been going through can help them learn that tough times don’t
              last; tough people do. …. Insightful Player is doing a great job
               of reaching a lot of kids and by reaching out to Footyfix players who have 
                              been there and done a lot of things. Kids can learn a lot from 
               the Insightful Player initiative." 
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

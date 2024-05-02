import React from 'react';
import Carousel from './Carousel';
import { Link } from 'react-router-dom';
function HeroSection() {
    
    return (
        <div>
            <div className="container mx-auto ">
                <div className="flex justify-between items-center text-wrap">
                    <div className="m-8 w-[450px] h-[450px] slide-left">
                        <img src="src/assets/footy-images/photo.avif" alt="Footy Image" />
                    </div>
                    <div className="text-white mt-8  text-center ">
                        <p className="font-sans text-5xl text-semibold ">Footy Fix</p>
                        <h1 className="font-sans text-7xl font-bold ml-2">More than just a sporty  experience</h1>
                        <p className="font-sans text-3xl"><br/>We develop a program that meets your Tournament needs<br/>.Our commitment is in helping you have great,Fare and square Tournaments</p>
                    </div>
                </div>
                <Link to="/Registration"><button className="absolute top-[95%] right-[30%] bg-[#6645c9] text-white border-[#6645c9] rounded m-[1em] py-[1em] px-[2em] text-center">Tournaments</button></Link>
            </div>
            {/* <Carousel/> */}
        </div>
    );
}

export default HeroSection;
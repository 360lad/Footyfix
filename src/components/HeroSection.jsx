import React from 'react';
import Carousel from './Carousel';
function HeroSection() {
    
    return (
        <div>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="border border-gray-700 m-8 w-[450px] h-[450px] slide-left">
                        <img src="src/assets/footy-images/photo.avif" alt="Footy Image" />
                    </div>
                    <div className="text-white mt-8 slide-right">
                        <p className="font-sans text-5xl text-semibold text-center ml-2">Footy Fix</p>
                        <h1 className="font-sans text-7xl font-bold text-center items-center w-[500px]">More than just an application</h1>
                        <p className="font-sans text-3xl text-center">We develop a program that meets your individual needs. We are committed to helping you achieve your goals through our application</p>
                    </div>
                </div>
            </div>
            <Carousel/>
        </div>
    );
}

export default HeroSection;
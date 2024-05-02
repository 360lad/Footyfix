import React from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";



function Carousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div className="slide bg-image items-center">
                <h3>Slide 1</h3>
                <p>This is the content of slide 1</p>
            </div>
            <div className="slide">
                <h3>Slide 2</h3>
                <p>This is the content of slide 2</p>
            </div>
            <div className="slide">
                <h3>Slide 3</h3>
                <p>This is the content of slide 3</p>
            </div>
           
        </Slider>
    );
}
export default Carousel;
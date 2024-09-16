import React from "react";
import { imageList } from "./../../data/hero";
import Slider from "react-slick";

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true, // 'Infinite' should be 'infinite'
    speed: 800,
    slidesToScroll: 1,
    autoplay: true, // 'autoPlay' should be 'autoplay'
    autoplaySpeed: 4000, // 'autoPlaySpeed' should be 'autoplaySpeed'
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div
      className="relative overflow-hidden min-h-[500px] sm:min-h-[650px]
       bg-gray-100 flex justify-center items-center dark:bg-gray-950 transition-all
       dark:text-white"
    >
      {/* background pattern */}
      <div
        className="h-[700px] w-[700px] bg-primary/40 absolute
      -top-1/2 right-0 rounded-3xl rotate-45"
      ></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {imageList.map((data) => (
            <div className="p-10" key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 font-bold">
                {/* text contant section */}
                <div
                  className="flex flex-col justify-center gap-4 pt-12
                sm:pt-0 text-center sm:text-left order-2 sm:order-1
                relative z-10"
                >
                  <h1
                    data-aos="zoom-out"
                    className="text-5xl sm:text-6xl lg:text-7xl"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div data-aos="fade-up">
                    <button
                      className="bg-gradient-to-r from-primary to-secondary
                    hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                      onClick={() => handleOrderPopup()}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* images section */}
                <div className="order-1 sm:order-2">
                  <div data-aos="zoom-in" data-aos-once="true">
                    <img
                      src={data.img}
                      alt={data.title}
                      className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-125
                      lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;

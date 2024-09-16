import React from "react";
import Slider from "react-slick";
import TestimonialsData from "./../../data/Testimonials.json";

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true, // 'Infinite' should be 'infinite'
    speed: 500,
    slidesToScroll: 1,
    autoplay: true, // 'autoPlay' should be 'autoplay'
    autoplaySpeed: 8000, // 'autoPlaySpeed' should be 'autoplaySpeed'
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div
          className="text-center mb-10 max-w-[600px] mx-auto"
          data-aos="fade-up"
        >
          <p className="text-sm text-primary">What our customers are saying</p>
          <h1 className="text-3xl font-bold">Testimonials</h1>
          <p className="text-xl text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Testimonials Cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialsData.map((data) => (
              <div className="my-6" key={data.id}>
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg 
            py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      className="w-20 h-20 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500 dark:text-gray-200">
                        {data.text}
                      </p>
                      <h1 className="dark:text-white text-xl font-bold text-black/80">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p
                    className="text-black/20 text-9xl
                  font-serif absolute top-0 right-0"
                  >
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

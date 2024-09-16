import React from "react";
import Banner from "../../assets/Subscribe/orange-pattern.jpg";

const Subscribe = () => {
  return (
    <div
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white bg-cover bg-center bg-no-repeat h-full w-full"
      data-aos="fade-up"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

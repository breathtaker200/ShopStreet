import React from "react";

const HomeCard = ({ product }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105 overflow-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top h-full w-full"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="p-4 text-center">
        <h2 className="text-xl font-medium text-gray-900 mt-5">{product.brand}</h2>
        <p className="text-gray-600">{product.title}</p>
      </div>
    </div>
  );
};

export default HomeCard;

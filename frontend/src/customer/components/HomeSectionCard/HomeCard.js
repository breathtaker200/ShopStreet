import React from "react";

const HomeCard = ({product}) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top h-full w-full"
          src={product.image}
          alt="wakakwkawakwak"
        />
      </div>
      <div className="p-4">
        <h2 className=" text-xl font-medium text-gray-900 mt-5">{product.brand}</h2>
        <p className="text-gray-400">{product.title}</p>
      </div>
    </div>
  );
};

export default HomeCard;

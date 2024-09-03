import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { carouselData } from "./CarouselData";

const MainCarousel = () => {
  const items = carouselData.map((item) => (
    <img
      className="cursor-pointer"
      role="presentation"
      src={item.image}
      alt=""
    />
  ));

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      disableButtonsControls
      infinite
      autoPlay
      autoPlayInterval={2000}
    />
  );
};

export default MainCarousel;

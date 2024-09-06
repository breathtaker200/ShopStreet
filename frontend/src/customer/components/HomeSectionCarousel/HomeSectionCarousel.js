import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeCard from "../HomeSectionCard/HomeCard";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { kurtaData } from "../../../Utils/kurta";
import "react-alice-carousel/lib/alice-carousel.css";

const HomeSectionCarousel = () => {
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },    // Show 1 item on small screens
    720: { items: 2 },  // Show 2 items on medium screens
    1024: { items: 4 }, // Show 4 items on large screens
    1440: { items: 5 }, // Show 5 items on extra-large screens
  };

  const items = kurtaData.map((item) => (
    <div className="mx-4"> 
      <HomeCard product={item} />
    </div>
  ));

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  return (
    <div className=" relative w-full lg:px-6 mb-4">
      <div className="relative p-3 z-50">
        <AliceCarousel
          ref={carouselRef}
          mouseTracking
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          infinite={true} // Added infinite scroll for smooth user experience
        />

        {/* Prev Button - Positioned on the left side */}
        <IconButton
          aria-label="previous"
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full hover:bg-gray-700 z-10"
          style={{ marginLeft: '-20px' }} // slight adjustment to pull the button further out
        >
          <ArrowBackIosIcon />
        </IconButton>

        {/* Next Button - Positioned on the right side */}
        <IconButton
          aria-label="next"
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full hover:bg-gray-700 z-10"
          style={{ marginRight: '-20px' }} // slight adjustment to pull the button further out
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;

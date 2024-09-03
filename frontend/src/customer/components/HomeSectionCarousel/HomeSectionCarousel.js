import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeCard from "../HomeSectionCard/HomeCard";
import { Button, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { kurtaData } from "../../../Utils/kurta";

const HomeSectionCarousel = () => {
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const items = kurtaData.map((item) => <HomeCard product={item} />);

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
    <div className="relative lg:px-6 mb-5">
      <div className="relative p-5 z-50">
        <AliceCarousel
          ref={carouselRef}
          mouseTracking
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
        />
        <IconButton
          aria-label="previous"
          onClick={handlePrev}
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton
          aria-label="next"
          onClick={handleNext}
          style={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;

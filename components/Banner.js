import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

// IMP --- banner3 keeps breaking, i.e. undefined
import { banner1, banner2 } from "../assets";
import Image from "next/image";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect} fade>
        <Carousel.Item interval={500}>
          <Image
            src={banner1}
            className="d-block w-100"
            style={{ objectFit: "cover" }}
            alt="banner"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <Image
            alt="banner"
            src={banner2}
            className="d-block w-100"
            style={{ objectFit: "cover" }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;

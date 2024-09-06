import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cn } from "@/lib/utils";

const Carousel = () => {
  const sliderRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4.4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
        },
      },
    ],
    beforeChange: (current, next) => setCenterIndex(next),
  };

  // Updated array with image and name
  const items = [
    { img: "./3.svg", name: "Image 1" },
    { img: "./4.svg", name: "Image 2" },
    { img: "./6.svg", name: "Image 3" },
    { img: "./4.svg", name: "Image 4" },
    { img: "./3.svg", name: "Image 5" },
    { img: "./4.svg", name: "Image 6" },
    { img: "./6.svg", name: "Image 7" },
    { img: "./4.svg", name: "Image 8" },
  ];

  useEffect(() => {
    if (sliderRef.current) {
      setCenterIndex(sliderRef.current.innerSlider.state.currentSlide);
    }
  }, []);

  const getNormalisedIdx = (idx) => {
    const normalizedIdx = (idx - centerIndex + items.length) % items.length;
    return normalizedIdx;
  };

  const getMarginClass = (idx) => {
    const normalizedIdx = (idx - centerIndex + items.length) % items.length;
    if (normalizedIdx === 0) return "mt-28";
    if (normalizedIdx === 1 || normalizedIdx === items.length - 1)
      return "mt-14";
    return "";
  };

  return (
    <div className="w-full max-w-[100vw] -mt-28">
      <Slider ref={sliderRef} {...settings} className="flex gap-5">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`relative mx-6 transition-transform flex items-center justify-center duration-500 ease-in-out ${getMarginClass(
              idx
            )}`}
          >
            <img
              src={item.img}
              alt={item.name}
              className={cn(
                "w-60  lg:rounded-[80px] rounded-[68px] z-10",
                getNormalisedIdx(idx) === 0 && "border-4 border-yellow-500"
              )}
            />
            {getNormalisedIdx(idx) === 0 && (
              <div className="bg-white -mt-10 z-[500] flex items-center justify-center rounded-full gap-3 text-xl py-2 w-max px-5 ml-[10%] relative">
                {" "}
                <img
                  src={item.img}
                  alt={item.name}
                  className={cn("w-10 h-10 rounded-[80px]")}
                />
                {item.name}
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

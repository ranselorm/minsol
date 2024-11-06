// components/HeroSlider.tsx
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "/images/banner1.jpg",
    title: "More than a Century of Experience Paving the Path to the Future",
    description: "Aggregates Academy & Expo",
    buttonText: "Learn More",
    link: "#",
  },
  {
    image: "/images/banner2.png",
    title: "ME Digital – Our Technology Division",
    description: "Explore the latest in digital technology",
    buttonText: "ME Digital Lab",
    link: "#",
  },
  {
    image: "/images/banner3.jpg",
    title: "Integral solutions for the milling process",
    description: "Discover our solutions for milling",
    buttonText: "ME FIT Grinding",
    link: "#",
  },
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isManual, setIsManual] = useState(false);

  useEffect(() => {
    if (!isManual) {
      const slideInterval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 10000);

      return () => clearInterval(slideInterval);
    }
  }, [isManual]);

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
    setIsManual(true);

    // Reset isManual to allow auto-slide after 5 seconds
    setTimeout(() => setIsManual(false), 10000);
  };

  return (
    <div className="relative w-full h-[480px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-6">
            <h2 className="text-4xl font-bold mb-2 md:w-[600px] capitalize">
              {slide.title}
            </h2>
            {/* <p className="mb-4">{slide.description}</p> */}
            <Link
              to={slide.link}
              className="bg-transparent border-2 border-white px-4 py-2 rounded-md text-sm mt-8 flex items-center gap-x-1 font-bold"
            >
              {slide.buttonText}
              <Icon icon="ep:right" className="text-white" />
            </Link>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={` ${
              index === currentSlide
                ? "bg-white w-12 h-1 rounded"
                : "bg-gray-200 w-4 h-1 rounded"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;

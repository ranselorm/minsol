// components/Hero.tsx
import React from "react";
import { useModal } from "../../context/ModalContext";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
  flexImage: string;
  imageAlt: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText,
  backgroundImage,
  flexImage,
  imageAlt,
}) => {
  const { openModal } = useModal();
  return (
    <section
      className="relative bg-cover bg-center h-[400px] md:h-[400px] flex items-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-20 flex flex-col md:flex-row items-center gap-6">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl mb-6">{subtitle}</p>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition"
            onClick={() => openModal()}
          >
            {buttonText}
          </button>
        </div>

        {/* Flex Image */}
        <div className="md:w-1/2 flex justify-end h-[350px]">
          <img
            src={flexImage}
            alt={imageAlt}
            className="rounded-lg shadow-md h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

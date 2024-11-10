// components/SustainabilityCard.tsx
import React from "react";
import { Link } from "react-router-dom";

interface SustainabilityCardProps {
  imageSrc: string;
  title: string;
  description: string;
  linkUrl: string;
  bgColor?: string;
  reverse?: boolean;
}

const SustainabilityCard: React.FC<SustainabilityCardProps> = ({
  imageSrc,
  title,
  description,
  linkUrl,
  bgColor = "bg-gray-100",
  reverse = false,
}) => {
  return (
    <section
      className={`py-10 px-4 md:px-28 flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } ${bgColor}`}
    >
      <div className="flex-1">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-[400px] object-cover rounded-lg"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center md:pl-12">
        <h2 className="text-4 capitalizexl font-bold mb-4 text-blu uppercase">
          {title}
        </h2>
        <p className="text-grey mb-6 leading-normal">{description}</p>
        <Link to={linkUrl}>
          <button className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition capitalize">
            More information
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SustainabilityCard;

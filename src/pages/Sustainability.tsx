// components/Sustainability.tsx
import React from "react";
import Commitment from "../components/Commitment";
import Pillars from "../components/Pillars";
import Signature from "../components/Signature";

const Sustainability: React.FC = () => {
  return (
    <section>
      <div
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/sus.jpg')", // Replace with the actual image URL
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-12">
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
            PREPARING FOR A SUSTAINABLE FUTURE
            <br />
            FOR OVER 100 YEARS
          </h1>
          <p className="text-white text-lg md:text-2xl mt-4">
            IN TODAY'S WORLD, SUSTAINABILITY IS MORE IMPORTANT THAN EVER BEFORE.
            IT REQUIRES A COLLECTIVE EFFORT FROM ALL OF US.
          </p>
        </div>
      </div>
      <Commitment />
      <Pillars />
      <Signature />
    </section>
  );
};

export default Sustainability;

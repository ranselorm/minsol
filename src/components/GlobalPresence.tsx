import React from "react";
import News from "./News";
import Clients from "./Clients";

const GlobalPresence: React.FC = () => {
  return (
    <section className="bg-blu text-white py-12">
      <div className="container mx-auto px-4 md:px-20">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-semibold mb-4 leading-tight">
            We are present in more than 4 countries worldwide
          </h2>
        </div>

        {/* <div className="flex gap-y-12">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Enter the company name"
              className="w-full p-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2"
            />
            <button
              type="submit"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blu"
            >
              🔍
            </button>
          </div>
        </div> */}
      </div>
      <News />
      <Clients />
    </section>
  );
};

export default GlobalPresence;

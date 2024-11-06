import React from "react";
import { Link } from "react-router-dom";

const Consultant: React.FC = () => {
  return (
    <section className="bg-blue-800 text-white py-8 px-4 flex items-center gap-x-8 justify-center">
      <h2 className="text-xl md:text-2xl font-semibold">
        Let a consultant answer your questions
      </h2>
      <Link
        to="/contact"
        className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-300"
      >
        Contact us
      </Link>
    </section>
  );
};

export default Consultant;

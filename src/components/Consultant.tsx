// components/Consultant.tsx
import React from "react";
import { useModal } from "../context/ModalContext";

const Consultant: React.FC = () => {
  const { openModal } = useModal();

  return (
    <section className="bg-blue-800 text-white py-8 px-4 flex items-center gap-x-8 justify-center">
      <h2 className="text-xl md:text-2xl font-semibold">
        Let a consultant answer your questions
      </h2>
      <button
        onClick={openModal}
        className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-300"
      >
        Contact us
      </button>
    </section>
  );
};

export default Consultant;

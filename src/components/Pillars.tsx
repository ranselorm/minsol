// components/Pillars.tsx
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const pillars = [
  {
    icon: "fluent:document-signature-20-regular",
    title: "ME SIGNATURE",
    description:
      "Our Values are our hallmark, they guide our decision-making and the way we relate and commit.",
  },
  {
    icon: "mdi:people-outline",
    title: "OUR PEOPLE",
    description:
      "Respect for people’s dignity and their complete development, in addition to the proactive search for excellence.",
  },
  {
    icon: "material-symbols-light:nature-people-outline-rounded", // Replace with the correct icon URL
    title: "THE ENVIRONMENT",
    description:
      "Caring for the environment and having a positive impact on nature is a global challenge that we address in each of the solutions we deliver to our clients.",
  },
  {
    icon: "ep:connection", // Replace with the correct icon URL
    title: "VALUE CONNECTIONS",
    description:
      "Innovation and collaboration are essential principles to create value jointly and together with our stakeholders.",
  },
];

const Pillars: React.FC = () => {
  return (
    <section className="bg-blue-800 text-white py-12 px-4 md:px-28">
      <header className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Sustainability Pillars
        </h2>
      </header>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center max-w-xs"
          >
            <Icon icon={pillar.icon} className="text-6xl" />
            <h3 className="text-lg font-bold mb-2">{pillar.title}</h3>
            <p className="text-sm">{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pillars;

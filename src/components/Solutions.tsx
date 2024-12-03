// components/Solutions.tsx
import React from "react";
import { Link } from "react-router-dom";

const solutions = [
  {
    title: "Technical and Engineering",
    description:
      "We specialize in delivering end-to-end technical and engineering services for mineral processing, including feasibility studies, process design, and optimization. ",
    buttonText: "More Information",
    image: "/images/s1.png",
  },
  {
    title: "Training for Mining Operational Personnel",
    description:
      "We offer specialized training for mining operational personnel, including hands-on instruction in equipment operation.",
    buttonText: "More Information",
    image: "/images/s2.jpg",
  },
  {
    title: "Logistics and Transportation",
    description:
      "We offer comprehensive logistics and transportation services for the mineral processing industry, including supply chain",
    buttonText: "ME Digital Lab",
    image: "/images/s3.png",
  },
  {
    title: "Tenement Administration",
    description:
      "Our expert tenement administration services ensure efficient and legally compliant management of mineral exploration",
    buttonText: "More Information",
    image: "/images/s4.jpg",
  },
];

const Solutions: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="px-4 md:px-20 container mx-auto">
        <h2 className="section-title">Solutions</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-[#2c517c] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-[350px]"
            >
              <div className="h-[60%] w-full overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-4 text-white h-full">
                <div>
                  <h3 className="text-base font-bold mb-2">{solution.title}</h3>
                  <p className="mb-4 text-sm text-gray-300">
                    {solution.description}
                  </p>
                </div>
                <Link
                  to="#"
                  className="mt-auto inline-block font-semibold border border-gray-100 px-4 py-2 rounded-lg text-sm text-white hover:bg-gray-100 hover:text-blue-800 transition-colors duration-300 text-center"
                >
                  {solution.buttonText} &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;

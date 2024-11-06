// components/Solutions.tsx
import React from "react";
import { Link } from "react-router-dom";

const solutions = [
  {
    title: "ME FIT Programs",
    description: "Learn more about our ME FIT integrated solutions programs.",
    buttonText: "More Information",
    image: "/images/s1.png",
  },
  {
    title: "Products and Services",
    description: "Explore Our Range of Products and Services",
    buttonText: "More Information",
    image: "/images/s2.jpg",
  },
  {
    title: "ME Digital Lab",
    description:
      "Discover Mining 4.0 and Our ME Digital Lab Approach to Technology",
    buttonText: "ME Digital Lab",
    image: "/images/s3.png",
  },
  {
    title: "Digital solutions",
    description:
      "Learn more about Digital solutions services for mining industry",
    buttonText: "More Information",
    image: "/images/s4.jpg",
  },
];

const Solutions: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-32 bg-white">
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
                <h3 className="text-lg font-bold mb-2">{solution.title}</h3>
                <p className="mb-4">{solution.description}</p>
              </div>
              <Link
                to="#"
                className="mt-auto inline-block font-semibold border border-gray-100 px-4 py-2 rounded-lg text-sm text-white hover:bg-gray-100 hover:text-blue-800 transition-colors duration-300"
              >
                {solution.buttonText} &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;

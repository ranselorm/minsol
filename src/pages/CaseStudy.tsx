// components/CaseStudy.tsx
import React from "react";
import CaseStudyCard from "../components/CaseStudyCard";
import Consultant from "../components/Consultant";

const caseStudy = [
  {
    image: "/images/t1.jpg", // Replace with real image URL
    title:
      "ME Elecmetal’s ME PolyLight Design Reduces Wear Rate in SAG Mill Discharge Lifters by 17%",
    description:
      "Discover how our innovative solutions reduce wear rates and improve efficiency in SAG mill operations.",
    link: "#",
  },
  {
    image: "/images/t2.jpg", // Replace with real image URL
    title:
      "Valley Forge Ridgeback® bolts improve discharge end tension in SAG mills by 11%",
    description:
      "Learn about the impact of Ridgeback® bolts in improving performance and reducing tension in SAG mills.",
    link: "#",
  },
  {
    image: "/images/t3.png", // Replace with real image URL
    title:
      "ME Elecmetal’s Heavy Duty Liner Application Increases 1250 Tower Mill’s Availability by 50%",
    description:
      "Explore how heavy-duty liners significantly improve mill availability and operational efficiency.",
    link: "#",
  },
  {
    image: "/images/t3.png", // Replace with real image URL
    title:
      "ME Elecmetal’s Heavy Duty Liner Application Increases 1250 Tower Mill’s Availability by 50%",
    description:
      "Explore how heavy-duty liners significantly improve mill availability and operational efficiency.",
    link: "#",
  },
  {
    image: "/images/t2.jpg", // Replace with real image URL
    title:
      "Valley Forge Ridgeback® bolts improve discharge end tension in SAG mills by 11%",
    description:
      "Learn about the impact of Ridgeback® bolts in improving performance and reducing tension in SAG mills.",
    link: "#",
  },
  {
    image: "/images/t2.jpg", // Replace with real image URL
    title:
      "Valley Forge Ridgeback® bolts improve discharge end tension in SAG mills by 11%",
    description:
      "Learn about the impact of Ridgeback® bolts in improving performance and reducing tension in SAG mills.",
    link: "#",
  },
];

const CaseStudy: React.FC = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto">
        {/* Title Section */}
        <div className="px-4 md:px-28 py-8">
          <header className="text-center mb-12">
            <h1 className="text-3xl font-bold text-blue-800">Case studies</h1>
          </header>

          {/* Filter Section */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <select
              className="border border-gray-300 rounded-md p-2 flex-1 min-w-[200px] focus:outline-none focus:ring focus:ring-blue-300"
              defaultValue="All"
            >
              <option value="All">ME FIT Program</option>
              <option value="Program1">Program 1</option>
              <option value="Program2">Program 2</option>
            </select>
            <select
              className="border border-gray-300 rounded-md p-2 flex-1 min-w-[200px] focus:outline-none focus:ring focus:ring-blue-300"
              defaultValue="All"
            >
              <option value="All">KPI Impacted</option>
              <option value="KPI1">KPI 1</option>
              <option value="KPI2">KPI 2</option>
            </select>
            <select
              className="border border-gray-300 rounded-md p-2 flex-1 min-w-[200px] focus:outline-none focus:ring focus:ring-blue-300"
              defaultValue="All"
            >
              <option value="All">Equipment</option>
              <option value="Equipment1">Equipment 1</option>
              <option value="Equipment2">Equipment 2</option>
            </select>
            <button className="bg-orange-500 text-white font-medium py-2 px-4 rounded-md hover:bg-orange-600 transition">
              Search
            </button>
          </div>

          {/* Case Studies Section */}
          <div className="flex gap-6 flex-wrap justify-center">
            {caseStudy.map((study, index) => (
              <CaseStudyCard
                key={index}
                image={study.image}
                title={study.title}
                description={study.description}
                link={study.link}
              />
            ))}
          </div>
        </div>
      </div>
      <Consultant />
    </section>
  );
};

export default CaseStudy;

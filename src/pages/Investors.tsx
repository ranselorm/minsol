import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import InvestorsCard from "../components/InvestorsCard";

const sections = [
  {
    imageSrc: "/images/c1.jpg",
    title: "Annual reports",
    description: "Annual company reports",
    linkUrl: "annual-reports",
    bgColor: "bg-gray-100", // Light gray background
    reverse: false, // Default layout
  },
  {
    imageSrc: "/images/c2.jpg",
    title: "Corporate affairs",
    description: "All financial documentation updated throughout the year.",
    linkUrl: "#",
    bgColor: "bg-white", // White background
    reverse: true, // Reversed layout
  },
  {
    imageSrc: "/images/c3.jpg",
    title: "Contact for investors",
    description:
      "Information for interested investors about the Elecmetal Group.",
    linkUrl: "#",
    bgColor: "bg-gray-100", // Light gray background
    reverse: false, // Default layout
  },
  {
    imageSrc: "/images/c4.jpg",
    title: "Compliance",
    description:
      "Find all our documentation of practices, policies, manuals, among others.",
    linkUrl: "#",
    bgColor: "bg-white", // White background
    reverse: true, // Reversed layout
  },
];

const Investors: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      <Outlet />
      {location.pathname === "/investors" && (
        <>
          {sections.map((section, index) => (
            <InvestorsCard
              key={index}
              imageSrc={section.imageSrc}
              title={section.title}
              description={section.description}
              linkUrl={section.linkUrl}
              bgColor={section.bgColor}
              reverse={section.reverse}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Investors;

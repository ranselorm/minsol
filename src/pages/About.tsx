// About.tsx
import React, { useEffect } from "react";
import Vision from "../components/Vision";
import TabbedLayout from "../components/TabbedLayout";
import News from "../components/News";
import Consultant from "../components/Consultant";

const stats = [
  {
    value: "100+",
    label: "Years of experience",
    linkText: "Learn about our history >",
    linkHref: "#",
  },
  {
    value: "1,000+",
    label: "Associates",
    linkText: "",
    linkHref: "",
  },
  {
    value: "40+",
    label: "Countries around the world",
    linkText: "See plants and offices >",
    linkHref: "#",
  },
];

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="pt-12 text-center">
      <p className="max-w-2xl mx-auto mb-24 text-left text-lg text-grey">
        We are a global company with more than 100 years of experience as a
        supplier and strategic partner in the mining industry. We are known for
        always being at the forefront of innovation and technology, with the aim
        of providing new and better end-to-end solutions to our customers around
        the world, exceeding their expectations.
      </p>

      <div className="flex flex-col md:flex-row justify-center space-x-8">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center gap-y-4">
              <h3 className="text-6xl font-bold text-blue-800">{stat.value}</h3>
              <p className="text-gray-500 text-base">{stat.label}</p>
              {stat.linkText && (
                <a href={stat.linkHref} className="text-orange-600 mt-2">
                  {stat.linkText}
                </a>
              )}
            </div>
            {index < stats.length - 1 && (
              <div className="border-l border-gray-300 h-20 mx-4"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      <Vision />
      <TabbedLayout />
      <News />
      <Consultant />
    </section>
  );
};

export default About;

// components/News.tsx
import React from "react";
import { Link } from "react-router-dom";
import NewsCard from "./NewsCard";

const newsItems = [
  {
    title:
      "ME Elecmetal’s Approach to Sustainability in the Metallurgical Industry",
    date: "12/09/2024",
    category: "News Sostenibilidad",
    image: "/images/n1.jpg",
    link: "#",
  },
  {
    title: "ME Elecmetal announces important investment in South Africa",
    date: "04/09/2024",
    category: "News",
    image: "/images/n2.jpg",
    link: "#",
  },
  {
    title:
      "Advancing Operational Excellence with ME Elecmetal’s Integrated Management System",
    date: "16/08/2024",
    category: "News Sostenibilidad",
    image: "/images/n3.jpg",
    link: "#",
  },
];

const News: React.FC = () => {
  return (
    <section className="py-8 px-4 md:px-32 bg-">
      <div className="flex justify-between items-center mb-8">
        <h2 className="section-title">News</h2>
        <Link
          to="#"
          className="text-orange-600 font-semibold flex items-center"
        >
          More &rarr;
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item, index) => (
          <NewsCard
            key={index}
            title={item.title}
            date={item.date}
            category={item.category}
            image={item.image}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
};

export default News;

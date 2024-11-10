import React, { useState } from "react";
import { Link } from "react-router-dom";

const reports = [
  { year: 2023, title: "Annual Report 2023", link: "#" },
  { year: 2022, title: "Annual Report 2022", link: "#" },
  { year: 2021, title: "Annual Report 2021", link: "#" },
  { year: 2020, title: "Annual Report 2020", link: "#" },
  { year: 2019, title: "Annual Report 2019", link: "#" },
  { year: 2018, title: "Annual Report 2018", link: "#" },
  { year: 2017, title: "Annual Report 2017", link: "#" },
];

const AnnualReports: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>("All");

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
  };

  const filteredReports =
    selectedYear === "All"
      ? reports
      : reports.filter((report) => report.year.toString() === selectedYear);

  return (
    <section className="px-4 py-8 md:px-28 bg-gray-100">
      {/* Title */}
      <header className="mb-8 text-left">
        <h1 className="text-3xl font-bold text-blu">Annual Reports</h1>
      </header>

      {/* Filter Dropdown */}
      <div className="mb-8 flex justify-start">
        <select
          value={selectedYear}
          onChange={handleYearChange}
          className="border border-gray-300 px-4 py-2 rounded-md w-3/12 focus:border-blu"
        >
          <option value="All">All</option>
          {[...new Set(reports.map((report) => report.year))]
            .sort((a, b) => b - a) // Sort years in descending order
            .map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
        </select>
      </div>

      {/* Reports Grid */}
      <div className="flex flex-wrap justify-start gap-6">
        {filteredReports.map((report, index) => (
          <div
            key={index}
            className="w-full md:w-[200px] bg-white rounded-lg shadow-lg flex flex-col items-center"
          >
            <div
              className={`w-full h-40 rounded-lg border-[1px] ${
                index === 0 ? "bg-blu" : "bg-white text-black"
              } flex flex-col justify-center text-white font-bold px-4`}
            >
              {report.title}
              <div className="mt-4">
                <Link
                  to={report.link}
                  className="text-orange-400 font-bold hover:underline flex items-center"
                >
                  VIEW PDF
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnnualReports;

// components/Vision.tsx
import React from "react";

const Vision: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-stretch py-10 w-full">
      <div className="flex-1 bg-white w-full flex flex-col">
        <div className="px-4 md:px-28 py-8">
          <h3 className="text-2xl mb-4 text-left">Vision</h3>
          <p className="text-left text-gray-700 font-medium text-base">
            ME Elecmetal will be a globally competitive supplier recognized for
            excellence and leadership in the sustainable delivery of integral
            solutions that add value to mining processes and other target
            markets.
          </p>
        </div>
        <div className="px-4 md:px-28 py-8">
          <h3 className="text-2xl mb-4 text-left">Mission</h3>
          <p className="text-left text-gray-700 font-medium text-base">
            To satisfy the needs and exceed the expectations of its customers,
            employees, suppliers, shareholders, and the community through
            excellence in the sustainable delivery of integral solutions to the
            market.
          </p>
        </div>
      </div>

      {/* Values Column */}
      <div className="flex-1 bg-blue-800 text-white w-full flex flex-col px-4 md:px-8 py-8 font-semibold">
        <h3 className="text-2xl font-bold mb-6 text-left pl-4 md:pl-24">
          Values
        </h3>
        <ul className="list-decimal space-y-2 text-left pl-4 md:pl-28 px-28 text-lg">
          <li>Respect for the dignity of others</li>
          <li>Integral human development</li>
          <li>Focus on internal and external customers</li>
          <li>Responsibility and integrity</li>
          <li>Commitment with sustainability</li>
        </ul>
      </div>
    </section>
  );
};

export default Vision;

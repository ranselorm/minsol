// components/Vision.tsx
import { Icon } from "@iconify/react";
import React from "react";

const Vision: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-stretch py-10 w-full">
      <div className="flex-1 bg-white w-full ">
        <div className="flex flex-col container mx-auto">
          <div className="px-4 md:px-20 py-8">
            <h3 className="text-2xl mb-4 text-left">Vision</h3>
            <p className="text-left text-grey font-medium text-base">
              ME Elecmetal will be a globally competitive supplier recognized
              for excellence and leadership in the sustainable delivery of
              integral solutions that add value to mining processes and other
              target markets.
            </p>
          </div>
        </div>
        <div className="px-4 md:px-20 py-8">
          <h3 className="text-2xl mb-4 text-left">Mission</h3>
          <p className="text-left text-grey font-medium text-base">
            To satisfy the needs and exceed the expectations of its customers,
            employees, suppliers, shareholders, and the community through
            excellence in the sustainable delivery of integral solutions to the
            market.
          </p>
        </div>
      </div>

      {/* Values Column */}
      <div className="flex-1 bg-blu text-white w-full px-4 md:px-8 py-8">
        <h3 className="text-2xl mb-5 font-bold">Our Values</h3>
        <div className="flex flex-col gap-y-5 text-[15px]">
          <div className="flex items-start gap-x-1">
            <Icon icon="carbon:checkmark-filled" className="w-10 mt-1" />
            <p className="text-left">
              <span className="mr-1">Excellence:</span> We are committed to
              delivering the highest quality services and solutions, setting
              benchmarks for performance and reliability in the mining sector
            </p>
          </div>
          <div className="flex items-start gap-x-1">
            <Icon icon="carbon:checkmark-filled" className="w-10 mt-1" />
            <p className="text-left">
              <span className="mr-1">Integrity:</span> We conduct our business
              with transparency, honesty, and accountability, fostering trust
              and long-term relationships with our stakeholders
            </p>
          </div>
          <div className="flex items-start gap-x-1">
            <Icon icon="carbon:checkmark-filled" className="w-10 mt-1" />
            <p className="text-left">
              <span className="mr-1">Adaptability:</span> We respond dynamically
              to the evolving needs of the mining industry, ensuring that our
              services remain relevant and effective in a changing environment
            </p>
          </div>
          <div className="flex items-start gap-x-1">
            <Icon icon="carbon:checkmark-filled" className="w-10 mt-1" />
            <p className="text-left">
              <span className="mr-1">Collaboration:</span> We believe in working
              closely with our clients and partners to achieve mutual success
              and drive positive outcomes in every project we undertake
            </p>
          </div>
          <div className="flex items-start gap-x-1">
            <Icon icon="carbon:checkmark-filled" className="w-10 mt-1" />
            <p className="text-left">
              <span className="mr-1">Collaboration:</span> We are dedicated to
              promoting sustainable practices in all aspects of our operations.
              We aim to contribute to the long-term health of the mining
              industry and the communities we serve
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;

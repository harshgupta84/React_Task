import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Card = ({ heading, subheading }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-md flex items-center justify-between">
      <div className="mx-3">
        <h2 className="text-lg font-semibold">{heading}</h2>
        <p className="text-sm text-gray-500">{subheading}</p>
      </div>
      <div className="text-blue-500">
        <FaArrowRight />
      </div>
    </div>
  );
};

export default Card;

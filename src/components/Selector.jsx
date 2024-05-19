import React from "react";
import { BsQuestion } from "react-icons/bs";

const Selector = ({ label, options, onChange, selectedValue }) => {
  return (
    <div className="">
      <div className="flex items-center gap-4 m-3 min-w-96">
        <div className=" flex min-w-40 gap-2">
          <label className="text-md">{label}</label>
          <div className="bg-slate-400 w-4 h-4 rounded-full flex items-center justify-center">
            <BsQuestion className="text-white" />
          </div>
        </div>
        <select
          id="series"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={onChange}
          value={selectedValue}
        >
          <option disabled selected>
            Choose Option
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Selector;

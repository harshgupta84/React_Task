import React, { useState } from "react";
import Selector from "../components/Selector";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import { Link } from "react-router-dom";
import TabInfo from "../components/TabInfo";

function Display4() {
  const [progress, setProgress] = useState(0);
  const seriesOptions = [
    { value: "US", label: "United States" },
    { value: "CA", label: "Canada" },
    { value: "FR", label: "France" },
    { value: "DE", label: "Germany" },
  ];

  const handleChange = (event) => {
    const sections = event.target.form.querySelectorAll(".section");
    let filledInputs = 0;
    let totalInputs = 0;

    sections.forEach((section, index) => {
      const inputs = section.querySelectorAll('input[type="text"]');
      const filledCount = Array.from(inputs).filter(
        (input) => input.value.trim() !== ""
      ).length;
      filledInputs += filledCount;
      totalInputs += inputs.length;

      const selectors = section.querySelectorAll(".selector");
      selectors.forEach((selector) => {
        if (selector.value.trim() !== "") {
          filledInputs++;
        }
        totalInputs++;
      });

      if (filledCount > 0 || selectors.length > 0) {
        setProgress((index + 1) * 25);
      }
    });

    const newProgress = Math.round((filledInputs / totalInputs) * 100);
    setProgress(newProgress);
  };

  return (
    <div>
      <TabInfo heading="Configure a new door" step="2 of 3" link="display3" />
      <div className="m-4">
        <div>
          <div className=" mt-8 mx-52 bg-gray-200 rounded">
            <div
              className="h-2 text-center text-white bg-green-500 rounded"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <h1 className=" font-bold m-5">Completed {progress}%</h1>
        </div>
        <div className="flex flex-col gap-6">
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
        </div>
        <div className="mt-4 flex flex-row justify-end border p-2">
          <Link to="/display2">
            <button
              type="button"
              class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-amber-950 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
            >
              ADD MORE
            </button>
          </Link>
          <Link to="/display5">
            <button
              type="button"
              class="text-white bg-amber-950 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              PLACE ORDER
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Display4;

import React from "react";
import Selector from "./Selector";

const Section3 = () => {
  const sectionOptions = [
    { value: "section1", label: "Section 1" },
    { value: "section2", label: "Section 2" },
    { value: "section3", label: "Section 3" },
  ];

  const trackSizeOptions = [
    { value: "small", label: "Small" },
    { value: "medium", label: "Medium" },
    { value: "large", label: "Large" },
  ];

  const trackMountOptions = [
    { value: "surface", label: "Surface Mount" },
    { value: "flush", label: "Flush Mount" },
    { value: "inset", label: "Inset Mount" },
  ];

  const trackLiftOptions = [
    { value: "standard", label: "Standard Lift" },
    { value: "low", label: "Low Lift" },
    { value: "high", label: "High Lift" },
  ];

  const trackRadiusOptions = [
    { value: "straight", label: "Straight" },
    { value: "curved", label: "Curved" },
  ];

  return (
    <div>
      <div className="max-w-screen-md mx-96 border rounded-lg">
        <div className="bg-zinc-300">
          <div className="flex ml-4">
            <span className="text-lg">Track Options</span>
          </div>
        </div>
        <div className="p-4">
          <Selector
            label="Section"
            options={sectionOptions}
            className="selector"
          />

          <Selector
            label="Track Size"
            options={trackSizeOptions}
            className="selector"
          />

          <Selector
            label="Track Mount"
            options={trackMountOptions}
            className="selector"
          />

          <Selector
            label="Track Lift"
            options={trackLiftOptions}
            className="selector"
          />

          <Selector
            label="Track Radius"
            options={trackRadiusOptions}
            className="selector"
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;

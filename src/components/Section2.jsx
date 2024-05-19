import React from "react";
import Selector from "./Selector";

const Section2 = () => {
  // Glass Type options
  const glassTypeOptions = [
    { value: "clear", label: "Clear Glass" },
    { value: "tinted", label: "Tinted Glass" },
    { value: "frosted", label: "Frosted Glass" },
    { value: "low-e", label: "Low-E Glass" },
  ];

  // Section(S) Glazed options
  const sectionGlazedOptions = [
    { value: "single", label: "Section 1" },
    { value: "double", label: "Section 2" },
    { value: "triple", label: "Section 3" },
  ];

  // Framing options
  const framingOptions = [
    { value: "aluminum", label: "Aluminum Frame" },
    { value: "wood", label: "Wood Frame" },
    { value: "vinyl", label: "Vinyl Frame" },
    { value: "composite", label: "Composite Frame" },
  ];

  return (
    <div>
      <div className="max-w-screen-md mx-96 border rounded-lg">
        <div className="bg-zinc-300">
          <div className="flex ml-4">
            <span className="text-lg">Window Options</span>
          </div>
        </div>
        <div className="p-4">
          <Selector
            label="Glass Type"
            options={glassTypeOptions}
            className="selector"
          />

          <Selector
            label="Section(S) Glazed"
            options={sectionGlazedOptions}
            className="selector"
          />

          <Selector
            label="Framing"
            options={framingOptions}
            className="selector"
          />
        </div>
      </div>
    </div>
  );
};

export default Section2;

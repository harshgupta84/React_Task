import React from "react";
import Selector from "./Selector";
import { BsQuestion } from "react-icons/bs";
const Section4 = () => {
  const seriesOptions = [
    { value: "US", label: "United States" },
    { value: "CA", label: "Canada" },
    { value: "FR", label: "France" },
    { value: "DE", label: "Germany" },
  ];
  return (
    <div>
      <div className=" max-w-screen-md mx-96 border rounded-lg">
        <div className=" bg-zinc-300">
          <div className="flex ml-4">
            <span className="text-lg">Other Options</span>
          </div>
        </div>
        <div className="p-4">
          <Selector label="Lock" options={seriesOptions} className="selector" />
          <div className="flex flex-row gap-7">
            <div className="flex items-center gap-4 m-3">
              <label className="text-md">MISC Lock Options</label>
              <div className="bg-slate-500 w-4 h-4 rounded-full flex items-center justify-center">
                <BsQuestion className="text-white" />
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <label className="mt-2">No Lock Hide</label>
            </div>
          </div>
          <Selector
            label="Packaging"
            options={seriesOptions}
            className="selector"
          />
          <div className="flex flex-row gap-7">
            <div className="flex items-center gap-4 m-3">
              <label className="text-md">Additional Options</label>
              <div className="bg-slate-500 w-4 h-4 rounded-full flex items-center justify-center">
                <BsQuestion className="text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <div class="flex items-center ml-6 mt-3  ">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4  text-amber-900 bg-gray-100 border-gray-300 rounded focus:ring-amber-900"
                />
                <label
                  for="default-checkbox"
                  class="ms-2 text-sm font-medium text-gray-900 "
                >
                  Default checkbox
                </label>
              </div>
            </div>
            <select
              id="series"
              className=" mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-amber-900 focus:border-blue-500 block w-32 h-9 p-2"
            >
              <option value="volvo">5 Extra Struts</option>
              <option value="saab">3 Extra Struts</option>
              <option value="opel">1 Extra Struts</option>
              <option value="audi">No Extra Struts</option>
            </select>
          </div>
          <div className="ml-60 mt-2 flex flex-col gap-2">
            <div class="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-amber-900 bg-gray-100 border-gray-300 rounded focus:ring-amber-900"
              />
              <label
                for="default-checkbox"
                class="ms-2 text-sm font-medium text-gray-900 "
              >
                Extra Strut(s)
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-amber-900 bg-gray-100 border-gray-300 rounded focus:ring-amber-900"
              />
              <label
                for="default-checkbox"
                class="ms-2 text-sm font-medium text-gray-900 "
              >
                Spade Strap Hinge(s)
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-amber-900 bg-gray-100 border-gray-300 rounded focus:ring-amber-900"
              />
              <label
                for="default-checkbox"
                class="ms-2 text-sm font-medium text-gray-900 "
              >
                14 GA Quiet Hinge
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-amber-900 bg-gray-100 border-gray-300 rounded focus:ring-amber-900"
              />
              <label
                for="default-checkbox"
                class="ms-2 text-sm font-medium text-gray-900 "
              >
                Less Bottom Astragal
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-amber-900 bg-gray-100 border-gray-300 rounded focus:ring-amber-900"
              />
              <label
                for="default-checkbox"
                class="ms-2 text-sm font-medium text-gray-900 "
              >
                Gold Bar Gurantee ( Select Dealers )
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-amber-900 bg-gray-100 border-gray-300 rounded focus:ring-amber-900"
              />
              <label
                for="default-checkbox"
                class="ms-2 text-sm font-medium text-gray-900 "
              >
                Medallion Hardware Upgrade
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-amber-900 bg-gray-100 border-gray-300 rounded focus:ring-amber-900"
              />
              <label
                for="default-checkbox"
                class="ms-2 text-sm font-medium text-gray-900 "
              >
                Light Seal Kit
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-amber-900 bg-gray-100 border-gray-300 rounded focus:ring-amber-900"
              />
              <label
                for="default-checkbox"
                class="ms-2 text-sm font-medium text-gray-900 "
              >
                Slide Lock Mounted at 54”
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-amber-900 bg-gray-100 border-gray-300 rounded focus:ring-amber-900"
              />
              <label
                for="default-checkbox"
                class="ms-2 text-sm font-medium text-gray-900 "
              >
                2 Spear Lift Handles
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;

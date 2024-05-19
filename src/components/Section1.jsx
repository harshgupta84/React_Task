import React from "react";
import { BsQuestion } from "react-icons/bs";
import Selector from "./Selector";
import { useDispatch, useSelector } from "react-redux";
import {
  setAssembly,
  setWinch,
  setWfeet,
  setHinch,
  setHfeet,
  setWindCode,
  setColor,
  setDesign,
  resetCart,
} from "../redux/slices/CartSlice";

const Section1 = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const seriesOptions = [
    { value: "US", label: "Complete Door" },
    { value: "CA", label: "Wooden Door" },
    { value: "FR", label: "Frame Only" },
    { value: "DE", label: "Door Wood" },
  ];
  const seriesOptions1 = [
    { value: "US", label: "Windcode W1" },
    { value: "CA", label: "Windcode W2" },
    { value: "FR", label: "Windcode W3" },
    { value: "DE", label: "Windcode W4" },
  ];
  const seriesOptions2 = [
    { value: "US", label: "CC" },
    { value: "CA", label: "CD" },
    { value: "FR", label: "DF" },
    { value: "DE", label: "CB" },
  ];
  const seriesOptions3 = [
    { value: "US", label: "Brown" },
    { value: "CA", label: "Black" },
    { value: "FR", label: "Amber" },
    { value: "DE", label: "Wood Brown" },
  ];
  const handleAssemblyChange = (e) => {
    dispatch(setAssembly(e.target.value));
  };
  const handleWinchChange = (e) => {
    dispatch(setWinch(e.target.value));
  };
  const handleWfeetChange = (e) => {
    dispatch(setWfeet(e.target.value));
  };
  const handleHinchChange = (e) => {
    dispatch(setHinch(e.target.value));
  };
  const handleHfeetChange = (e) => {
    dispatch(setHfeet(e.target.value));
  };
  const handleWindcodeChange = (e) => {
    dispatch(setWindCode(e.target.value));
  };
  const handleDesignChange = (e) => {
    dispatch(setDesign(e.target.value));
  };
  const handleColorChange = (e) => {
    dispatch(setColor(e.target.value));
  };

  return (
    <div>
      <div className=" max-w-screen-md mx-96 border rounded-lg">
        <div className=" bg-zinc-300">
          <div className="flex ml-4">
            <span className="text-lg">Layout Options</span>
          </div>
        </div>
        <div className="p-4">
          <Selector
            label="Assembly Type"
            options={seriesOptions}
            onChange={handleAssemblyChange}
            selectedValue={cart.assembly}
          />
          <div className="flex flex-row">
            <div className="flex items-center gap-4 m-3">
              <label className="text-md">Measure Size</label>
              <div className="bg-slate-500 w-4 h-4 rounded-full flex items-center justify-center">
                <BsQuestion className="text-white" />
              </div>
            </div>
            <div className="flex items-center gap-4 m-3">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-4">
                  <div className="flex items-center gap-4 m-3">
                    <label className="text-md">Width</label>
                    <div className="bg-slate-500 w-4 h-4 rounded-full flex items-center justify-center">
                      <BsQuestion className="text-white" />
                    </div>
                  </div>
                  <select
                    id="series"
                    onChange={handleWfeetChange}
                    value={cart.wfeet}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-32 p-2"
                  >
                    <option value="8">8 ft</option>
                    <option value="9">9 ft</option>
                    <option value="11">11 ft</option>
                    <option value="13">13 ft</option>
                  </select>
                  <select
                    id="series"
                    onChange={handleWinchChange}
                    value={cart.winch}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-32 p-2"
                  >
                    <option value="2">2 inch</option>
                    <option value="4">4 inch</option>
                    <option value="6">6 inch</option>
                    <option value="8">8 inch</option>
                    <option value="10">10 inch</option>
                  </select>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="flex items-center gap-4 m-3">
                    <label className="text-md">Height</label>
                    <div className="bg-slate-500 w-4 h-4 rounded-full flex items-center justify-center">
                      <BsQuestion className="text-white" />
                    </div>
                  </div>
                  <select
                    id="series"
                    onChange={handleHfeetChange}
                    value={cart.hfeet}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-32 p-2"
                  >
                    <option value="8">8 ft</option>
                    <option value="9">9 ft</option>
                    <option value="11">11 ft</option>
                    <option value="13">13 ft</option>
                  </select>
                  <select
                    id="series"
                    onChange={handleHinchChange}
                    value={cart.hinch}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-32 p-2"
                  >
                    <option value="2">2 inch</option>
                    <option value="4">4 inch</option>
                    <option value="6">6 inch</option>
                    <option value="8">8 inch</option>
                    <option value="10">10 inch</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <Selector
            label="Windcode"
            options={seriesOptions1}
            onChange={handleWindcodeChange}
            selectedValue={cart.windcode}
          />
          <Selector
            label="Design"
            options={seriesOptions2}
            onChange={handleDesignChange}
            selectedValue={cart.design}
          />
          <Selector
            label="Color"
            options={seriesOptions3}
            onChange={handleColorChange}
            selectedValue={cart.color}
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;

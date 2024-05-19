import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Selector from "../components/Selector";
import TabInfo from "../components/TabInfo";
import { setCategory, setSeries, setDoorType } from "../redux/slices/CartSlice";

const Display3 = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const categoryOptions = [
    { value: "residential", label: "Residential Door" },
    { value: "commercial", label: "Commercial Door" },
    { value: "industrial", label: "Industrial Door" },
    { value: "garage", label: "Garage Door" },
  ];

  const seriesOptions = [
    { value: "series1", label: "Series 1" },
    { value: "series2", label: "Series 2" },
    { value: "series3", label: "Series 3" },
    { value: "series4", label: "Series 4" },
  ];

  const doorTypeOptions = [
    { value: "single", label: "Single Door" },
    { value: "double", label: "Double Door" },
    { value: "sliding", label: "Sliding Door" },
    { value: "french", label: "French Door" },
  ];

  const handleCategoryChange = (e) => {
    dispatch(setCategory(e.target.value));
  };

  const handleSeriesChange = (e) => {
    dispatch(setSeries(e.target.value));
  };

  const handleDoorTypeChange = (e) => {
    dispatch(setDoorType(e.target.value));
  };

  return (
    <div className="max-h-screen">
      <TabInfo heading="Configure a new door" step="1 of 3" link="display2" />
      <div className="flex flex-col justify-center">
        <div className="flex-1">
          <div className="flex flex-col items-center justify-between">
            <div className="flex flex-col">
              <Selector
                label="Select Category"
                options={categoryOptions}
                onChange={handleCategoryChange}
                selectedValue={cart.category}
              />
              <Selector
                label="Select Series"
                options={seriesOptions}
                onChange={handleSeriesChange}
                selectedValue={cart.series}
              />
              <Selector
                label="Door Type"
                options={doorTypeOptions}
                onChange={handleDoorTypeChange}
                selectedValue={cart.doorType}
              />
            </div>
          </div>
        </div>
        <div className="mx-4 border-2 mt-96"></div>
        <div className="flex-1 mt-2">
          <div className="mt-4 flex justify-end mr-10">
            <Link
              to="/display4"
              className="bg-red-500 text-white p-2 rounded-md"
            >
              CONFIGURE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display3;

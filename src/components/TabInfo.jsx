import React from "react";
import { LiaArrowLeftSolid } from "react-icons/lia";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
const TabInfo = ({ step, heading,link }) => {
  return (
    <div className="flex justify-center h-12 bg-slate-600 items-center px-4">
      <div className="flex items-center mr-auto text-white text-2xl font-bold">
        <Link to={`/${link}`}>
          <LiaArrowLeftSolid />
        </Link>
      </div>
      <div className="ml-4 flex-1 text-left">
        <span className="text-white text-lg">{heading}</span>
        <span className="text-white text-sm ml-2">{step}</span>
      </div>
      <div className="flex items-center ml-auto space-x-2">
        <BsThreeDotsVertical className="text-white" />
      </div>
    </div>
  );
};

export default TabInfo;

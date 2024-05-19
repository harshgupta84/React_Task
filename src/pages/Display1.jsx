import React from "react";
import Tabs from "../components/Tabs";
import Table from "../components/Table";
import { useState } from "react";
const Display1 = () => {
  const [active, setActive] = useState("ActiveCarts");
  const tabStyle = {
    fontFamily: "Helvetica Neue, sans-serif",
  };
  return (
    <div>
      <div className=" flex flex-row justify-center h-12 bg-slate-600">
        <div>
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li className="me-2">
              <button
                style={tabStyle}
                className={`inline-flex font-bold items-center justify-center p-3 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group ${
                  active === "ActiveCarts"
                    ? "text-white border-b-2  border-yellow-500"
                    : ""
                }`}
                onClick={() => setActive("ActiveCarts")}
              >
                CARTS
              </button>
            </li>
            <li className="me-2">
              <button
                style={tabStyle}
                className={`inline-flex font-bold items-center justify-center p-3 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group ${
                  active === "ArchiveCarts"
                    ? "text-white border-b-2 border-yellow-500"
                    : ""
                }`}
                onClick={() => setActive("ArchiveCarts")}
              >
                FAVOURITES
              </button>
            </li>
          </ul>
        </div>
      </div>
      <Tabs />
      <Table />
    </div>
  );
};

export default Display1;

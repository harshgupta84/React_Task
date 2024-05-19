import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
const Tabs = () => {
  const [active, setActive] = useState("ActiveCarts");
  const tabStyle = {
    fontFamily: "Helvetica Neue, sans-serif",
  };

  return (
    <div>
      <div className="border-b border-gray-200 dark:border-gray-700 flex flex-row ">
        <div>
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li className="me-2">
              <button
                style={tabStyle}
                className={`inline-flex font-bold items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group ${
                  active === "ActiveCarts"
                    ? "text-blue-600  border-b-2  dark:border-blue-500 border-blue-600"
                    : ""
                }`}
                onClick={() => setActive("ActiveCarts")}
              >
                Active Carts
              </button>
            </li>
            <li className="me-2">
              <button
                style={tabStyle}
                className={`inline-flex font-bold items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group ${
                  active === "ArchiveCarts"
                    ? "text-blue-600 border-b-2 dark:border-blue-500 border-blue-600"
                    : ""
                }`}
                onClick={() => setActive("ArchiveCarts")}
              >
                Archive Carts
              </button>
            </li>
          </ul>
        </div>
        <div className=" ">
          <div class="relative w-full flex flex-row p-1">
            <input
              type="text"
              id="simple-search"
              class="bg-gray-50  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
            <button
              type="submit"
              class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;

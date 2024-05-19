import React from "react";
import data from "../data/user.json";
import { FaLongArrowAltDown, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Table = () => {
  return (
    <div className="flex flex-col overflow-x-auto">
      <div className="shadow-md sm:rounded-lg m-9">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr className="text-bold">
              <th scope="col" className="px-6 py-3 flex gap-1">
                PRODUCT INFORMATION
                <FaLongArrowAltDown />
              </th>
              <th scope="col" className="px-6 py-3">
                CART NAME
              </th>
              <th scope="col" className="px-6 py-3">
                SHIPPING POINT
              </th>
              <th scope="col" className="px-6 py-3">
                CREATED BY
              </th>
              <th scope="col" className="px-6 py-3">
                EXPIRY
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-6 py-4 font-medium">
                  {item.productInformation}
                </td>
                <td className="px-6 py-4">{item.cartName}</td>
                <td className="px-6 py-4">{item.shippingPoint}</td>
                <td className="px-6 py-4">{item.createdBy}</td>
                <td className="px-6 py-4">{item.expiry}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/display2">
        <div className="absolute mt-96 right-0 bottom-0 mb-4 mr-4 rounded-full max-w-12 bg-red-800 p-2">
          <FaPlus className="h-8 w-8 text-white" />
        </div>
      </Link>
    </div>
  );
};

export default Table;

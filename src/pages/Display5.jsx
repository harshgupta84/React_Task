import React from "react";
import { useState } from "react";
import { FaCopy, FaEdit, FaHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiDiscount1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import TabInfo from "../components/TabInfo";
import { useSelector } from "react-redux";
const Display5 = () => {
  const [counter, setCounter] = useState(1);
  const {
    wfeet,
    winch,
    hfeet,
    hinch,
    windcode,
    category,
    series,
    doorType,
    assembly,
    color,
    design,
  } = useSelector((state) => state.cart);

  // Function to increment the counter
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  // Function to decrement the counter
  const decrementCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <div>
      <TabInfo
        heading="Configure a new door"
        step="Cart #123456723"
        link="display4"
      />
      <div className="mx-80 mt-5 ">
        <div className=" h-70 border shadow-lg m-2 flex flex-col p-4">
          <div className="flex">
            <h1 className="font-bold text-xl">
              {wfeet}' {winch}.0'' X {hfeet}' {hinch}.0'' {doorType}{"  "}  {design}{" "}
              {windcode} {assembly} INTELLICORE OBSCURE, 5TH GENERATION{" "}
              {color}
              WALDER DOOR
            </h1>
          </div>
          <div className="flex gap-4">
            <span className=" text-slate-400 text-md">
              Job Name: Front door with glass{" "}
            </span>
            <button className=" text-amber-900 font-medium">Change</button>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <span className="text-md text-slate-400">
                Product #CWD • Garage Door{" "}
              </span>
            </div>
            <div className="flex">
              <span className="text-md text-slate-400">
                Availability:{" "}
                <span className="text-green-400 font-bold">IN STOCK </span>
                <span className="text-black">(Available for Pickup)</span>
              </span>
            </div>
          </div>

          <div class="flex flex-row">
            <div className="flex-1 flex justify-center items-center">
              <div className="flex items-center rounded-md gap-1 ">
                <button
                  className="border h-8 w-8 flex items-center justify-center bg-slate-300 text-xl font-bold  border-black"
                  onClick={decrementCounter}
                >
                  -
                </button>
                <span className="mx-4 text-xl border border-black h-9 w-12">
                  {counter}
                </span>
                <button
                  className="border h-8 w-8 flex items-center justify-center bg-slate-300 text-xl font-bold border-black"
                  onClick={incrementCounter}
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col items-center p-4 ">
                <span className="text-lg text-green-600  mb-2">
                  Standard Multiplier: .432
                </span>
                <span className="text-lg  text-green-600 mb-4">
                  Secondary Multipliers Applied
                </span>
                <button className="flex items-center px-4 py-2 font-bold hover:bg-gray-100 transition-colors duration-200">
                  <CiDiscount1 className="mr-2 text-2xl" /> Apply MPQ
                </button>
              </div>
            </div>
            <div class="flex-1">
              <div class="flex flex-col items-center">
                <div class="flex items-center">
                  <h2 class="mr-2">Price</h2>
                  <label className="text-2xl font-bold">$ 4500</label>
                </div>
                <label class="mt-2">Unit Price: $4800.00</label>
                <button class="mt-2 text-md text-amber-900">
                  View Price Details
                </button>
              </div>
            </div>
          </div>
          <div className="flex text-amber-900 text-xl flex-row h-11 ">
            <div className="flex-1 border flex items-center justify-center">
              <FaHeart className="mr-2" />
              <button>Favourites</button>
            </div>
            <div className="flex-1 border flex items-center justify-center">
              <FaEdit className="mr-2" />
              <Link to="/display2"><button>Edit</button></Link>
            </div>
            <div className="flex-1 border flex items-center justify-center">
              <FaCopy className="mr-2" />
              <button>Copy</button>
            </div>
            <div className="flex-1 border flex items-center justify-center">
              <RiDeleteBin6Line className="mr-2" />
              <button>Delete</button>
            </div>
          </div>
        </div>
        <div className="flex flex-row h-80 m-2">
          <div className="flex-1 flex flex-col">
            <div className="border shadow-lg flex-1 m-2 p-3">
              <div className="flex flex-col">
                <div className="text-md mb-1">
                  <div className="flex">
                    <span className="text-md text-black ml-8">
                      Change Delivery Date
                    </span>
                  </div>
                </div>
                <div className="flex justify-center mb-1">
                  <input
                    placeholder="Example: 31-DEC-1999"
                    type="date"
                    className="bg-gray-50 w-5/6 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                  />
                </div>
                <div className="text-md mb-1">
                  <div className="flex">
                    <span className="text-md text-black ml-8">
                      Standard Delivery: Tue May 28 - 2019
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border shadow-lg flex-1 m-2 p-3">
              <div className="flex flex-col">
                <div className="text-md mb-1">
                  <div className="flex">
                    <span className="text-md text-black ml-8">
                      Purchase Order Number
                    </span>
                  </div>
                </div>
                <div className="flex justify-center mb-1">
                  <input
                    placeholder="Enter PO Number"
                    type="text"
                    className="bg-gray-50 w-5/6 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                  />
                </div>
                <div className="text-md mb-1">
                  <div className="flex">
                    <span className="text-md text-black ml-8">
                      Standard Delivery: Tue May 28 - 2019
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 shadow-lg flex flex-col border  p-3">
            <div className=" h-80 w-full flex flex-col items-center ">
              <div className="mb-4 flex">
                <span className="text-xl font-semibold">Bill Summary</span>
              </div>
              <div className="flex justify-between w-full px-7 mb-2">
                <span>Sub Total</span>
                <span>$4500</span>
              </div>
              <div className="flex justify-between w-full px-7 mb-2">
                <span>Energy Surcharge</span>
                <span>$70</span>
              </div>
              <div className="flex justify-between w-full px-7 mb-2">
                <span>Sales Tax</span>
                <span>$4500</span>
              </div>
              <div className="flex justify-between w-full px-7 mb-2 font-bold">
                <span className="">Total</span>
                <span>$4500</span>
              </div>
            </div>

            <div className="w-full border-t my-2"></div>

            <div className="flex mb-2">
              <input
                type="checkbox"
                id="applyTax"
                className="mr-2 text-amber-900"
              ></input>
              <label htmlFor="applyTax">Apply Tax</label>
            </div>

            <div className="text-center text-sm text-gray-400 px-4">
              (The 1% iStore discount is calculated into the total price for all
              doors and door parts. Please refer to the quote or order
              acknowledgment for details.)
            </div>
          </div>
        </div>
        <div className="h-40 border mb-4 flex p-4 rounded-lg shadow-lg">
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="mb-2 ">
              <div className="flex -ml-52 mt-2">
                <span className="text-md font-semibold">Billing To</span>
              </div>
            </div>
            <div className="flex justify-between w-3/4 mb-2">
              <span className="text-lg font-semibold">Bement Javed</span>
              <button className="text-blue-500 underline">Change</button>
            </div>
            <div className="mb-2 ">
              <div className="flex flex-col -ml-40">
                <div className="flex">
                  <span>144 Curt Shores, 50, Madison</span>
                </div>
                <div className="flex">
                  <span>Avenue Hixson - 42040</span>
                </div>
                <div className="flex">
                  <span>Contact: (123) 456 7890</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-l mx-4"></div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="mb-2 ">
              <div className="flex -ml-52 mt-2">
                <span className="text-md font-semibold">Billing To</span>
              </div>
            </div>
            <div className="flex justify-between w-3/4 mb-2">
              <span className="text-lg font-semibold">Bement Javed</span>
              <button className="text-blue-500 underline">Change</button>
            </div>
            <div className="mb-2 ">
              <div className="flex flex-col -ml-40">
                <div className="flex">
                  <span>144 Curt Shores, 50, Madison</span>
                </div>
                <div className="flex">
                  <span>Avenue Hixson - 42040</span>
                </div>
                <div className="flex">
                  <span>Contact: (123) 456 7890</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 h-30 border mb-2 flex justify-between items-center p-4 rounded-lg shadow-lg">
          <div className="flex flex-col">
            <span className="text-sm font-medium">1 Item</span>
            <span className="text-lg font-medium">$4500</span>
          </div>
          <div className="flex mt-1 space-x-4">
            <Link to="/display2">
              <button
                type="button"
                className="flex items-center py-2.5 px-5 text-sm font-medium text-amber-950 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100"
              >
                <CiSquarePlus className="text-xl mr-2" />
                ADD MORE
              </button>
            </Link>
            <Link to="/display5">
              <button
                type="button"
                className="text-sm font-medium text-white bg-amber-950 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-2.5"
              >
                PLACE ORDER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display5;

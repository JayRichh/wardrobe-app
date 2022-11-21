import React from "react";
import { Link } from "react-router-dom";
import Button from "./elements/Button";
import { useState } from "react";
import Shirt from "../assets/icons/shirt-svgrepo-com.svg";
import Jacket from "../assets/icons/jacket-svgrepo-com.svg";
import Pants from "../assets/icons/pants-svgrepo-com.svg";
import Shoes from "../assets/icons/shoes-svgrepo-com.svg";
import Shorts from "../assets/icons/shorts-svgrepo-com.svg";
import Skirt from "../assets/icons/skirt-svgrepo-com.svg";
import Underwear from "../assets/icons/underwear-svgrepo-com.svg";
import Formal from "../assets/icons/formal-svgrepo-com.svg";
import Casual from "../assets/icons/casual-svgrepo-com.svg";
import Beachwear from "../assets/icons/beachwear-svgrepo-com.svg";
import Business from "../assets/icons/business-svgrepo-com.svg";
import Sportswear from "../assets/icons/sportswear-svgrepo-com.svg";

const WardrobeNav = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [expandFilter, setExpandFilter] = useState("none");
  const [expandType, setExpandType] = useState("none");
  const [expandOccasion, setExpandOccasion] = useState("none");
  const [expandColor, setExpandColor] = useState("none");
  const [expandSize, setExpandSize] = useState("none");

  const [typeFilters, setTypeFilters] = useState([]);
  const [occasionFilters, setOccasionFilters] = useState([]);
  const [colorFilters, setColorFilters] = useState([]);

  return (
    <div className="flex flex-col w-80 min-h-screen absolute z-40 bg-white">
      {showSidebar && (
        <div className="flex flex-col sm:flex-row sm:justify-around">
          <div className="w-72 min-h-screen">
            <nav className="mt-7 pl-2 pr-1">
              <div>
                <button
                  className="text-gray-800 ml-2 w-full border-b-2 pb-2 border-gray-200 mb-2 text-md font-bold text-lg text-left"
                  onClick={() => {
                    setExpandType("visible");
                    if (expandType === "visible") {
                      setExpandType("none");
                    }
                  }}
                >
                  <span className="text-gray-300">▼</span> Filter by Type
                </button>
                {expandType === "visible" && (
                  // render effect for the drop down items from top
                  <div>
                    <a
                      className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                      href="#!"
                    >
                      <span className="text-left">
                        <img src={Shirt} alt="shirt" className="w-8 h-6" />
                      </span>
                      <span className="mx-4 text-md font-semibold">Shirt</span>
                    </a>
                    <a
                      className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                      href="#!"
                    >
                      <span className="text-left">
                        <img src={Jacket} alt="jacket" className="w-8 h-6" />
                      </span>
                      <span className="mx-4 text-md font-semibold">Jacket</span>
                    </a>
                    <a
                      className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                      href="#!"
                    >
                      <span className="text-left">
                        <img src={Pants} alt="pants" className="w-8 h-6" />
                      </span>
                      <span className="mx-4 text-md font-semibold">Pants</span>
                    </a>
                    <a
                      className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                      href="#!"
                    >
                      <span className="text-left">
                        <img src={Shoes} alt="Shoes" className="w-8 h-6" />
                      </span>
                      <span className="mx-4 text-md font-semibold">Shoes</span>
                    </a>
                    <a
                      className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                      href="#!"
                    >
                      <span className="text-left">
                        <img src={Shorts} alt="Shorts" className="w-8 h-6" />
                      </span>
                      <span className="mx-4 text-md font-semibold">Shorts</span>
                    </a>
                    <a
                      className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                      href="#!"
                    >
                      <span className="text-left">
                        <img src={Skirt} alt="Skirt" className="w-8 h-6" />
                      </span>
                      <span className="mx-4 text-md font-semibold">Skirt</span>
                    </a>
                    <a
                      className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                      href="#!"
                    >
                      <span className="text-left">
                        <img
                          src={Underwear}
                          alt="Underwear"
                          className="w-8 h-6"
                        />
                      </span>
                      <span className="mx-4 text-md font-semibold">
                        Underwear
                      </span>
                    </a>
                  </div>
                )}
              </div>
              <div>
                <button
                  className="text-gray-800 ml-2 w-full border-b-2 pb-2 border-gray-200 mb-2 text-md font-bold text-lg text-left pt-4"
                  onClick={() => {
                    setExpandOccasion("visible");
                    if (expandOccasion === "visible") {
                      setExpandOccasion("none");
                    }
                  }}
                >
                  <span className="text-gray-300">▼</span> Filter by Occasion
                </button>
                {expandOccasion === "visible" && (
                  <>
                    <a
                      className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                      href="#!"
                    >
                      <img src={Formal} alt="Formal" className="w-8 h-6" />
                      <span className="mx-4 text-md font-semibold">Formal</span>
                    </a>
                    <a
                      className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                      href="#!"
                    >
                      <img src={Casual} alt="Casual" className="w-8 h-6" />
                      <span className="mx-4 text-md font-semibold">Casual</span>
                    </a>
                    <a
                      className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                      href="#!"
                    >
                      <img
                        src={Beachwear}
                        alt="Beachwear"
                        className="w-8 h-6"
                      />
                      <span className="mx-4 text-md font-semibold">
                        Beachwear
                      </span>
                    </a>
                    <a
                      className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                      href="#!"
                    >
                      <img src={Business} alt="Business" className="w-8 h-6" />
                      <span className="mx-4 text-md font-semibold">
                        Business
                      </span>
                    </a>
                    <a
                      className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                      href="#!"
                    >
                      <img
                        src={Sportswear}
                        alt="Sportswear"
                        className="w-8 h-6"
                      />
                      <span className="mx-4 text-md font-semibold">
                        Sportswear
                      </span>
                    </a>
                  </>
                )}
              </div>
              <div>
                <button
                  className="text-gray-800 ml-2 w-full border-b-2 pb-2 border-gray-200 mb-2 text-md font-bold text-lg text-left pt-4"
                  onClick={() => {
                    setExpandColor("visible");
                    if (expandColor === "visible") {
                      setExpandColor("none");
                    }
                  }}
                >
                  <span className="text-gray-300">▼</span> Filter by Color
                </button>
                {expandColor === "visible" && (
                  <>
                    <a
                      className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                      href="#!"
                    >
                      <div className="mx-1 w-6 h-6 bg-black rounded-full"></div>
                      <span className="mx-4 text-md font-semibold">Black</span>
                    </a>
                    <a
                      className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                      href="#!"
                    >
                      <div className="mx-1 w-6 h-6 bg-white border border-black rounded-full"></div>
                      <span className="mx-4 text-md font-semibold">White</span>
                    </a>
                    <a
                      className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                      href="#!"
                    >
                      <div className="mx-1 w-6 h-6 bg-red-500 rounded-full"></div>
                      <span className="mx-4 text-md font-semibold">Red</span>
                    </a>
                    <a
                      className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                      href="#!"
                    >
                      <div className="mx-1 w-6 h-6 bg-blue-500 rounded-full"></div>
                      <span className="mx-4 text-md font-semibold">Blue</span>
                    </a>
                    <a
                      className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                      href="#!"
                    >
                      <div className="mx-1 w-6 h-6 bg-green-500 rounded-full"></div>
                      <span className="mx-4 text-md font-semibold">Green</span>
                    </a>
                    <a
                      className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                      href="#!"
                    >
                      <div className="mx-1 w-6 h-6 bg-yellow-500 rounded-full"></div>
                      <span className="mx-4 text-md font-semibold">Yellow</span>
                    </a>
                    <a
                      className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                      href="#!"
                    >
                      <div className="mx-1 w-6 h-6 bg-orange-500 rounded-full"></div>
                      <span className="mx-4 text-md font-semibold">Orange</span>
                    </a>
                    <a
                      className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                      href="#!"
                    >
                      <div className="mx-1 w-6 h-6 bg-purple-500 rounded-full"></div>
                      <span className="mx-4 text-md font-semibold">Purple</span>
                    </a>
                    <a
                      className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                      href="#!"
                    >
                      <div className="mx-1 w-6 h-6 bg-gray-500 rounded-full"></div>
                      <span className="mx-4 text-md font-semibold">Gray</span>
                    </a>
                    <a
                      className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                      href="#!"
                    >
                      <div className="mx-1 w-6 h-6 bg-amber-900 rounded-full"></div>
                      <span className="mx-4 text-md font-semibold">Brown</span>
                    </a>
                  </>
                )}
              </div>
              <div>
                <button
                  className="text-gray-800 ml-2 w-full border-b-2 pb-2 border-gray-200 mb-2 text-md font-bold text-lg text-left pt-4"
                  onClick={() => {
                    setExpandSize("visible");
                    if (expandSize === "visible") {
                      setExpandSize("none");
                    }
                  }}
                >
                  <span className="text-gray-300">▼</span> Filter by Size
                </button>
                {expandSize === "visible" && (
                  <>
                    <a
                      className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                      href="#!"
                    >
                      <div className="mx-1 w-6 h-6  rounded-full"></div>
                      <span className="mx-4 text-md font-semibold">XXS</span>
                    </a>
                    <a
                      className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                      href="#!"
                    >
                      <div className="mx-1 w-6 h-6  rounded-full"></div>
                      <span className="mx-4 text-md font-semibold">XS</span>
                    </a>
                    <a
                      className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                      href="#!"
                    >
                      <div className="mx-1 w-6 h-6  rounded-full"></div>
                      <span className="mx-4 text-md font-semibold">S</span>
                    </a>
                    <a
                      className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                      href="#!"
                    >
                      <div className="mx-1 w-6 h-6  rounded-full"></div>
                      <span className="mx-4 text-md font-semibold">M</span>
                    </a>
                    <a
                      className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                      href="#!"
                    >
                      <div className="mx-1 w-6 h-6  rounded-full"></div>
                      <span className="mx-4 text-md font-semibold">L</span>
                    </a>
                    <a
                      className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                      href="#!"
                    >
                      <div className="mx-1 w-6 h-6  rounded-full"></div>
                      <span className="mx-4 text-md font-semibold">XL</span>
                    </a>
                    <a
                      className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                      href="#!"
                    >
                      <div className="mx-1 w-6 h-6  rounded-full"></div>
                      <span className="mx-4 text-md font-semibold">XXL</span>
                    </a>
                  </>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default WardrobeNav;

/* {showSidebar ? (
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="w-72 h-screen">
          <nav className="mt-10 pl-2 pr-1">
            <a
              className="hover:text-gray-800 text-gray-600 bg-gray-50 dark:bg-gray-600 dark:text-gray-400hover:bg-gray-100 flex items-center px-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start"
              href="#!"
            >
              <svg
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 2048 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#406343"
                  d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"
                ></path>
              </svg>
              <span className="mx-4 text-2xl font- text-">Dashboard</span>
            </a>
            <div>
              <p className="text-gray-800 ml-2 w-full border-b-2 pb-2 border-gray-200 mb-2 text-md font-bold text-lg">
                Filter by Type
              </p>
              <a
                className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                href="#!"
              >
                <span className="text-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-filter"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5.5 5h13a1 1 0 0 1 .5 1.5l-5 5.5l0 7l-4 -3l0 -4l-5 -5.5a1 1 0 0 1 .5 -1.5" />
                  </svg>
                </span>
                <span className="mx-4 text-md font-semibold">
                  Shirt
                </span>
              </a>
              <a
                className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                href="#!"
              >
                <span className="text-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-filter"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5.5 5h13a1 1 0 0 1 .5 1.5l-5 5.5l0 7l-4 -3l0 -4l-5 -5.5a1 1 0 0 1 .5 -1.5" />
                  </svg>
                </span>
                <span className="mx-4 text-md font-semibold">
                  Jacket
                </span>
              </a>
              <a
                className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                href="#!"
              >
                <span className="text-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-filter"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5.5 5h13a1 1 0 0 1 .5 1.5l-5 5.5l0 7l-4 -3l0 -4l-5 -5.5a1 1 0 0 1 .5 -1.5" />
                  </svg>
                </span>
                <span className="mx-4 text-md font-semibold">
                  Pants
                </span>
              </a>
              <a
                className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                href="#!"
              >
                <span className="text-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-filter"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5.5 5h13a1 1 0 0 1 .5 1.5l-5 5.5l0 7l-4 -3l0 -4l-5 -5.5a1 1 0 0 1 .5 -1.5" />
                  </svg>
                </span>
                <span className="mx-4 text-md font-semibold">
                  Shoes
                </span>
              </a>
              <a
                className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                href="#!"
              >
                <span className="text-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-filter"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5.5 5h13a1 1 0 0 1 .5 1.5l-5 5.5l0 7l-4 -3l0 -4l-5 -5.5a1 1 0 0 1 .5 -1.5" />
                  </svg>
                </span>
                <span className="mx-4 text-md font-semibold">
                  Shorts
                </span>
              </a>
              <a
                className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                href="#!"
              >
                <span className="text-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-filter"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5.5 5h13a1 1 0 0 1 .5 1.5l-5 5.5l0 7l-4 -3l0 -4l-5 -5.5a1 1 0 0 1 .5 -1.5" />
                  </svg>
                </span>
                <span className="mx-4 text-md font-semibold">
                  Skirt
                </span>
              </a>
              <a
                className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                href="#!"
              >
                <span className="text-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-filter"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5.5 5h13a1 1 0 0 1 .5 1.5l-5 5.5l0 7l-4 -3l0 -4l-5 -5.5a1 1 0 0 1 .5 -1.5" />
                  </svg>
                </span>
                <span className="mx-4 text-md font-semibold">
                  Underwear
                </span>
              </a>
              <a
                className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white text-lg dark:hover:bg-gray-600 duration-200 justify-start"
                href="#!"
              >
                <span className="text-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-filter"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5.5 5h13a1 1 0 0 1 .5 1.5l-5 5.5l0 7l-4 -3l0 -4l-5 -5.5a1 1 0 0 1 .5 -1.5" />
                  </svg>
                </span>
                <span className="mx-4 text-md font-semibold">
                  Other
                </span>
              </a>
            </div>
            <div>
              <p className="text-gray-300 ml-2 w-full border-b-2 pb-2 border-gray-100 mb-2 text-md font-semibold">
                COMMUNICATION
              </p>
              <a
                className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start"
                href="#!"
              >
                <span className="text-left">
                  <svg
                    width="25"
                    height="25"
                    fill="currentColor"
                    viewBox="0 0 2048 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#5e72e4"
                      d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
                    ></path>
                  </svg>
                </span>
                <span className="mx-4 text-md font-semibold">Notifications</span>
              </a>
              <a
                className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start"
                href="#!"
              >
                <span className="text-left">
                  <svg
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="m-auto"
                    viewBox="0 0 2048 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#5e72e4"
                      d="M685 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zm422 0q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zm-812 184q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zm1060 19v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zm-232-405q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zm477 488v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z"
                    ></path>
                  </svg>
                </span>
                <span className="mx-4 text-md font-semibold">
                  Campagne emailing
                </span>
              </a>
            </div>
            <div>
              <p className="text-gray-300 ml-2 w-full border-b-2 pb-2 border-gray-100 mb-2 text-md font-semibold">
                STATISTIQUES
              </p>
              <a
                className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start"
                href="#!"
              >
                <span className="text-left">
                  <svg
                    width="25"
                    height="25"
                    fill="currentColor"
                    viewBox="0 0 2048 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#5e72e4"
                      d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
                    ></path>
                  </svg>
                </span>
                <span className="mx-4 text-md font-semibold">Nouveau client</span>
              </a>
              <a
                className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center py-1 px-2 my-2 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start"
                href="#!"
              >
                <span className="text-left">
                  <svg
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="m-auto"
                    viewBox="0 0 2048 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#5e72e4"
                      d="M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zm-704 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zm1595 960q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z"
                    ></path>
                  </svg>
                </span>
                <span className="mx-4 text-md font-semibold">Recette</span>
              </a>
            </div>
          </nav>
        </div>
      </div> */

// <div classNameName="">
//   <div classNameName="flex flex-row justify-between bg-creamSecondary rounded-2xl box-border p-3">
//     <div classNameName="flex items-center space-x-4">
//       <div classNameName="relative">
//         <select classNameName="rounded-md border-gray-300 shadow-sm p-3">
//           <option>Filter by Type</option>
//           <option>Shirt</option>
//           <option>Pants</option>
//           <option>Shoes</option>
//           <option>Outerwear</option>
//           <option>Accessories</option>
//         </select>
//       </div>
//       <div classNameName="relative">
//         <select classNameName="rounded-md border-gray-300 shadow-sm p-3">
//           <option>Filter by Occasion</option>
//           <option>Casual</option>
//           <option>Formal</option>
//           <option>Sporty</option>
//           <option>Professional</option>
//           <option>Other</option>
//         </select>
//       </div>
//       <div classNameName="relative">
//         <select classNameName="rounded-md border-gray-300 shadow-sm p-3">
//           <option>Filter by Color</option>
//           <option>Red</option>
//           <option>Blue</option>
//           <option>Green</option>
//           <option>Black</option>
//           <option>White</option>
//           <option>Other</option>
//         </select>
//       </div>
//       <div classNameName="relative">
//         <select classNameName="rounded-md border-gray-300 shadow-sm p-3">
//           <option>Filter by Size</option>
//           <option>XS</option>
//           <option>S</option>
//           <option>M</option>
//           <option>L</option>
//           <option>XL</option>
//           <option>XXL</option>
//         </select>
//       </div>
//       <div classNameName="relative">
//         <select classNameName="rounded-md border-gray-300 shadow-sm p-3">
//           <option>Sort by</option>
//           <option>Most Recent</option>
//           <option>Oldest</option>
//           <option>Most Popular</option>
//           <option>Least Popular</option>
//         </select>
//       </div>
//     </div>
//     <div classNameName="flex items-center space-x-4"></div>
//     <div classNameName="flex justify-end">
//       <div classNameName="btn-container">
//         <Link to="/closet-form">
//           <Button variant="secondary" size="large">Add Clothing</Button>
//         </Link>
//       </div>
//     </div>
//   </div>
// </div>

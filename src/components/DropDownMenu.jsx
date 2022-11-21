import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./elements/Button";
import SettingsIcon from "../assets/icons/settings-svgrepo-com.svg";
import { clearStyle } from "../stores/style/styleSlice";
import { useDispatch } from "react-redux";

const DropDownMenu = ({ handleNavSelected, styleItemCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Items");
  const dispatch = useDispatch();

  const toggle = () => setIsOpen(!isOpen);

  // const buttonStyle = {};
  // const buttonStyleSelected = {};

  return (
    <nav className="relative box-border flex flex-wrap justify-between m-4 rounded ml-80 w-full pr-60 bg-white min-w-fit">
      <button
        className="inline-flex px-3 py-2 text-sm font-medium border-creamSecondary rounded-md shadow-sm lg:hidden navbar-toggler hover:bg-gray-50 sticky"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={toggle}
      >
        <svg
          className="flex-shrink-0 w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className="items-center justify-start w-full flex-nowrap   collapse lg:navbar-collapse lg:flex-row lg:flex-nowrap lg:justify-start mr-20"
        id="navbarNav"
      >
        <nav className="flex flex-col justify-between mt-4 space-x-0 space-y-2 lg:mt-0 lg:space-x-1 lg:space-y-0 lg:flex-row w-full">
          <div className="flex flex-col justify-between mt-4 space-x-0 space-y-2 lg:mt-0 lg:space-x-2 lg:space-y-0 lg:flex-row">
            <div className="relative text-left inline-flex gap-2 bg-white w-full">
              <input
                type="text"
                name="search"
                id="search"
                placeholder={selected}
                className="w-full h-12 pl-12 pr-4 text-lg text-white placeholder-gray-400 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              />
              <button
                type="button"
                // draw search icon on the left side of the input field
                className="absolute inset-y-0 left-0 flex items-center justify-center w-8 m-2 h-8 text-gray-400 bg-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              >
                <svg
                  className="w-8 h-8 p-1 border-2 border-gray-300 rounded-full"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    className="heroicon-ui "
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <div className="relative inline-block text-left">
                <button
                  type="button"
                  // position button on the right side of the input field
                  className="absolute inset-y-0 right-2 flex items-center justify-center w-8 m-2 h-8 text-gray-400 bg-white rounded-r-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 opacity-30 hover:opacity-100 hover:bg-gray-100"
                  id="options-menu"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={toggle}
                >
                  <span className="sr-only">Open options</span>
                  <img
                    src={SettingsIcon}
                    alt="settings icon"
                    className="w-fill h-8"
                  />
                </button>
              </div>
            </div>
            <div className="relative text-left inline-flex gap-2 bg-white  w-full lg:w-[50em]">
              <button
                // if button is selected change the color of the underline
                className={
                  selected === "Items"
                    ? "relative px-5 py-2.5 text font-bold text-white bg-greenLight  hover:bg-greenLight w-1/3 rounded-xl underline underline-offset-4 decoration-4 decoration-marigold"
                    : "relative px-5 py-2.5 text font-bold text-white bg-gray-500 bg-opacity-40  hover:bg-greenLight w-1/3 rounded-xl"
                }
                aria-current="page"
                href="#"
                onClick={(e) => {
                  handleNavSelected(e);
                  setSelected("Items");
                }}
              >
                Items
              </button>
              <div className="relative w-1/3 h-full">
                <button
                  className={
                    selected === "Styles"
                      ? "relative px-5 py-3 text font-bold text-white bg-greenLight  hover:bg-greenLight w-full rounded-xl underline underline-offset-4 decoration-4 decoration-marigold"
                      : "relative px-5 py-3 text font-bold text-white bg-gray-500 bg-opacity-40  hover:bg-greenLight w-full rounded-xl"
                  }
                  href="#"
                  onClick={(e) => {
                    handleNavSelected(e);
                    setSelected("Styles");
                  }}
                >
                  Styles
                </button>
                {styleItemCount > 0 ? (
                  <div className="rounded-full bg-yellow-400 text-white inline-flex justify-center items-center w-7 text-lg absolute -top-1 -right-1">
                    {styleItemCount}
                  </div>
                ) : null}
              </div>
              <button
                className={
                  selected === "Statistics"
                    ? "relative px-5 py-2.5 text font-bold text-white bg-greenLight  hover:bg-greenLight w-1/3 rounded-xl underline underline-offset-4 decoration-4 decoration-marigold"
                    : "relative px-5 py-2.5 text font-bold text-white bg-gray-500 bg-opacity-40  hover:bg-greenLight w-1/3 rounded-xl"
                }
                href="#"
                onClick={(e) => {
                  handleNavSelected(e);
                  setSelected("Statistics");
                }}
              >
                Statistics
              </button>
            </div>
            {styleItemCount > 0 ? (
              <button
                type="button"
                className="relative px-5 py-2.5 text font-bold text-white bg-greenLight  hover:bg-greenLight whitespace-nowrap rounded-xl"
                onClick={() => dispatch(clearStyle())}
              >
                Clear Selected Styles
              </button>
            ) : null}
          </div>
          <div className="relative inline-block text-left min-w-fit lg:pr-4 px-2">
            <Link to="/closet-form">
              <Button
                className="inline-flex px-5 py-2.5 max-w-full min-w-40 text font-medium text-greenPrimary bg-creamSecondary rounded hover:bg-greenLight"
                size="large"
              >
                Add to Closet
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </nav>
  );
};
export default DropDownMenu;

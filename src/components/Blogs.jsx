import React from "react";
import CleanGreen from "../assets/images/clean-green.jpg";

const Blogs = () => {
  return (
    <div className="blogs w-full px-24 mx-auto relative flex items-center-justify-between flex-wrap py-16 pt-32 bg-gradient-to-b from-complimentPink to-complimentPink">
      <div className="blogs-background-image w-full h-full absolute top-0 left-0">
        <img
          src={CleanGreen}
          alt="clean green"
          className="blogs-background-image w-full h-full object-cover"
        />
      </div>
      <div className="blogs-title w-full md:w-1/4 py-10 flex items-center z-10">
        <div>
          <h2 className="mb-6 text-4xl font-bold text-greenDark">
            Shop with us for a Fairer Future
          </h2>
          <p className="font-semibold text-lg text-gray-700 py-2">
            Buy less, buy better. Shop our curated collection of eco-friendly
            products sourced from local artisans.
          </p>
        </div>
      </div>
      <div className="blogs-grid w-3/4 py-3 z-10">
        <div className="blogs-grid-item w-full p-3">
          <div className="blogs-grid-item-image w-full h-96 bg-gray-200">
            <img
              src={require("../assets/images/posing.jpg")}
              alt="clean green"
              className="blogs-grid-item-image w-full h-full object-cover"
            />
          </div>
          <div className="blogs-grid-item-title w-full py-3">
            <h2 className="text-2xl font-bold text-greenDark">
              Shop with us for a Fairer Future
            </h2>
          </div>
          <div className="blogs-grid-item-content w-full py-3">
            <p className="font-semibold text-lg text-gray-700 py-2">
              Buy less, buy better. Shop our curated collection of eco-friendly
              products sourced from local artisans.
            </p>
          </div>
        </div>
        <div className="blogs-grid-item w-full p-3">
          <div className="blogs-grid-item-image w-full h-96 bg-gray-200">
            <img
              src={require("../assets/images/creating-clothes.jpg")}
              alt="clean green"
              className="blogs-grid-item-image w-full h-full object-cover"
            />
          </div>
          <div className="blogs-grid-item-title w-full py-3">
            <h2 className="text-2xl font-bold text-greenDark">
              Shop with us for a Fairer Future
            </h2>
          </div>
          <div className="blogs-grid-item-content w-full py-3">
            <p className="font-semibold text-lg text-gray-700 py-2">
              Buy less, buy better. Shop our curated collection of eco-friendly
              products sourced from local artisans.
            </p>
          </div>
        </div>
        <div className="blogs-grid-item w-full p-3">
          <div className="blogs-grid-item-image w-full h-96 bg-gray-200">
          <img
              src={require("../assets/images/banner-img.jpg")}
              alt="clean green"
              className="blogs-grid-item-image w-full h-full object-cover"
            />
          </div>
          <div className="blogs-grid-item-title w-full py-3">
            <h2 className="text-2xl font-bold text-greenDark">
              Shop with us for a Fairer Future
            </h2>
          </div>
          <div className="blogs-grid-item-content w-full py-3">
            <p className="font-semibold text-lg text-gray-700 py-2">
              Buy less, buy better. Shop our curated collection of eco-friendly
              products sourced from local artisans.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

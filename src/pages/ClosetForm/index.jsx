import React from "react";
import { useEffect, useState } from "react";
import NewProductForm from "../../components/NewProductForm";

const ClosetForm = ({ user }) => {

  // useEffect(() => {
  //   const userId = localStorage.getItem("userId");
  //   setUserId(userId);
  //   console.log(userId);
  // }, []);

  return (
    <div className="bg-white h-full">
      <div className="container mx-auto px-6 py-8">
        <h3 className="text-gray-700 text-2xl font-medium">Add Clothing</h3>
        <span className="mt-3 text-sm text-gray-500">
          Add a new clothing item to your wardrobe
        </span>
        <div className="mt-8">
          <NewProductForm user={user} />
        </div>
      </div>
    </div>
  );
};

export default ClosetForm;

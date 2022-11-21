import React from "react";
import { useEffect, useState } from "react";

let item = {
  name: null,
  userID: null,
  description: null,
  type: null,
  occasion: null,
  color: null,
  size: null,
  pricePaid: null,
  RRP: null,
  date: null,
  wearCount: null,
  image: null,
};

const NewProductForm = ({ user }) => {
  const currentUserID = user?.uid;
  // handle user input save to node server
  const [form, setForm] = useState(item);
  const [images, setImages] = useState([]);
  const [imageToRemove, setImageToRemove] = useState(null);

  const cloudName = "dingd4vd1";
  const uploadPreset = "md5ab5jw";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  function handleOpenWidget() {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          setImages((prev) => {
            return {
              ...prev,
              url: result.info.secure_url,
              public_id: result.info.public_id,
            };
          });
          console.log(images);
          setImages([...images, result.info.secure_url]);
          setForm({ ...form, image: result.info.secure_url });
        }
      }
    );
    widget.open();
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setForm({ ...form, userID: currentUserID });
    console.log(form);

    fetch("http://localhost:8080/api/wardrobe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("Successfully added item to wardrobe");
        } else {
          console.log(response.json());
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clearForm = () => {
    setForm(item);
    document.getElementById("wardrobe-form").reset();
  };

  return (
    <div className="flex flex-wrap -mx-3 mb-6 justify-center">
      <form id="wardrobe-form" className="w-full max-w-lg" onSubmit={handleSubmit}>
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-product-name"
        >
          Item Name
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-product-name"
          type="text"
          placeholder="Product Name"
          name="name"
          onChange={handleChange}
        />
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-product-name"
        >
          Description
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-product-description"
          type="text"
          placeholder="Product Description"
          name="description"
          onChange={handleChange}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2 md-4">
          <div className="relative">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-product-type"
            >
              Type
            </label>
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-product-type"
              name="type"
              onChange={handleChange}
            >
              <option>Select Option</option>
              <option>Shirt</option>
              <option>Jacket</option>
              <option>Pants</option>
              <option>Shoes</option>
              <option>Shorts</option>
              <option>Skirt</option>
              <option>Underwear</option>
              <option>Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 top-6 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
              </svg>
            </div>
          </div>
          <div className="relative">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-product-occasion"
            >
              Occasion
            </label>
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-product-occasion"
              name="occasion"
              onChange={handleChange}
            >
              <option>Select Option</option>
              <option>Formal</option>
              <option>Casual</option>
              <option>Beachwear</option>
              <option>Business</option>
              <option>Sportswear</option>
              <option>Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 top-6 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
              </svg>
            </div>
          </div>
          <div className="relative">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-product-color"
            >
              Color
            </label>
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-product-occasion"
              name="color"
              onChange={handleChange}
            >
              <option>Select Option</option>
              <option>Black</option>
              <option>White</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Green</option>
              <option>Yellow</option>
              <option>Orange</option>
              <option>Purple</option>
              <option>Grey</option>
              <option>Brown</option>
              <option>Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 top-6 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
              </svg>
            </div>
          </div>
          <div className="relative">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-product-size"
            >
              Size
            </label>
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-product-occasion"
              name="size"
              onChange={handleChange}
            >
              <option>Select Option</option>
              <option>XXS</option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 top-6 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
              </svg>
            </div>
          </div>
          <div className="relative">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-product-paid-price"
            >
              Price Paid
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="grid-product-price"
              type="number"
              placeholder="Product Price $"
              name="pricePaid"
              onChange={handleChange}
            />
          </div>
          <div className="relative">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-product-retail-price"
            >
              Retail Price
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="grid-product-price"
              type="number"
              placeholder="Retail Price $"
              name="RRP"
              onChange={handleChange}
            />
          </div>
          <div className="relative">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-product-purchase-date"
            >
              Purchase Date
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-product-price"
              type="date"
              placeholder="Purchase Date"
              name="date"
              onChange={handleChange}
            />
          </div>
          <div className="relative">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-product-wear-count"
            >
              Wear Count
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-product-price"
              type="number"
              placeholder="Wear Count"
              name="wearCount"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* <div className="w-full mb-6 md:mb-0 py-4">
              <div className="relative">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-product-image"
                >
                  Product Image
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-product-picture"
                  type="file"
                  placeholder="Product Image"
                  name="image"
                  onChange={handleImage}
                />
              </div>
            </div> */}

        <div className="w-full mb-6 md:mb-0 py-4 flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleOpenWidget()}
          >
            Add Pictures
          </button>
        </div>

        {images && (
          <div className="relative">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-product-image"
            >
              Preview
            </label>

            <div className="flex items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt="product"
                    className="w-64 h-64"
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-evenly w-full mt-5">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            id="submit"
          >
            Add Item
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => clearForm()}
          >
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewProductForm;

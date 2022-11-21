import React from "react";
import { useEffect, useState } from "react";

const WardrobeItem = ({ item, onDeletedItem, onAddStyle, styleItems }) => {
  const [editing, setEditing] = useState(false);
  const [updatedItem, setUpdatedItem] = useState(item);
  const [wearCount, setWearCount] = useState(updatedItem.wearCount);
  const [mouseOver, setMouseOver] = useState(false);
  const [isStyling, setIsStyling] = useState(false);

  const updateItem = (item) => {
    console.log(item);
    fetch(`http://localhost:8080/api/wardrobe/${item._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((res) => res.json());
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // update the item in the database
    updateItem(updatedItem);
    setEditing(false);
  };

  const handleDelete = () => {
    // delete the item from the database
    onDeletedItem(updatedItem._id);
    console.log("deleting item ID: " + updatedItem._id);
  };

  // create card flipping animation on mouse over and mouse out
  useEffect(() => {
    let card = document.getElementById(`wardrobe-item-${updatedItem._id}`);
    if (mouseOver) {
      card.style.transition = "transform 0.15s";
      card.style.transform = "scale(1.05) rotateY(0deg)";
    } else if (!mouseOver && !editing) {
      card.style.transition = "transform 0.15s";
      card.style.transform = "scale(1) rotateY(180deg)";
    }
  }, [mouseOver, updatedItem._id, editing]);

  useEffect(() => {
    if (styleItems) {
      const isStyling = styleItems.find(
        (styleItem) => styleItem._id === item._id
      );
      if (isStyling) {
        setIsStyling(true);
        console.log("is styling", isStyling);
      } else {
        setIsStyling(false, console.log("is styling", isStyling));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [styleItems]);

  useEffect(() => {
    // detect updatedItem changes and update the item in the database
    updateItem(updatedItem);
  }, [updatedItem]);

  return (
    <div
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
      id={`wardrobe-item-${updatedItem._id}`}
      className="relative flex h-96 min-w-full justify-center text-6xl border-2  rounded-xl shadow-lg"
    >
      {editing && (
        <>
          <form
            className="flex flex-col justify-between w-full text-base"
            onSubmit={(e) => handleFormSubmit(e)}
          >
            <div className="flex flex-col">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="border-2 border-gray-300 rounded-md p-2"
                defaultValue={updatedItem.name}
                onChange={(e) => {
                  setUpdatedItem({ ...updatedItem, name: e.target.value });
                }}
              />
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="border-2 border-gray-300 rounded-md p-2"
                defaultValue={updatedItem.description}
                onChange={(e) => {
                  setUpdatedItem({
                    ...updatedItem,
                    description: e.target.value,
                  });
                }}
              />
              <input
                type="text"
                name="type"
                placeholder="Type of clothing"
                className="border-2 border-gray-300 rounded-md p-2"
                defaultValue={updatedItem.type}
                onChange={(e) => {
                  setUpdatedItem({ ...updatedItem, type: e.target.value });
                }}
              />
              <input
                type="text"
                name="occasion"
                placeholder="Occasion"
                className="border-2 border-gray-300 rounded-md p-2"
                defaultValue={updatedItem.occasion}
                onChange={(e) => {
                  setUpdatedItem({ ...updatedItem, occasion: e.target.value });
                }}
              />
              <input
                type="text"
                name="color"
                placeholder="Color"
                className="border-2 border-gray-300 rounded-md p-2"
                defaultValue={updatedItem.color}
                onChange={(e) => {
                  setUpdatedItem({ ...updatedItem, color: e.target.value });
                }}
              />
              <input
                type="text"
                name="size"
                placeholder="Size"
                className="border-2 border-gray-300 rounded-md p-2"
                defaultValue={updatedItem.size}
                onChange={(e) => {
                  setUpdatedItem({ ...updatedItem, size: e.target.value });
                }}
              />
              <input
                type="number"
                name="wearCount"
                placeholder="Wear count"
                className="border-2 border-gray-300 rounded-md p-2"
                defaultValue={updatedItem.wearCount}
                onChange={(e) => {
                  setUpdatedItem({ ...updatedItem, wearCount: e.target.value });
                }}
              />
              <input
                type="number"
                name="pricePaid"
                placeholder="Price paid"
                className="border-2 border-gray-300 rounded-md p-2"
                defaultValue={updatedItem.pricePaid}
                onChange={(e) => {
                  setUpdatedItem({ ...updatedItem, pricePaid: e.target.value });
                }}
              />
              <input
                type="number"
                name="RRP"
                placeholder="Retail price"
                className="border-2 border-gray-300 rounded-md p-2"
                defaultValue={updatedItem.RRP}
                onChange={(e) => {
                  setUpdatedItem({ ...updatedItem, RRP: e.target.value });
                }}
              />
            </div>
            <div className="flex justify-between flex-wrap">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Save
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </>
      )}
      {!editing && mouseOver && (
        <>
          <div className="relative flex flex-col justify-between w-full text-base p-2">
            <div className="flex flex-col">
              <div className="flex justify-between flex-wrap">
                <p className="font-bold">Name:</p>
                <p>{updatedItem.name}</p>
              </div>
              <div className="flex justify-between flex-wrap">
                <p className="font-bold">Description:</p>
                <p>{updatedItem.description}</p>
              </div>
              <div className="flex justify-between flex-wrap">
                <p className="font-bold">Type:</p>
                <p>{updatedItem.type}</p>
              </div>
              <div className="flex justify-between flex-wrap">
                <p className="font-bold">Occasion:</p>
                <p>{updatedItem.occasion}</p>
              </div>
              <div className="flex justify-between flex-wrap">
                <p className="font-bold">Color:</p>
                <p>{updatedItem.color}</p>
              </div>
              <div className="flex justify-between flex-wrap">
                <p className="font-bold">Size:</p>
                <p>{updatedItem.size}</p>
              </div>
              <div className="flex justify-between flex-wrap">
                <p className="font-bold">Wear count:</p>
                <p>{updatedItem.wearCount}</p>
              </div>
              <div className="flex justify-between flex-wrap">
                <p className="font-bold">Price paid:</p>
                <p>{updatedItem.pricePaid}</p>
              </div>
              <div className="flex justify-between flex-wrap">
                <p className="font-bold">Retail price:</p>
                <p>{updatedItem.RRP}</p>
              </div>
            </div>
            <div className="flex justify-between flex-wrap">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  setUpdatedItem({
                    ...updatedItem,
                    wearCount: (parseInt(updatedItem.wearCount) + 1).toString(),
                  });
                }}
              >
                Worn it
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                disabled={isStyling}
                onClick={() => {
                  onAddStyle(updatedItem)
                }}
              >
                Add to style
              </button>
            </div>
            <div className="flex justify-between flex-wrap">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setEditing(true)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={(e) => {
                  handleDelete(e);
                }}
                value={updatedItem._id}
              >
                Delete
              </button>
            </div>
          </div>
        </>
      )}

      <span
        id="background-img"
        className="absolute w-full h-full bg-cover bg-center cursor-disabled rounded-xl -z-10"
        // set bg image style and give it 50% opacity when mouse is over
        style={{
          backgroundImage: `url(${updatedItem.image})`,
          opacity: mouseOver ? "0.5" : "1",
        }}
      >
        {isStyling && (
          <div className="absolute top-0 right-0 w-10 h-10 bg-marigold rounded-full flex justify-center items-center m-4">
            <svg
              // mirror the svg icon
              className="transform scale-x-[-1] w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
        )}
      </span>
    </div>
  );
};

// {loading ? (
//   <div className="flex justify-center items-center ml-60 pr-60 w-full">
//     <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12">
//       {" "}
//     </div>
//   </div>
// ) : (
//   wearcount
// )}

export default WardrobeItem;

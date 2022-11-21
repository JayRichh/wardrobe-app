import React from "react";
import WardrobeItem from "./WardrobeItem";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addStyle } from "../stores/style/styleSlice"
// import { removeFromStyle } from "../stores/style/styleSlice"

const WardrobePreview = ({ userId, styleItems }) => {
  // api call to get all the items in the wardrobe
  const dispatch = useDispatch();
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(true);

  function convertObjectArrToArray(obj) {
    const arr = [];
    for (let key in obj) {
      arr.push(obj[key]);
    }
    return arr;
  }

  function onDeletedItem(e) {
    // remove the item from the database
    fetch(`http://localhost:8080/api/wardrobe/${e}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log("deleted");
      });
    // remove the item from the array
    const newArr = arr.filter((item) => item._id !== e);
    setArr(newArr);
  }

  const getWardrobeItems = () => {
    fetch(`http://localhost:8080/api/wardrobe/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        const arr = convertObjectArrToArray(data);
        setArr(arr[0]);
        setLoading(false);
      });
  };

  const onAddStyle = (item) => {
    dispatch(addStyle(item));
  };

  // const onRemoveStyle = (item) => {
  //   dispatch(removeFromStyle(item));
  // };

  useEffect(() => {
    getWardrobeItems();
    console.log(userId)
  }, []);

  return (
    <div className="flex justify-end min-w-[500px] box-content">
      {loading ? (
        <div className="flex justify-center items-center ml-80 pr-60 w-full">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12 "></div>
        </div>
      ) : (
        <div className=" mx-auto bg-gray-100 rounded-3xl ml-80 px-5 py-5 w-full">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {arr.map((item) => (
              <WardrobeItem
                key={item._id}
                item={item}
                onDeletedItem={onDeletedItem}
                onAddStyle={onAddStyle}
                styleItems={styleItems}
                // onRemoveStyle={onRemoveStyle}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WardrobePreview;

import React from "react";
import StyleItem from "./StyleItem";
import { useEffect, useState } from "react";
import Button from "./elements/Button";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { removeFromStyle } from "../stores/style/styleSlice";
import { useDispatch } from "react-redux";
// TODO: https://react-dnd.github.io/react-dnd/docs/tutorial#adding-drag-and-drop-interaction
// TODO: https://react-dnd.github.io/react-dnd/examples/sortable/simple

// drag and drop
import { useDrop } from "react-dnd";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1000",
  },
};

const StylePreview = ({ userId, styleItems }) => {
  // api call to get the styles that match the users ID and display them
  const [arr, setArr] = useState([]);
  // state for styleItems to be added to the style preview section
  const [styleItemsArr, setStyleItemsArr] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);
  // board state for dropped items
  const [board, setBoard] = useState([]);
  const dispatch = useDispatch();
  let subtitle;

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "StyleItem",
    drop: ({ item }) => {
      onDrop(item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const onDrop = (item) => {
    const droppedItem = item;
    setBoard((board) => [...board, droppedItem]);
    setStyleItemsArr((styleItemsArr) => {
      const newArr = styleItemsArr.filter(
        (item) => item._id !== droppedItem._id
      );
      return newArr;
    });
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#4a5568";
  }

  function closeModal() {
    setIsOpen(false);
  }

  function convertObjectArrToArray(obj) {
    const arr = [];
    for (let key in obj) {
      arr.push(obj[key]);
    }
    return arr;
  }
  // pass the item._id to the function to delete the item from the redux store
  const unselectStyleItem = (item) => {
    dispatch(removeFromStyle(item));
  };

  function onDeletedItem(e) {
    // remove the item from the database
    fetch(`http://localhost:8080/api/wardrobe/styles/${e}`, {
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

  const getStyleItems = () => {
    fetch(`http://localhost:8080/api/wardrobe/styles/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        const arr = convertObjectArrToArray(data);
        setArr(arr[0]);
        setLoading(false);
      });
  };

  useEffect(() => {
    // get the style items from the database on load
    getStyleItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // when the styleItems array changes after an item is added or removed, update the styleItemsArr state to reflect the changes in the redux store
    setStyleItemsArr(styleItems);
    console.log(styleItems, "styleItems in stylePreview");
  }, [styleItems]);

  return (
    <div className="flex justify-end min-w-[500px] box-content">
      {loading ? (
        <div className="flex justify-center items-center ml-80 pr-60 w-full">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12 "></div>
        </div>
      ) : (
        <div className=" mx-auto bg-gray-100 relative rounded-3xl ml-80 px-5 py-5 w-full min-h-fit">
          <header className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-700">Styles</h2>
            <div className="relative inline-block text-left min-w-fit ">
              {/* <Link to="/closet-form"> */}
              <Button
                className="inline-flex px-4 py-2.5 max-w-full min-w-fit text font-medium text-greenPrimary bg-creamSecondary rounded hover:bg-greenLight"
                size="large"
                onClick={openModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </Button>
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={{
                  overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0.65)",
                    zIndex: "1000",
                  },
                  content: {
                    top: "50%",
                    left: "50%",
                    right: "auto",
                    bottom: "auto",
                    marginRight: "-50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: "1000",
                    width: "80%",
                    height: "80%",
                    minWidth: "400px",
                    minHeight: "400px",
                    borderRadius: "30px",
                    padding: "0",
                  },
                }}
                contentLabel="Modal"
              >
                <div className="flex flex-col w-full h-full bg-gray-50 ">
                  <h2
                    ref={(_subtitle) => (subtitle = _subtitle)}
                    className="text-2xl font-bold text-gray-70 p-4 text-left"
                  >
                    Drag and drop items to create a style
                  </h2>
                  <button
                    className="text-gray-700 hover:text-gray-900 p-4 absolute right-4 top-1"
                    onClick={closeModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <div className="flex flex-col items-center w-full h-full ">
                    <div className="flex flex-col items-center w-full h-3/4 bg-red-300">
                      {/* <canvas
                          id="canvas"
                          className="w-full h-full bg-blue-300"
                        >
                          Your browser does not support the HTML5 canvas tag.
                        </canvas> */}
                      <div
                        ref={drop}
                        id="canvas"
                        className="flex flex-col items-center w-full h-full bg-blue-300"
                      >
                        {board?.map((item, index) => (
                          <img
                            key={index}
                            src={item.image}
                            alt="item"
                            className="w-20 h-20 absolute"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="mx-auto rounded-3xl p-4 w-full">
                      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                        {styleItemsArr?.map((item) => (
                          <StyleItem
                            key={item._id}
                            item={item}
                            unselectStyleItem={unselectStyleItem}
                            id={item._id}
                          />
                        ))}
                      </div>
                    </div>

                    {/* buttons below the canvas to save or cancel the style creation */}
                  </div>
                </div>
              </Modal>
              {/* </Link> */}
            </div>
          </header>
          <section className="flex flex-col w-full bg-gray-300 mt-4 rounded-3xl relative">
            <h5 className="text-lg font-bold pl-4 text-gray-700 mt-5">
              Selected Clothing Style List
            </h5>
            {styleItemsArr?.length === 0 ? (
              <div className="flex flex-col items-center w-full h-full bg-00 relative">
                <h5 className="text-lg font-bold text-gray-700 mt-5">
                  No styles previewed yet
                </h5>
                <p className="text-lg font-bold text-gray-700 mt-5">
                  Click the + button to create a new style
                </p>
              </div>
            ) : (
              <div className="mx-auto rounded-3xl p-4 w-full">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                  {styleItemsArr?.map((item) => (
                    <StyleItem
                      key={item._id}
                      item={item}
                      unselectStyleItem={unselectStyleItem}
                      id={item._id}

                      // include react DnD to drag and drop items
                      // ref={drag}
                      // style={{ opacity: isDragging ? 0.5 : 1 }}
                    />
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* <div className="mx-auto bg-gray-100 rounded-3xl ml-80 px-5 py-5 w-full">
            <div className="flex flex-wrap justify-center">

              </div>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {arr?.map((item) => (
              <StyleItem
                key={item.styleID}
                item={item}
                onDeletedItem={onDeletedItem}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StylePreview;

import React from "react";
// import { ItemTypes } from "../data/dragTypes";
import { useDrag } from "react-dnd";

function getStyles(left, top, isDragging) {
  const transform = `translate3d(${left}px, ${top}px, 0)`;
  return {
    position: "absolute",
    transform,
    WebkitTransform: transform,
    // IE fallback: hide the real node using CSS when dragging
    // because IE will ignore our custom "empty image" drag preview.
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 1 : ""
  };
}

const StyleItem = ({ item, unselectStyleItem }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "StyleItem",
    item: { item },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  // const [{ isDragging }, drag] = useDrag({
  //   item: { type: "StyleItem", item },
  //   end: (item, monitor) => {
  //     const dropResult = monitor.getDropResult();
  //     if (item && dropResult) {
  //       alert(`You dropped ${item.item.name} into ${dropResult.name}!`);
  //     }
  //   },
  // });

  return (
    <div className="relative flex h-80 min-w-full justify-center text-6xl border-2  rounded-xl shadow-lg">
      <img
        className="absolute object-cover w-full h-full rounded-xl"
        src={item.image}
        alt={item.name}
        ref={drag}
        style={{ opacity: isDragging ? 0.5 : 1, cursor: "move" }}
      />
      <div className=" absolute h-fit left-0 bg-00 w-fit">
        <h5 className="text-lg font-bold text-greenDark backdrop-blur bg-white/30 rounded-lg py-2 px-4 ml-4 mt-5">
          {item.name}
        </h5>
        <button
          className="text-lg font-bold text-greenDark backdrop-blur bg-white/30 rounded-lg py-2 px-4 ml-4 mt-5"
          onClick={() => {
            unselectStyleItem(item);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default StyleItem;

import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/elements/Button";
import WardrobeNav from "../../components/WardrobeNav";
import DropDownMenu from "../../components/DropDownMenu";
import WardrobePreview from "../../components/WardrobePreview";
import StylePreview from "../../components/StylePreview";
import { styleItems } from "../../stores/style/styleSlice";
import { useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Wardrobe = ({ user, styleItemCount }) => {
  const [userId, setUserId] = useState(null);
  const itemsInStyle = useSelector(styleItems);
  // useSelector and update the state when items are added to the style

  const [styleItemsArr, setStyleItemsArr] = useState([]);
  // nav selected state to replace WardrobePreview component based on selection "My Styles", "Statistics", "Insporation"
  const [navSelected, setNavSelected] = useState("Items");

  // set nav selected state to replace WardrobePreview component based on selection "My Styles", "Statistics", "Insporation"
  const handleNavSelected = (e) => {
    setNavSelected(e.target.innerText);
    console.log("navSelected", navSelected);
  };

  const selectedUnerline = {
    textUnderlineOffset: "10px",
    textDecoration: "underline",
    textDecorationColor: "#F2C94C",
    textDecorationThickness: "10px",
    textDecorationOffset: "-5px",
    transition: "all 0.5s ease-in-out",
    textDecorationSkip: "ink",
    textDecorationSkipInk: "auto",
  };

  const unselectedUnerline = {
    textDecoration: "none",
    transition: "all 0.3s ease-in-out",
  };

  useEffect(() => {
    setUserId(user?.uid);
  }, [user]);

  useEffect(() => {
    setStyleItemsArr(itemsInStyle);
  }, [itemsInStyle]);

  return (
    <div className="bg-white h-fit w-screen pr-4 flex flex-col box-border min-h-screen">
    <DndProvider backend={HTML5Backend}>

      {userId ? (
        <>
          <WardrobeNav />
          {/* <WardrobeSideNav /> */}
          <div>
            <DropDownMenu
              handleNavSelected={handleNavSelected}
              selectedUnerline={selectedUnerline}
              unselectedUnerline={unselectedUnerline}
              styleItemCount={styleItemCount}
            />
            {navSelected === "Items" ? (
              <WardrobePreview userId={userId} styleItems={styleItemsArr} />
            ) : navSelected === "Styles" ? (
              <StylePreview userId={userId} styleItems={styleItemsArr} />
            ) : (
              <div>
                <h1 className="text-2xl font-bold text-center mt-4">
                  Statistics
                </h1>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <p className="font-semibold text-lg text-red-600 py-2">
            Please login to start digitalizing your wardrobe
          </p>
          <div className="btn-container">
            <Link to="/login">
              <Button size="large">Login</Button>
            </Link>
            <Link to="/signup">
              <Button size="large">Sign Up</Button>
            </Link>
          </div>
        </>
      )}
    </DndProvider>

    </div>
  );
};

export default Wardrobe;

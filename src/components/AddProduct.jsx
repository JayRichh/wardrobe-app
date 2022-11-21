import cart from "../assets/icons/cartIcon.png";
import ReactTooltip from "react-tooltip";

const AddProduct = ({ onAddProduct }) => {
  return (
    <div className="flex justify-end">
      
      <button
        onClick={onAddProduct}
        className="rounded-full w-5 h-5 flex items-center justify-center text-lg m-2 absolute"
        data-tip="Add To Cart"
      >
        <img src={cart} alt="cart" className="scale-100 hover:scale-125" />
      </button>
    </div>
  );
};

export default AddProduct;

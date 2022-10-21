import React, { useState, useEffect } from "react";
import ProductPreviewCard from "./ProductPreviewCard";
// usestate to store products and useeffect to make api call
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart/cartSlice"

// make API call to get products on home page
const ProductsPreview = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onAddProduct = (product) => {
    dispatch(addToCart(product))
  }

  return (
    <div className="container mx-auto pb-4 w-2/3 text-white bg-black">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
      >
        {products.length > 0 &&
          products.map((product, index) => {
            return (
              <div className="w-full p-3">
                <ProductPreviewCard
                  key={index}
                  product={product}
                  onAddProduct={onAddProduct}
                />
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};

export default ProductsPreview;

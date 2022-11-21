import React, { useState, useEffect } from "react";
import ProductPreviewCard from "./ProductPreviewCard";
// usestate to store products and useeffect to make api call
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart/cartSlice";

// make API call to get products on home page
const ProductsPreview = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const responsive = {
    superLargeDesktop: {
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
    dispatch(addToCart(product));
  };

  return (
    <div className="products-preview w-full px-24 mx-auto relative flex items-center-justify-between flex-wrap py-16 pt-32 bg-gradient-to-b from-white to-complimentPink">
      <div className="products-preview-title w-full md:w-1/4 py-10 flex items-center">
        <div>
          <h2 className="mb-6 text-4xl font-bold text-greenPrimary">
            Shop with us for a Fairer Future
          </h2>
          <p className="font-semibold text-lg text-gray-700 py-2">
            Buy less, buy better. Shop our curated collection of eco-friendly
            products sourced from local artisans.
          </p>
        </div>
      </div>
      <div className="products-preview-carousel w-3/4 py-3">
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
    </div>
  );
};

export default ProductsPreview;

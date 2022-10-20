import React, { useState, useEffect } from "react";
import ProductPreviewCard from "./ProductPreviewCard";
// usestate to store products and useeffect to make api call

// make API call to get products on home page
const ProductsPreview = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto pb-4 w-2/3 text-white bg-black">
      {/* <Carousel responsive={responsive}> */}
      {products.length > 0 &&
        products.map((product, index) => {
          return (
            <div className="w-full p-3">
              <ProductPreviewCard
                key={index}
                product={product}
                // onAddProduct={onAddProduct}
              />
            </div>
          );
        })}
      {/* </Carousel> */}
    </div>
  );
};

export default ProductsPreview;

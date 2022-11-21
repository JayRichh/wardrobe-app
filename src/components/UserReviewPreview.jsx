import React, { useState, useEffect } from "react";
import UserReviewCard from "./UserReviewCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// make API call to get products on home page
const UserReviewPreview = () => {
  const [users, setUsers] = useState([]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/stylers")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="products-preview w-full px-16 mx-auto relative flex items-center-justify-between flex-wrap pb-32 bg-gradient-to-b from-complimentPink to-complimentPink">
      <div className="users-preview-carousel w-full py-3">
        <Carousel
          responsive={responsive}
          showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          transitionDuration={1000}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {users.length > 0 &&
            users.map((user, index) => {
              return (
                <div className="w-full p-3">
                  <UserReviewCard
                    key={index}
                    user={user}
                  />
                </div>
              );
            })}
        </Carousel>
      </div>
    </div>
  );
};

export default UserReviewPreview;

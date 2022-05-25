import React from "react";
import tools from "../../images/tools.png";
import review from "../../images/reviews.png";
import customers from "../../images/customers.png";
import revenue from "../../images/revenue.png";

const Reviews = () => {
  const reviews = [
    {
      _id: 1,
      title: "100+ tools",
      img: tools,
    },
    {
      _id: 2,
      title: "33K+ reviews",
      img: review,
    },
    {
      _id: 3,
      title: "100+ customers",
      img: customers,
    },
    {
      _id: 3,
      title: "120+ annual revenue",
      img: revenue,
    },
  ];

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
      {reviews.map((review) => (
        <div
          key={review._id}
          className="card lg:max-w-lg bg-base-100 shadow-xl"
        >
          <div className="card-body">
            <img
              className="flex justify-center"
              style={{ width: "80px" }}
              src={review.img}
              alt=""
            />
            <h2 className="card-title">{review.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;

import React from "react";
import tools from "../../images/tools.png";
import review from "../../images/reviews.png";
import customers from "../../images/customers.png";
import revenue from "../../images/revenue.png";

const Reviews = () => {
  const reviews = [
    {
      _id: 1,
      title: "100+ Tools",
      img: tools,
    },
    {
      _id: 2,
      title: "33K+ Reviews",
      img: review,
    },
    {
      _id: 3,
      title: "100+ Customers",
      img: customers,
    },
    {
      _id: 3,
      title: "120+ Annual Revenue",
      img: revenue,
    },
  ];

  return (
    <div>
      <h2 className="text-center text-3xl font-bold mb-8 uppercase">
        Business Summary
      </h2>
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
    </div>
  );
};

export default Reviews;

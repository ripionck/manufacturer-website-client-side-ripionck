import React from "react";
import Rating from "./Rating";
const reviews = [
  {
    _id: 1,
    name: "Albert Hei",
    comment: "Amazing delivery! There is no delay and I'm satisfied.",
  },
  {
    _id: 2,
    name: "Robert Max",
    comment: "Excellent customer service. Highly recommended.",
  },
  {
    _id: 3,
    name: "Anti Hook",
    comment: "Timing is the super I've seen. No delay.",
  },
  {
    _id: 4,
    name: "Anti Hook",
    comment: "Costing is reasonable. Highly recommended.",
  },
];

const Review = () => {
  return (
    <div>
      <h2 className="text-3xl text-center font-bold uppercase mt-12">
        Customers review
      </h2>
      <div className="flex">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="card lg:max-w-lg bg-base-100 shadow-xl mt-4"
          >
            <div className="card-body">
              <div className="avatar flex justify-center mt-3">
                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://api.lorem.space/image/face?hash=3174"
                    alt=""
                  />
                </div>
              </div>
              <h2 className=" text-center">{review.name}</h2>
              <Rating></Rating>
              <p className="text-center">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;

import React from "react";

const Review = () => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl mt-12">
      <div className="card-body">
        <div className="avatar flex justify-center mt-3">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://api.lorem.space/image/face?hash=3174" alt="" />
          </div>
        </div>
        <h2 className=" text-center">Card title!</h2>
        <div className="rating justify-center">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <p className="text-center">
          If a dog chews shoes whose shoes does he choose?
        </p>
      </div>
    </div>
  );
};

export default Review;

import React from "react";
import banner from "../../images/banner.png";

const Banner = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} className="max-w-md" alt="" />
        <div>
          <h1 className="text-5xl font-bold">
            Internal Parts of the Domestic Refrigerator
          </h1>
          <p className="py-6">
            The domestic refrigerator is one found in almost all homes for
            storing food, vegetables, fruits, beverages, and much more. This
            article describes the important parts of a refrigerator and also
            their working. In many ways, the refrigerator works in a similar
            manner to how a home air conditioning unit works. The refrigerator
            can be categorized into two categories: internal and external.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

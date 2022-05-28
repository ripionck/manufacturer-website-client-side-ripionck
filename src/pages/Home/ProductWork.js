import React from "react";
import img from "../../images/part.png";

const ProductWork = () => {
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row">
        <img src={img} class="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 class="text-3xl font-bold">How Refrigerators Work</h1>
          <p class="py-6">
            If you pour a little rubbing alcohol on your skin, it'll feel cold
            -- really cold. It isn't refrigerated, so how does this happen?
            Well, alcohol evaporates at room temperature the way water
            evaporates at a low temperature in an oven. As it evaporates, it
            absorbs the heat on the surface of your skin, making your skin
            cooler. A special coolant called a refrigerant functions in a
            refrigerator the way alcohol works on your skin, except in a
            refrigerator, the coolant is trapped inside a series of coils. As it
            makes a circuit through them, it changes back and forth from a
            liquid to a gas.
          </p>
          <h5 className="font-bold">
            To pull off this frosty feat, a refrigerator uses five major
            components:
          </h5>
          <ul className="list-disc ml-4">
            <li>
              <span className="font-bold">Compressor</span>
            </li>
            <li>
              <span className="font-bold"> Heat-exchanging pipes</span>{" "}
              (serpentine or coiled set of pipes outside the unit)
            </li>
            <li>
              <span className="font-bold">Expansion valve</span>
            </li>
            <li>
              <span className="font-bold"> Heat-exchanging pipes</span>{" "}
              (serpentine or coiled set of pipes inside the unit)
            </li>
            <li>
              <span className="font-bold">Refrigerant</span> (liquid that
              evaporates inside the refrigerator to create the cold
              temperatures)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductWork;

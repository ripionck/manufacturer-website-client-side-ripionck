import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../Shared/CustomButton";

const Product = ({ product }) => {
  const { _id, name, image, quantity, min_order, price, description } = product;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body items-left">
        <h2 className="card-title text-2xl">{name}</h2>
        <p>
          <span className="font-bold">Description:</span> {description}
        </p>
        <p>
          <span className="font-bold">Quantity Available:</span> {quantity}
        </p>
        <p>
          <span className="font-bold">Minimum Orders:</span> {min_order}
        </p>
        <p>
          <span className="font-bold">Price: $</span>
          {price}
        </p>
        <Link to={`purchase/${_id}`}>
          <CustomButton>Buy now</CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default Product;

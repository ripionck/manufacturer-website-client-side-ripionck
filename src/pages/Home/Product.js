import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../Shared/CustomButton";

const Product = ({ product }) => {
  const { _id, name, image, quantity, min_order, price } = product;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <p>Available: {quantity}</p>
        <p>Minimum Orders: {min_order}</p>
        <p>Price :${price}</p>
        <Link to={`purchase/${_id}`}>
          <CustomButton>Buy now</CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default Product;

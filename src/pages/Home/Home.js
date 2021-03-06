import React from "react";
import Banner from "./Banner";
import Products from "./Products";
import ProductWork from "./ProductWork";
import Reviews from "./Reviews";
import Carousel from "./Carousel";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <ProductWork></ProductWork>
      <Reviews></Reviews>
      <Review></Review>
      <Carousel></Carousel>
    </div>
  );
};

export default Home;

import React from "react";
import Banner from "./Banner";
import Carousel from "./Carousel";
import Products from "./Products";
import ProductWork from "./ProductWork";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <ProductWork></ProductWork>
      <Reviews></Reviews>
      <Carousel></Carousel>
    </div>
  );
};

export default Home;

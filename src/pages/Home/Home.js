import React from "react";
import Banner from "./Banner";
import Carousel from "./Carousel";
import Products from "./Products";
import ProductWork from "./ProductWork";
import Reviews from "./Reviews";
import Summary from "./Summary";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <ProductWork></ProductWork>
      <Reviews></Reviews>
      <Summary></Summary>
      <Carousel></Carousel>
    </div>
  );
};

export default Home;

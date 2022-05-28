import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PurchaseOrder from "./PurchaseOrder";

const Purchase = () => {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState([]);
  console.log(product);

  useEffect(() => {
    fetch(`https://polar-ravine-55815.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <div>
      <PurchaseOrder key={product._id} product={product}></PurchaseOrder>
    </div>
  );
};

export default Purchase;

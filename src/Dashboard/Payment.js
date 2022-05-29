import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import Loading from "../pages/Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L4PV5Do0nOckcygnH9IoEVEP8pUooQnb3MFiDMjD2bIQNPHVr0wNnGBhmDbjxM33sZrCzGbbD8pLP7Z39E9ntIi00Os4qFnj1"
);

const Payment = () => {
  const { payId } = useParams();

  const url = `https://polar-ravine-55815.herokuapp.com/order/${payId}`;

  const { data: ordered, isLoading } = useQuery(["order", payId], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="card w-50 max-w-md bg-base-100 shadow-xl mb-4">
        <div className="card-body">
          <p className="text-success">Hello, {ordered.customerName}</p>
          <h2 className="card-title">
            Pay for <span className="text-green-500">{ordered.product}</span>
          </h2>
          <p>Please pay: ${ordered.price}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm ordered={ordered} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;

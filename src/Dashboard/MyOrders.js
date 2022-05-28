import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  console.log(orders);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(
        `https://polar-ravine-55815.herokuapp.com/order?customer=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);

  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>{o.customerName}</td>
              <td>{o.customer}</td>
              <td>{o.product}</td>
              <td>{o.quantity}</td>
              <td>
                {o.price && !o.paid && (
                  <Link to={`/dashboard/payment/${o._id}`}>
                    <button class="btn btn-sm hover:text-green-500">PAY</button>
                  </Link>
                )}
                {o.price && o.paid && (
                  <span className="text-success">
                    <p class="text-success">PAID</p>
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  console.log(orders);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?customer=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
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
            <th></th>
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
                <span>
                  <button class="btn btn-xs hover:bg-green-500">Payment</button>
                </span>
                <span>
                  <button class="btn btn-xs ml-2 hover:bg-red-500">
                    Cancel
                  </button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;

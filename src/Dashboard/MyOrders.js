import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  console.log(orders);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?customer=${user.email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);

  /*  const handleCancel = (email) => {
    const proceed = window.confirm("Are you sure to delete?");
    if (proceed) {
      const url = `http://localhost:5000/order/${email}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          //const remaining = orders.filter(order => order._id !== id);
        });
    }
  }; */

  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        {/* <!-- head --> */}
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
                  <button class="btn btn-sm hover:bg-green-500">Payment</button>
                </span>
                <span>
                  <button class="btn btn-sm ml-2 hover:bg-red-500">
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

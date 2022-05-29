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
    <div className="overflow-x-auto">
      <h2>Orders: {orders.length}</h2>
      <table className="table w-full">
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
            <tr key={o._id}>
              <th>{index + 1}</th>
              <td>{o.customerName}</td>
              <td>{o.customer}</td>
              <td>{o.product}</td>
              <td>{o.quantity}</td>
              <td>
                {o.price && !o.paid && (
                  <Link to={`/dashboard/payment/${o._id}`}>
                    <button className="btn btn-sm hover:text-green-500">
                      PAY
                    </button>
                  </Link>
                )}
                {o.price && o.paid && (
                  <div>
                    <p className="text-success">
                      <span className="text-success">PAID</span>
                    </p>
                    <p>
                      Transaction id:
                      <span className="text-success">{o.transactionId}</span>
                    </p>
                  </div>
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

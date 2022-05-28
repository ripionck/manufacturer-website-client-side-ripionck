import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const PurchaseOrder = ({ product }) => {
  //console.log(product);
  const [user] = useAuthState(auth);
  //console.log(user);
  const handleOrder = (event) => {
    event.preventDefault();

    const order = {
      product: product.name,
      price: product.price,
      customer: user.email,
      customerName: user.displayName,
      phone: event.target.phone.value,
      quantity: event.target.quantity.value,
    };
    event.target.reset();

    fetch("https://polar-ravine-55815.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data) {
          toast(`Successfully ordered ${product.name}!`);
        }
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="card flex-shrink-0 w-full lg:max-w-lg shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl">Order for: {product.name}</h2>
          <form onSubmit={handleOrder}>
            <div className="form-control mb-2">
              <input
                type="text"
                name="name"
                disabled
                value={user?.displayName || ""}
                className="input input-bordered"
              />
            </div>
            <div className="form-control mb-2">
              <input
                type="text"
                name="email"
                disabled
                value={user?.email || ""}
                className="input input-bordered"
              />
            </div>
            <div className="form-control mb-2">
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mb-2">
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mb-2">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <div className="flex justify-center">
                <span className="mr-2 border px-3 hover:bg-gray-400">
                  <button className="text-4xl">-</button>
                </span>
                <input
                  type="number"
                  name="quantity"
                  placeholder={product.min_order}
                  className="input input-bordered"
                  min={product.min_order}
                  max={product.quantity}
                />
                <span className="ml-2 border px-2 hover:bg-gray-400">
                  <button className="text-4xl">+</button>
                </span>
              </div>
            </div>
            <div className="btn btn-secondary flex justify-center mt-3 text-white text-xl">
              <input
                type="submit"
                value="
                Confirm Order"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrder;

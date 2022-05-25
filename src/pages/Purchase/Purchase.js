import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router";
import auth from "../../firebase.init";

const Purchase = () => {
  const { id } = useParams();
  console.log(id);
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className="hero min-h-screen">
      <div className="card flex-shrink-0 w-full lg:max-w-lg shadow-2xl bg-base-100">
        <div className="card-body">
          <h2>Order for: </h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              placeholder={user?.displayName || ""}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder={user?.email || ""}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              placeholder="Address"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="number"
              placeholder="Phone Number"
              className="input input-bordered"
            />
          </div>
          <div className="flex justify-center">
            <span className="mr-2">
              <button className="text-4xl">-</button>
            </span>
            <input
              type="number"
              placeholder=""
              className="input input-bordered"
            />
            <span className="ml-2">
              <button className="text-4xl">+</button>
            </span>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Confirm Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;

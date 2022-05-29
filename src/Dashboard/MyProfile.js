import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="hero">
      <div className="card flex-shrink-0 w-full lg:max-w-lg shadow-2xl bg-base-100">
        <div className="card-body">
          <form>
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
                name="location"
                placeholder="City/District"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mb-2">
              <input
                type="text"
                name="education"
                placeholder="Education"
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
              <input
                type="link"
                name="phone"
                placeholder="LinkedIn Link"
                className="input input-bordered"
              />
            </div>
            <div className="btn btn-secondary flex justify-center mt-3 text-white text-xl">
              <input
                type="submit"
                value="
              Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

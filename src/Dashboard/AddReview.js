import React from "react";

const AddReview = () => {
  return (
    <div>
      <h3 className="text-center mt-4 mb-2 font-bold">
        WE APPRECIATE YOUR REVIEW!
      </h3>
      <p className="text-center mb-6 text-success">
        <small>
          Your review will help us to improve our web hosting quality products,
          and customer services.
        </small>
      </p>
      <div className="hero ">
        <div className="card flex-shrink-0 w-full lg:max-w-lg shadow-2xl bg-base-100">
          <div className="card-body">
            <form>
              <div className="form-control mb-2">
                <input
                  type="number"
                  name="rating"
                  placeholder=""
                  className="input input-bordered"
                />
              </div>
              <textarea
                className="textarea w-full textarea-bordered"
                placeholder="Bio"
              ></textarea>
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
    </div>
  );
};

export default AddReview;

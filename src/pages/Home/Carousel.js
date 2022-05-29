import React from "react";

const Carousel = () => {
  return (
    <div className="flex flex-col w-full lg:flex-row mt-20 mb-16">
      <div className="grid flex-grow h-45 card bg-base-300 rounded-box place-items-center p-8">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
            />
          </svg>
          Ask a customer care specialist
        </span>
        <span>
          We have a trained team ready 24/7 to answer your questions and help
          you get back on track
        </span>
        <button className="btn btn-wide mt-3 bg-secondary font-bold">
          CALL 018-1053901
        </button>
      </div>
      <div className="divider lg:divider-horizontal">OR</div>
      <div className="grid flex-grow h-45 card bg-base-300 rounded-box place-items-center p-8">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            />
          </svg>
          Start a live chat
        </span>
        <span>
          Start a live chat Our customer care specialists are available to chat
          with you live and help you address any problems you have
        </span>
        <button className="btn btn-wide mt-3 bg-secondary font-bold">
          START A LIVE SHAT
        </button>
      </div>
    </div>
  );
};

export default Carousel;

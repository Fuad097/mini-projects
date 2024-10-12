import React from "react";
import image from "../jj.avif";

function Subscribecard() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex bg-slate-600 mx-6 p-2 h-auto w-auto rounded-2xl">
        <div className="flex flex-col space-y-2 md:flex-row rounded-l-xl overflow-auto">
          <img
            src={image}
            className="object-fit rounded-xl md:h-64 "
            alt="nathan square"
          />
          <div className="flex-col m-8 align-middle justify-center text-left space-y-5 text-white sm:flex-col">
            <h2 className="items font-bold text-lg ">Get guide Toronto tour</h2>
            <p className="font-mono">
              New places & new adventures. Sign up for the latest events
            </p>
            <div className=" flex-row text-white ">
              <input
                className="border-white p-2 px-6 focus:outline-none"
                type="text"
                placeholder="Enter your e-mail adress"
              />
              <button className="border-solid font-semibold bg-green-600 p-2 px-3 my-3 mx-3 rounded-sm hover:scale-105 md:mx-3">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribecard;

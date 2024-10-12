import React from "react";
import image from "../components/airpod.jpg";
import { GiInjustice } from "react-icons/gi";


function Product() {
  return (
    // Global
    <div className="flex items-center justify-center w-full h-screen">
      {/* container */}
      <div className="flex justify-center items-center w-full h-3/4 ">
        {/* card */}
        <div className="flex justify-center items-center shadow-black shadow-md w-2/3 h-full rounded-xl space-x-24 ">
          <div className="">
            <img className="w-80 h-60" src={image} alt="airpods" />
          </div>
          <div className="flex flex-col space-y-5">
            <span className="rounded-full bg-black text-white px-2 py-2 text-center text-xs font-bold">Free shipping</span>
            <h1 className="text-3xl  font-semibold">Airpods 2 Pro Max</h1>
            <h3 className="line-through font-extrabold text-lg">400 $</h3>
            <h2 className="font-extrabold text-5xl">250 $</h2>
            <p className="text-gray-600">This offer is  valid until November 11 or as long as stock lasts</p>
            <button className="w-full px-3 py-4 rounded-md bg-blue-500 text-white font-bold  hover:scale-105">Add to cart</button>

            <div className="flex flex-row  justify-between w-full">
              <button className=" button-container"><GiInjustice className="w-10 h-6"/>Add to cart</button>
              <button className="button-container">Add to wishlist</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

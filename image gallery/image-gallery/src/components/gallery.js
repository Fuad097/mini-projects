import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import image from "../photos/OIP (1).jpeg";
import image1 from "../photos/OIP (2).jpeg";
import image2 from "../photos/OIP.jpeg";
import image3 from "../photos/th (1).jpeg";
import image4 from "../photos/th (2).jpeg";
import image5 from "../photos/th (3).jpeg";
import image6 from "../photos/th (4).jpeg";
import image7 from "../photos/th.jpeg";
// import { FaHeart } from "react-icons/fa";

function Gallery() {


  return (
    // Global scale
    <div className="flex flex-col space-y-32 justify-center items-center my-32 w-full">
      {/* container */}
      <div className="flex flex-col space-y-10 justify-center items-center w-80">
        {/* navbar */}
        <nav className="flex justify-end w-full  space-x-3 font-semibold  ">
          <a
            className="hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-indigo-500"
            href="https://#/a"
          >
            Vector
          </a>
          <a
            className="hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-indigo-500"
            href="https://#/a"
          >
            Illustrations
          </a>
          <a
            className="hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-indigo-500"
            href="https://#/a"
          >
            Images
          </a>
          <a
            className="hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-indigo-500"
            href="https://#/a"
          >
            Icons
          </a>
        </nav>

        {/* search container */}
        <div className="flex justify-between space-x-32">
          <div className="flex  items-center border-b-4">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-1 w-72 hover:outline-none"
            />
            <IoSearchSharp className="mx-10 cursor-pointer w-10 h-8" />
          </div>
          {/* upadte button */}
          <button className="bg-black rounded-2xl text-white px-10 py-4 font-semibold from-black hover:to-gray-600 hover:opacity-80 hover:bg-gradient-to-r ">
            Update
          </button>
        </div>
      </div>
      {/* Gallery */}
      <div className="grid  gap-4 mx-16 md:grid-cols-3 ">
        {/* image1 */}
        <div id="cursor" className="relative group">
          <img className="w-full h-full" src={image} alt="sekil1" />

          <div className="absolute bottom-0 left-0 right-0 p-2 px-4  text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40 w-3/3 h-1/3 ">
            <div className="flex justify-between  w-full">
              <div className="font-normal ">
                <h2 className="text-lg">Abstract</h2>
                <p className="text-md ">200 likes -45 shares</p>
              </div>
            </div>
          </div>
        </div>

        {/* image2 */}
        <div className="relative group">
          <img className="w-full h-full" src={image1} alt="sekil1" />

          <div className="absolute h-1/3 bottom-0 left-0 right-0 p-2 px-4  text-white duration-700 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40 w-3/3 ">
            <div className="flex justify-between  w-full">
              <div className="font-normal">
                <h2 className="text-lg">Abstract</h2>
                <p className="text-md ">200 likes -45 shares</p>
              </div>
            </div>
          </div>
        </div>

        {/* image3 */}
        <div className="relative group">
          <img className="w-full h-full" src={image2} alt="sekil1" />

          <div className="absolute h-1/3 bottom-0 left-0 right-0 p-2 px-4  text-white duration-700 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40 w-3/3 ">
            <div className="flex justify-between  w-full">
              <div className="font-normal">
                <h2 className="text-lg">Abstract</h2>
                <p className="text-md ">200 likes -45 shares</p>
              </div>
            </div>
          </div>
        </div>

        {/* image4 */}
        <div className="relative group">
          <img className="w-full h-full" src={image3} alt="sekil1" />

          <div className="absolute h-1/3 bottom-0 left-0 right-0 p-2 px-4  text-white duration-700 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40 w-3/3 ">
            <div className="flex justify-between  w-full">
              <div className="font-normal">
                <h2 className="text-lg">Abstract</h2>
                <p className="text-md ">200 likes -45 shares</p>
              </div>
            </div>
          </div>
        </div>

        {/* image5 */}
        <div className="relative group">
          <img className="w-full h-full" src={image4} alt="sekil1" />

          <div className="absolute h-1/3 bottom-0 left-0 right-0 p-2 px-4  text-white duration-700 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40 w-3/3 ">
            <div className="flex justify-between  w-full">
              <div className="font-normal">
                <h2 className="text-lg">Abstract</h2>
                <p className="text-md ">200 likes -45 shares</p>
              </div>
            </div>
          </div>
        </div>

        {/* image6 */}
        <div className="relative group">
          <img className="w-full h-full" src={image5} alt="sekil1" />

          <div className="absolute h-1/3 bottom-0 left-0 right-0 p-2 px-4  text-white duration-700 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40 w-3/3 ">
            <div className="flex justify-between  w-full">
              <div className="font-normal">
                <h2 className="text-lg">Abstract</h2>
                <p className="text-md ">200 likes -45 shares</p>
              </div>
            </div>
          </div>
        </div>

        {/* image7 */}
        <div className="relative group">
          <img className="w-full h-full" src={image6} alt="sekil1" />

          <div className="absolute h-1/3 bottom-0 left-0 right-0 p-2 px-4  text-white duration-700 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40 w-3/3 ">
            <div className="flex justify-between  w-full">
              <div className="font-normal">
                <h2 className="text-lg">Abstract</h2>
                <p className="text-md ">200 likes -45 shares</p>
              </div>
            </div>
          </div>
        </div>

        {/* image8 */}
        <div className="relative group">
          <img className="w-full h-full" src={image7} alt="sekil1" />

          <div className="absolute h-1/3 bottom-0 left-0 right-0 p-2 px-4  text-white duration-700 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40 w-3/3 ">
            <div className="flex justify-between  w-full">
              <div className="font-normal">
                <h2 className="text-lg">Abstract</h2>
                <p className="text-md ">200 likes -45 shares</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

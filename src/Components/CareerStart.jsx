import React from "react";
import { FiPlayCircle } from "react-icons/fi";
const CareerStart = () => {
  return (
    <div>
      <div className="flex justify-center py-8">
        <div className="bg-[yellowgreen] text-white flex   p-4">
          <div className="w-[250px]  ">
            <h1 className="text-2xl bold">
              Start Your Career with B.Tech Program.
            </h1>
            <button className="text-3xl pt-20 ">
              {" "}
              <FiPlayCircle />
            </button>
          </div>
          <div className="">
            <img
              className="h-full w-[300px] rounded-lg"
              src="https://collegedakhla.com/wp-content/uploads/2023/03/btech.jpg"
              alt="std"
            />
          </div>
        </div>

        <div className="bg-red-500 text-white flex  p-4">
          <div className="w-[250px]">
            <h1 className="text-2xl bold">
              Start Your Career with MBBS Program.
            </h1>
            <button className="text-3xl pt-20  ">
              <FiPlayCircle />
            </button>
          </div>
          <div>
            <img
              className="w-[300px] h-full rounded-lg"
              src="https://collegedakhla.com/wp-content/uploads/2023/03/mbbs-988x1024.jpg"
              alt="std"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerStart;

import React from "react";

const AluminiSection = () => {
  return (
    <div className="py-[4rem] flex items-center justify-center  ">
      <div className="px-[2rem]">
        <div className="h-[20rem] w-[20rem] bg-[greenyellow] absolute mt-[12rem] "></div>
        <img
          className="w-[28rem] h-[30rem] pl-[2rem]  relative"
          src="https://collegedakhla.com/wp-content/uploads/2023/02/enjoying-the-campus-life.jpg"
          alt="alumini"
        />
      </div>
      <div className="text-left w-[50%] py-4">
        <h1 className="pb-8 text-black font-bold text-3xl">
          “I relied on my independence, tenacity and ability to take things
          lightly — because college was a walk in the park compared to where I
          grew up.”
        </h1>
        <div className="  w-8 h-[1.2px] bg-[yellowgreen]"></div>
        <h2 className="text-black text-2xl font-semibold pt-[2rem]">
          — Angelina Francis
        </h2>
        <h4 className="text-[tomato] font-semibold">ALUMNI 2012</h4>
      </div>
    </div>
  );
};

export default AluminiSection;

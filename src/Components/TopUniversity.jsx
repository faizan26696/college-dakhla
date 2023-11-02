import React from "react";

const TopUniversity = () => {
  return (
    <div className="bg-gray-200 p-[4rem]">
      <div className="text-center ">
        <h1 className="font-bold text-5xl py-[2rem] text-black">
          Top University{" "}
        </h1>
        <p className="text-gray-800 pb-[3rem]">
          Get Direct Admission in Top Universities
        </p>
      </div>
      <div className=" py-[4rem] flex align-middle justify-evenly">
        <div className="bg-[yellowgreen] px-6 h-[300px] w-[250px] items-center text-white flex flex-col justify-center hover:shadow-2xl hover:shadow-green-700 duration-300">
          <div className="pt-[2rem] ">
            <h3 className="font-bold">LOVELY PROFESSIONAL UNIVERSITY</h3>
            <p>
              Lovely Professional University is a private university located in
              Chaheru, Phagwara, Punjab, India. The university was established
              in 2005 by Lovely International Trust.
            </p>
          </div>
          <div className="pt-[5px]">
            <img
              className="w-[50px] h-[50px] rounded-full mt-[1.5rem] hover:-rotate-45 duration-200"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrPvbydq7CnpcTZgPdR5VnH0-jMxsl5-Patw&usqp=CAU"
              alt=""
            />
          </div>
        </div>{" "}
        <div className="bg-[yellowgreen] px-6 h-[300px] w-[250px] items-center text-white flex flex-col justify-center hover:shadow-2xl hover:shadow-green-700 duration-300">
          <div className="pt-[2rem] ">
            <h3 className="font-bold">LOVELY PROFESSIONAL UNIVERSITY</h3>
            <p>
              Lovely Professional University is a private university located in
              Chaheru, Phagwara, Punjab, India. The university was established
              in 2005 by Lovely International Trust.
            </p>
          </div>
          <div className="pt-[5px]">
            <img
              className="w-[50px] h-[50px] rounded-full mt-[1.5rem] hover:-rotate-45 duration-200"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrPvbydq7CnpcTZgPdR5VnH0-jMxsl5-Patw&usqp=CAU"
              alt=""
            />
          </div>
        </div>{" "}
        <div className="bg-[yellowgreen] px-6 h-[300px] w-[250px] items-center text-white flex flex-col justify-center hover:shadow-2xl hover:shadow-green-500 duration-300">
          <div className="pt-[2rem] ">
            <h3 className="font-bold">LOVELY PROFESSIONAL UNIVERSITY</h3>
            <p>
              Lovely Professional University is a private university located in
              Chaheru, Phagwara, Punjab, India. The university was established
              in 2005 by Lovely International Trust.
            </p>
          </div>
          <div className="pt-[5px]">
            <img
              className="w-[50px] h-[50px] rounded-full mt-[1.5rem] hover:-rotate-45 duration-200"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrPvbydq7CnpcTZgPdR5VnH0-jMxsl5-Patw&usqp=CAU"
              alt=""
            />
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default TopUniversity;

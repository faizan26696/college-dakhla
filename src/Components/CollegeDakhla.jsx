import React from "react";

const CollegeDakhla = () => {
  return (
    <div className="py-[3rem]">
      <div>
        <h2 className="text-3xl font-bold text-black ">
          Why Choose College Dakhla
        </h2>
        <p className="text-gray-400 p-[3rem]">
          We offer complete assistance to students from admission counseling,
          college selections, educational loan assistance, career counseling,
          and vocation selection.
        </p>
      </div>
      <div className="flex justify-evenly items-center ">
        <div className="flex justify-center items-center flex-col">
          <img
            className="rounded-full w-[100px] h-[100px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfXIeti_vdxhRLpFy8ratW818nEQX_cYy44A&usqp=CAU"
            alt="calendar"
          />
          <h3 className="text-2xl font-bold text-black ">
            University Selection
          </h3>
        </div>

        <div className="flex justify-center items-center flex-col">
          <img
            className="rounded-full w-[100px] h-[100px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_18BoY2fDfVyzsf5cJPAF5msgjT6yCLO-LA&usqp=CAU"
            alt="calendar"
          />
          <h3 className="text-2xl font-bold text-black ">
            Admission Guidance{" "}
          </h3>
        </div>
        <div className="flex justify-center items-center flex-col">
          <img
            className="rounded-full w-[100px] h-[100px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfpj3cJec3hIyxhqSfMScl2wpKcEKUfmT4Jw&usqp=CAU"
            alt="calendar"
          />
          <h3 className="text-2xl font-bold text-black ">Study Abroad</h3>
        </div>
      </div>
    </div>
  );
};

export default CollegeDakhla;

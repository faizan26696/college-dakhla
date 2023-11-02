import React from "react";
import QuestionAnswer from "./QustionAnswer";
import AluminiSection from "./AluminiSection";

const FAQ = () => {
  return (
    <div className="bg-gray-200 my-[6rem]">
      <AluminiSection />
      <div className="flex justify-between p-6 pt-[3rem]  mt-8 pb-[6rem]">
        <div className="text-left p-2">
          <h1 className="text-red-600 font-bold text-2xl">FAQ</h1>
          <h3 className="text-black text-[2rem] font-bold">
            Frequently Ask Questions.
          </h3>
        </div>
        <div>
          <QuestionAnswer />
        </div>
      </div>
    </div>
  );
};

export default FAQ;

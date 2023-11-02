import React from "react";
import Button from "./Button";

const steps = [
  {
    title: "Complete Profile to Get AI Powered College Recommendations",
    description:
      "Build your profile with your education history and preferences so that our AI tool can recommend the best colleges for you.",
  },
  {
    title: "Shortlist Colleges & Fill Form",
    description:
      "Shortlist your dream colleges and apply with a single application to multiple colleges.",
  },
  {
    title: "Get Expert Help",
    description:
      "A personal Education Mentor will assist you at every step. Get all your queries and doubts regarding course, college, fees answered by the experts.",
  },
  {
    title: "Upload Documents & Pay Fee",
    description:
      "Expedite your college application process by uploading your documents & paying the college fees.",
  },
  {
    title: "Confirm Admission",
    description:
      "Confirm your seat at the selected college & claim your gift using the reward points.",
  },
];

const StepComponent = () => {
  return (
    <div className=" flex flex-col items-center text-center">
      <div className="flex flex-col items-start justify-center  ">
        <div className="text-center w-full">
          <h1 className="text-4xl font-bold p-8 ">Easy Steps to Apply</h1>
        </div>
        {steps.map((step, index) => (
          <>
            <div
              key={index}
              className="flex justify-around items-center gap-[10rem] px-[2rem] pb-[1.8rem]"
            >
              <div className="text-green-500 font-bold sm:text-5xl mr-2  pb-[1.8rem] flex items-start">
                {"0" + String(index + 1)}
              </div>
              <div className="flex justify-center">
                <div className="items-start flex flex-col">
                  <h2 className="sm:text-3xl font-bold mt-6">{step.title}</h2>
                  <p className="text-gray-500 mt-2">{step.description}</p>
                  <div className=" mt-8  w-full h-[1px] bg-gray-400  "></div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <Button
        className="bg-green-500 font-semibold cursor-pointer p-3 text-white hover:bg-[tomato] duration-200"
        text="APPLICATION FORM >>"
      />
    </div>
  );
};

export default StepComponent;

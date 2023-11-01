import React from "react";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { AiFillCalendar, AiOutlineRollback } from "react-icons/ai";
import Button from "./Button";
const EducationalLoan = () => {
  return (
    <div className="h-[700px] relative   bg-center bg-cover bg-[url('https://collegedakhla.com/wp-content/uploads/2023/02/college_students1.jpg')] align-middle items-center">
      <div>
        {" "}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black opacity-70"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold text-white pb-[1.5rem]">
            Easy Education Loan
          </h1>
          <p className="text-white sm:w-[400px]">
            Don’t let the financial stress affect your chances of studying in
            the college of your dreams. Turn to Acchawala Loan Facility – A
            simple, hassle-free solution that will take away your burden of
            paying the entire college fees at once!
          </p>
          <div className="pt-[3rem] items-center flex flex-col">
            <div className="flex align-middle items-center gap-3 text-[18px]">
              <span className="text-[yellowgreen]">
                <BsFillCalendarDateFill />
              </span>
              <p className="text-white">Disbursal within 72 Hours</p>
            </div>
            <div className="flex align-middle items-center gap-3 text-[18px]">
              <span className="text-[yellowgreen]">
                <AiFillCalendar />
              </span>
              <p className="text-white">Hassle Free,100% Online Process</p>
            </div>
            <div className="flex align-middle items-center gap-3 text-[18px]">
              <span className="text-[yellowgreen]">
                <BsFillCalendarDateFill />
              </span>
              <p className="text-white">
                Customized Interest Rates No Collateral Required
              </p>
            </div>
            <div className="flex align-middle items-center gap-3 text-[18px]">
              <span className="text-[yellowgreen]">
                <AiOutlineRollback />
              </span>
              <p className="text-white">Full Refund Within 30 Days</p>
            </div>
            <div className="pt-[1rem]">
              <Button
                className=" bg-green-500 font-semibold  cursor-pointer p-3 text-white hover:bg-[tomato]  duration-200"
                text="APPLY NOW"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalLoan;

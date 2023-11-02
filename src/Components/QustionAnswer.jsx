import React, { useState } from "react";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";

const QuestionAnswer = () => {
  const faqData = [
    {
      question: "WHAT MARKS DO YOU NEED TO GET INTO NIT TRICHY?",
      answer:
        "Applicants need at least 60% aggregate marks in 10+2 to get admission at NIT Trichy. This is the prerequisite for applying.<br/>For final admission, students are shortlisted based on their JEE Main rank. NIT Trichy cutoff depends on several factors such as branch, domicile student category competition etc. The required cutoff for CSE and ECE is relatively higher, as most students opt for these branches. In 2021 the closing cutoff for CSE was 793.",
    },
    {
      question: "WHAT IS THE AVERAGE PACKAGE FOR MBA(HRM)AT IIM INDORE?",
      answer:
        "IIM Indore placements 2022 concluded with an average CTC of INR 20.4 LPA for PGPHRM. Here are the highlights.GAIL, Crompton Greaves, and Allcargo Logistics were among the notable recruiters for the batch. ",
    },
    {
      question: "WHAT IS THE FUTURE SCOPE OF IIM INDORE IN THE PGCPF COURSE?",
      answer:
        "The future scope of Post Graduate Certificate Programme in Finance at IIM Indore is good. This course is great for knowledge up-gradation. Most working professionals have received an increment or promotion or both after completing this course.<br/>If you are a working professional with more than four years of experience in the industry and looking for managerial-level posts, then you can benefit a lot from this course.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 ">
      {faqData.map((item, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleQuestion(index)}
          >
            <div className="text-[18px] font-semibold text-left px-2  flex items-start text-white bg-[yellowgreen]">
              {item.question}
            </div>
            <div
              className="transform transition-transform duration-300 bg-[yellowgreen]"
              aria-hidden="true"
            >
              {openIndex === index ? (
                <div className="bg-[yellowgreen] text-white p-2 h-[56px] flex items-center text-3xl">
                  <BsFillArrowDownCircleFill />
                </div>
              ) : (
                <div className="bg-[yellowgreen] text-white p-2 h-[56px] flex items-center text-3xl">
                  <BsFillArrowUpCircleFill />
                </div>
              )}
            </div>
          </div>
          {openIndex === index && (
            <div className=" text-left px-2  mt-2 text-gray-700 bg-slate-300  ">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuestionAnswer;

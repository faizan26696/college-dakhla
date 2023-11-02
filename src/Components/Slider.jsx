import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Slider = () => {
  const slides = [
    {
      url: "https://i.ytimg.com/vi/Hf4kUE8j3Do/maxresdefault.jpg",
    },
    {
      url: "https://s3service.hitbullseye.com/s3fs-public/ubs_mumbai-sign.jpg?null",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/8/80/SRM_University_board_and_Entry_of_SRM_University_Amaravati.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(slideInterval);
    };
    // eslint-disable-next-line
  }, [currentIndex]);

  return (
    <div className="pt-10 sm:max-w-[1400px] sm:h-[780px] Sm:w-full m-auto  relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="   sm:w-full sm:h-full  bg-center bg-cover duration-500"
      >
        {" "}
        <div className="flex top-4 justify-center py-[45rem] mb-0 ">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export default Slider;

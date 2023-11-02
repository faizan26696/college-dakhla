import Button from "./Button";
import { BsFillBoxFill } from "react-icons/bs";

const AboutSection = () => {
  return (
    <div className="pt-[10rem]   absolute w-full   right-[0px] left-[0px] h-[688px] overflow-hidden text-left text-base text-darkslategray font-inter">
      <div className="absolute top-[64px] left-[calc(50%_-_640px)] w-[1280px] h-[560px] ">
        <div className="text-start mt-[3rem] w-[50%] leading-loose">
          <h5 className="text-red-400 font-bold">WHO WE ARE</h5>
          <h1 className="text-3xl font-bold pt-10">
            Knowledge will bring you the opportunity to make a difference.
          </h1>
          <p className="text-gray-500 text-[16px] pb-[2rem]">
            We believe every student deserves the best education in their life
            and and choose their dream vocation. We offer complete assistance to
            students from admission counseling, college selections, educational
            loan assistance, career counseling, and vocation selection.
          </p>
          <Button
            className=" bg-[yellowgreen]   p-2 text-white cursor-pointer   hover:bg-[tomato]  duration-200"
            text="DISCOVER MORE"
          />
        </div>
        <div className="absolute h-full w-[calc(100%_-_640px)] top-[0px] right-[0px] bottom-[0px] left-[640px] text-center text-9xl-1 text-gray-100">
          <div className="absolute w-[calc(100%_-_20px)] top-[41.5px] right-[10px] left-[10px] h-[457px] bg-[url('/public/divelementorwidgetcontainer@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <img
              className="absolute top-[calc(50%_-_228.5px)] left-[calc(50%_-_278px)] w-[588px] h-[425px] overflow-hidden object-cover"
              alt=""
              src="https://collegedakhla.com/wp-content/uploads/2023/03/1488259134phpShnPJa1-3.jpg"
            />
          </div>
          <div className="pr-[1rem] absolute w-[calc(100%_-_340px)] top-[347.9px] right-[-100px] left-[440px] bg-white h-[212.1px]">
            <div className="text-black absolute top-[32px] left-[calc(50%_-_13.1px)] text-16xl leading-[35px] font-font-awesome-5-free text-tomato flex items-center justify-center w-[26.6px] h-[35px]">
              <BsFillBoxFill />
            </div>
            <div className=" text-black absolute top-[88px] left-[calc(50%_-_114.8px)] leading-[36.57px] font-semibold flex items-center justify-center w-[230.1px] h-[34px]">
              Get Admission in
            </div>
            <div className="text-black absolute top-[124.6px] left-[calc(50%_-_88.5px)] leading-[36.57px] font-semibold flex items-center justify-center w-[177.4px] h-[34px]">
              Top Colleges
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

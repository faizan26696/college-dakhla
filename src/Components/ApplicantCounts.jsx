import Button from "./Button";

const ApplicantCounts = () => {
  return (
    <div className="pt-[3rem] flex flex-col justify-center">
      <div className="flex justify-around p-[4rem] gap-[4rem]">
        <h1 className="text-4xl font-bold text-[yellowgreen] text-start">
          FIND TOP COLLEGES OF YOUR CHOICE AT ONE PLACE.
        </h1>
        <p className="text-start  text-[18px] ">
          1 single form and get access to 2500+ colleges across India. College
          Dakhla saves your time, money and makes the college application
          process easier for you to apply to numerous colleges using one window.
        </p>
      </div>
      <div className="flex justify-evenly items-center p-2">
        <div>
          <h2 className="text-6xl font-bold text-[yellowgreen]">50,000 +</h2>
          <span>APPLICATIONS FILLED</span>
        </div>
        <div>
          <h2 className="text-6xl font-bold text-[yellowgreen]">10,000 +</h2>
          <span>ADMISSIONS DONE</span>
        </div>
        <div>
          <h2 className="text-6xl font-bold text-[yellowgreen]">150 +</h2>
          <span>EXPERT COUNSELLORS</span>
        </div>
      </div>
      <div className="p-[3rem]">
        <Button
          text="DISCOVER MORE"
          className=" bg-[yellowgreen] cursor-pointer p-3 text-white"
        />
      </div>
    </div>
  );
};

export default ApplicantCounts;

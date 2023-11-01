const UniversitySection = () => {
  const universityData = [
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Wrt2f9IQpaKeSaXItjYesvv3fV9pevlLseWI7NHeeWhAeo4qfOx9F067LReBXsjxFm8&usqp=CAU",
      title: "University Selection",
      description:
        "University Selection has become the most vital role in the whole method to start with. Good results to colleges in most states is dependent upon the most suitable picks of the universities/colleges.",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Wrt2f9IQpaKeSaXItjYesvv3fV9pevlLseWI7NHeeWhAeo4qfOx9F067LReBXsjxFm8&usqp=CAU",
      title: "Education Loan Assistance",
      description:
        "College Dakhla aims to encourage pupils to pursue their schooling in procuring economic assistance. To encourage students to maintain advanced schooling despite their financial openings.",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Wrt2f9IQpaKeSaXItjYesvv3fV9pevlLseWI7NHeeWhAeo4qfOx9F067LReBXsjxFm8&usqp=CAU",
      title: "Admission Guidance",
      description:
        "We understand the stress of a student hence provide personalized direction, support, and counselling to him/her, in the order they know their dream of analyzing at most colleges of both India.",
    },
  ];
  return (
    <div className="flex items-center justify-center   mt-[40rem] px-4 py-4">
      <div className="flex space-x-4 justify-evenly">
        {universityData.map((item, index) => {
          return (
            <div
              key={index}
              className="rounded-lg flex items-start p-[2rem] gap-4 odd:text-white even:bg-gray-200 even:text-black odd:bg-[yellowgreen] w-[360px] h-[400px]"
            >
              <img
                className="rounded-full w-[100px] h-[100px] p-2"
                src={item.url}
                alt="deglogo"
              />
              <div className="text-left  ">
                <h1 className=" font-bold text-2xl">{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UniversitySection;

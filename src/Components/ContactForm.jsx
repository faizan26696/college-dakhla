import React from "react";

const ContactForm = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg">
          <h3 className="pt-4 text-3xl font-bold text-center">
            Do you have any questions?
          </h3>
          <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-bold text-gray-700"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-4 mb-3 text-sm leading-tight text-gray-700 border border-black outline-black rounded shadow appearance-none"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4 md:flex md:justify-between">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm font-bold text-gray-700"
                >
                  First Name
                </label>
                <input
                  className="w-[280px] px-3 py-4 mb-3 text-sm leading-tight text-gray-700 border border-black outline-black rounded shadow appearance-none"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="md:ml-2">
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-bold text-gray-700"
                >
                  Last Name
                </label>
                <input
                  className="w-[280px] px-3 py-4 mb-3 text-sm leading-tight text-gray-700 border border-black outline-black rounded shadow appearance-none"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="mb-6 text-center">
              <button
                className="w-full px-4 py-2 font-bold text-white bg-black hover:bg-green-500 focus:outline-none focus:shadow-outline duration-300"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

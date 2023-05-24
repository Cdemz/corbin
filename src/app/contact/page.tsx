import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <div>
      <main className="p-4 mt-[4rem]">
        <h1 className="text-2xl font-semibold">
          Enhancing your plumbing project with Corbin Mechanicals.
        </h1>
        <p>
          Whether you're working on a residential, commercial, or industrial
          project, we've got you covered. From precise installations to
          efficient servicing, we ensure the highest quality standards. Contact
          us today to discover how Corbin Mechanicals can bring your
          construction project to the next level.
        </p>
        <div className=""></div>
      </main>
      {/* form  */}
      <section className="flex">
        <div className="p-4 flex flex-col gap-3">
          {/* first name  */}
          <div className="relative w-full mb-3 flex items-center gap-2">
            <label
              className="block uppercase t text-xs font-bold mb-2"
              htmlFor="email"
            >
              First Name
            </label>
            <input
              type="email"
              className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
              placeholder="First Name"
            />
          </div>
          {/* last name  */}

          <div className="relative w-full mb-3 flex items-center">
            <label className="uppercase text-xs font-bold mb-2" htmlFor="email">
              Last Name
            </label>
            <input
              type="email"
              className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
              placeholder="Last Name"
            />
          </div>

          {/* email  */}
          <div className="relative w-full mb-3 flex items-center gap-2">
            <label
              className="block uppercase t text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
              placeholder="Email"
            />
          </div>
          {/* last name  */}

          {/* phone */}
          <div className="relative w-full mb-3 flex items-center gap-2">
            <label
              className="uppercase t text-xs font-bold mb-2"
              htmlFor="email"
            >
              Phone
            </label>
            <input
              type="email"
              className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
              placeholder="Phone"
            />
          </div>
          {/* event date */}
          <div className="relative w-full mb-3 flex items-center gap-2">
            <label
              className="uppercase t text-xs font-bold mb-2"
              htmlFor="email"
            >
              Project type
            </label>
            <input
              type="email"
              className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
              placeholder="What is your next project?"
            />
          </div>
          {/* about your event  */}
          <div className="relative w-full mb-3 flex items-center gap-2">
            <label
              className="uppercase t text-xs font-bold mb-2"
              htmlFor="email"
            >
              About your project
            </label>
            <input
              type="email"
              className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full h-[8em] placeholder-top"
              placeholder="Feed us with a little more detail"
            />
          </div>
          <button className="bg-[#d6cbab] mx-auto py-3 px-[8rem] rounded-2xl">
            Submit
          </button>
          <p className="text-xs">
            In case you encounter any difficulties submitting an inquiry through
            the form, please don't hesitate to reach out to us via email at
            Corbinmechanicals401@gmail.com.
          </p>
        </div>
        <div className="hidden md:flex md:w-[40%]">
          <Image src="/bg-img.png" alt="" width={300} height={300} />
        </div>
      </section>
      {/* copy copy  */}
      <div className="p-4 flex justify-around">
        <Image src="/hero.png" alt="" width={300} height={300} />
      </div>
      <div className="py-[4em] bg-black text-white px-4 text-xs font-bold text-center md:text-2xl">
        <h1 className="">
          When Plumbing Excellence Matters... Corbin Mechanicals!
        </h1>
      </div>
    </div>
  );
};

export default ContactUs;

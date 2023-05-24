import React from "react";

const Contact = () => {
  return (
    <div className="bg-black flex flex-col md:flex-row py-6">
      <div className=" px-6  md:w-[50%] flex flex-col gap-4">
        <h1 className="md:text-4xl md:text-start font-bold text-center text-4xl">
          FLEXIBILITY CUSTOMAZIBILITY DESIGN QUALITY
        </h1>
        <p>
          Our contact section serves as a gateway for you to reach out to us,
          whether you have inquiries, project proposals, or simply want to
          discuss your plumbing and servicing needs. Our dedicated team is ready
          to listen, provide expert guidance, and collaborate with you to bring
          your vision to life. We value open dialogue and look forward to
          connecting with you to explore the possibilities of working together.{" "}
          <span className="mt-[3rem] block">
            {" "}
            When it comes to construction, we believe that every interaction
            counts. Our contact section ensures that you have direct access to
            our experienced professionals who can offer personalized solutions
            tailored to your unique requirements. Whether you're looking for
            general information, seeking consultations, or ready to embark on a
            construction project, reaching out to Banks Construction will be
            your bridge to a seamless experience. We are committed to providing
            prompt responses, transparent communication, and the highest level
            of customer satisfaction. ,
          </span>
        </p>
      </div>
      {/* form  */}
      <div className="my-auto px-4">
        <div className="px-4 py-8 border-2 border-white rounded-lg">
          <h1 className="text-4xl font-bold mb-6">GET A FREE QUOTE</h1>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border-none border-b-2 border-white px-4 py-2 focus:border-white focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="border-none border-b-2 border-white px-4 py-2 focus:border-white focus:outline-none"
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              className="border-none border-b-2 border-white px-4 py-2 focus:border-white focus:outline-none"
              required
            />
            <textarea
              placeholder="Services"
              className="border-none border-b-2 border-white px-4 py-2 focus:border-white focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-white text-black px-6 py-3 rounded-lg"
            >
              Apply Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import Image from "next/image";
import { BsPersonCircle, BsFillStarFill } from "react-icons/bs";

const data = [
  {
    avatar: <BsFillStarFill />,
    name: "John D",
    reveiw:
      "Working with Corbin Mechanicals was an absolute pleasure. Their team's attention to detail and commitment to delivering high-quality results exceeded our expectations. They were professional, reliable, and completed the project on time. Highly recommend!",
  },

  {
    avatar: <BsFillStarFill />,
    name: " Mark and Lisa R",
    reveiw:
      " We chose Corbin Mechanicals for our residential Plumbing project, and we couldn't be happier with the outcome. Their craftsmanship and dedication to excellence were evident in every aspect of the construction process. The team was communicative, knowledgeable, and delivered our dream home on schedule. Highly recommended",
  },

  {
    avatar: <BsFillStarFill />,
    name: " Leigh Ola",
    reveiw:
      "Corbin Mechanical's design-build approach was the perfect fit for our project. They seamlessly integrated the design and construction phases, resulting in a streamlined process and outstanding results. Their attention to detail, creative solutions, and commitment to sustainability were impressive. We are thrilled with our new space! ",
  },

  {
    avatar: <BsFillStarFill />,
    name: " Sarah M",
    reveiw:
      "Corbin Mechanicals exceeded our expectations in every way. Their construction consulting services were invaluable, providing us with expert guidance, cost-saving strategies, and meticulous attention to detail. They consistently demonstrated professionalism, integrity, and a commitment to delivering exceptional results. We highly recommend Corbin Mechanicals for any plumbing project",
  },

  {
    avatar: <BsFillStarFill />,
    name: "Rayyan Ryan",
    reveiw:
      "Corbin Mechanicals provided exceptional construction management services for our commercial project. Their expertise and proactive approach ensured smooth coordination among subcontractors, and they were responsive to our needs throughout. The end result was a beautifully constructed drainage that perfectly met our requirements.",
  },

  {
    avatar: <BsFillStarFill />,
    name: "Michael and Jennifer S",
    reveiw:
      "We engaged Corbin Mechanicals for a major renovation, and they truly transformed our property. Their team's expertise, project management skills, and clear communication made the entire process stress-free. The quality of their workmanship and their dedication to client satisfaction are commendable. We are grateful for their outstanding service.",
  },
];

const Testimonials = () => {
  return (
    <div>
      <div className="relative ">
        {/* image  */}
        <div className="md:h-[30rem]">
          <Image
            src="/bg-img.png"
            alt="bg-img"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
        {/* main page  */}
        <div className="absolute top-0 backdrop-blur-sm bg-black bg-opacity-70 h-full w-full flex flex-col md:flex-row ">
          <div className="md:h-[28rem] md:w-[45%] p-8 flex flex-col">
            <h1 className="md:text-6xl md:text-start font-bold text-center text-4xl">
              OUR CLIENTS REVIEWS
            </h1>
            <Image
              src="/bg-img.png"
              alt="bg-img"
              width={300}
              height={300}
              className=" hidden md:flex h-[12rem] w-full  object-cover"
            />
          </div>
          <div className="mb-4 px-6 flex flex-col gap-8 max-h-[25rem] md:max-h-[28rem] overflow-y-scroll overflow-hidden ">
            {data.map((data, index) => (
              <div
                key={index}
                className=" mt-8 relative bg-[var(--color-bg)] bg-opacity-20 text-[var(--color-text)] w-[23rem] py-8 text-center flex flex-col gap-4"
              >
                <div className="absolute top-[-40px] right-[9rem] h-[5rem] w-[5rem] rounded-full bg-[var(--color-primary)] flex items-center justify-center">
                  <BsPersonCircle size={40} />
                </div>
                <h1 className="mt-4 font-extrabold">INSTAGRAM</h1>
                <div className="mx-auto text-[#FFD700] flex gap-2">
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                </div>
                <p>{data.reveiw}</p>
                <p className="text-[#808080]">{data.name}</p>
              </div>
            ))}
          </div>

          {/* end  */}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

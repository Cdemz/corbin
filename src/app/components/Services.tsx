import { BsArrowRight, BsBricks } from "react-icons/bs";
import { GrUserWorker } from "react-icons/gr";
import { GiMiningHelmet } from "react-icons/gi";
import Link from "next/link";

const Services = () => {
  return (
    <div>
      <div className="bg-[var(--color-bg)] pt-6">
        <div className="px-6 text-center  mb-4">
          <p className="text-[var(--color-primary)] font-bold text-sm">
            The Best A Grade Commercial & Residential Services
          </p>
          <h1 className="text-black font-bold text-xl">
            {" "}
            High Quality Construction Solution <br /> For Residentials &
            Industries
          </h1>
        </div>
        {/* container for the options  */}
        <div className=" flex flex-col md:flex-row md:justify-around gap-6 md:gap-0">
          {/* items start  */}

          <div className=" py-6 pl-6 flex flex-col gap-8 bg-white text-[var(--color-text)] hover:text-white focus:text-white hover:bg-red-500 focus:bg-red-500 md:w-[30%]">
            <BsBricks size={36} />
            <p className="text-3xl font-bold ">
              Architecture <br /> & Building
            </p>
            <hr />
            <p className="w-[90%]">
              With our expertise in architecture and building, we bring
              innovative designs to life, ensuring quality craftsmanship and
              attention to detail throughout the construction process. Trust us
              to make your dream project a reality.
            </p>
            <Link href="/contact">
              <button className=" flex items-center gap-2   px-5 py-2 rounded-2xl">
                Free Quote
                <div className="h-10 w-10 rounded-full flex justify-center items-center bg-[var(--color-bg)] ">
                  <BsArrowRight className="inline-flex text-[var(--color-primary)]" />
                </div>
              </button>
            </Link>
          </div>
          {/* item 2 */}

          <div className=" py-6 pl-6 flex flex-col gap-8 bg-white text-[var(--color-text)] hover:text-white focus:text-white hover:bg-red-500 focus:bg-red-500 md:w-[30%]">
            <GrUserWorker size={36} />
            <p className="text-3xl font-bold ">
              Construction <br /> Consultants
            </p>
            <hr />
            <p className="w-[90%]">
              we serve as your dedicated construction consultants, providing
              expert guidance and solutions for your construction projects. With
              our extensive knowledge and experience, we offer valuable
              insights, innovative strategies, and meticulous attention to
              detail to ensure successful project outcomes.
            </p>
            <Link href="/contact">
              <button className=" flex items-center gap-2   px-5 py-2 rounded-2xl">
                Free Quote
                <div className="h-10 w-10 rounded-full flex justify-center items-center bg-[var(--color-bg)] ">
                  <BsArrowRight className="inline-flex text-[var(--color-primary)]" />
                </div>
              </button>
            </Link>
          </div>
          {/* items 3 */}
          <div className=" py-6 pl-6 flex flex-col gap-8 bg-white text-[var(--color-text)] hover:text-white focus:text-white hover:bg-red-500 focus:bg-red-500 md:w-[30%]">
            <GiMiningHelmet size={36} />
            <p className="text-3xl font-bold ">
              Construction <br /> Management
            </p>
            <hr />
            <p className="w-[90%]">
              With our experienced team and strategic approach, we oversee every
              aspect, from planning to completion, optimizing resources and
              timelines. Trust us to handle your construction management needs,
              delivering successful outcomes with expertise and professionalism.
            </p>
            <Link href="/contact">
              <button className=" flex items-center gap-2   px-5 py-2 rounded-2xl">
                Free Quote
                <div className="h-10 w-10 rounded-full flex justify-center items-center bg-[var(--color-bg)] ">
                  <BsArrowRight className="inline-flex text-[var(--color-primary)]" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

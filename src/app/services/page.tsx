import { BsArrowRight, BsBricks } from "react-icons/bs";
import { GrUserWorker } from "react-icons/gr";
import { GiMiningHelmet } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";

const Services = () => {
  return (
    <div>
      <div className="relative mt-10">
        <div className="md:h-[20rem]">
          <Image
            src="/services.png"
            alt="service hero"
            width={300}
            height={300}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute top-0 bg-black bg-opacity-70 h-full w-full items-center justify-center text-center">
          <h1 className="text-[var(--color-primary)] text-6xl font-bold mt-[10rem] md:mt-[5rem]">
            Services
          </h1>
        </div>
      </div>
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
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 justify-between px-4">
          {/* items start  */}

          <div className=" py-6 pl-6 flex flex-col gap-8 bg-white text-[var(--color-text)] hover:text-white focus:text-white hover:bg-red-500 focus:bg-red-500 ">
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

          <div className=" py-6 pl-6 flex flex-col gap-8 bg-white text-[var(--color-text)] hover:text-white focus:text-white hover:bg-red-500 focus:bg-red-500  ">
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

          {/* item 3 */}

          <div className=" py-6 pl-6 flex flex-col gap-8 bg-white text-[var(--color-text)] hover:text-white focus:text-white hover:bg-red-500 focus:bg-red-500 ">
            <GrUserWorker size={36} />
            <p className="text-3xl font-bold ">
              General <br /> Contracting
            </p>
            <hr />
            <p className="w-[90%]">
              As the primary contractor, a general contractor takes on the
              responsibility of managing the entire construction project. They
              oversee various aspects, such as hiring subcontractors, scheduling
              tasks, and ensuring that the project meets quality standards and
              timelines.
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

          {/* item 4 */}

          <div className=" py-6 pl-6 flex flex-col gap-8 bg-white text-[var(--color-text)] hover:text-white focus:text-white hover:bg-red-500 focus:bg-red-500 ">
            <GrUserWorker size={36} />
            <p className="text-3xl font-bold ">
              Site <br /> Preparation
            </p>
            <hr />
            <p className="w-[90%]">
              Site preparation is the initial stage of construction, involving
              tasks such as clearing the land, grading the terrain, excavating
              for foundations, and installing necessary utilities. It prepares
              the site for construction activities and ensures a solid base for
              the building or structure.
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

          {/* item 5 */}

          <div className=" py-6 pl-6 flex flex-col gap-8 bg-white text-[var(--color-text)] hover:text-white focus:text-white hover:bg-red-500 focus:bg-red-500 ">
            <GrUserWorker size={36} />
            <p className="text-3xl font-bold ">Woodwork</p>
            <hr />
            <p className="w-[90%]">
              Carpentry services encompass the construction and installation of
              wooden structures, such as framing, cabinets, doors, windows, and
              finishes. Skilled carpenters work with precision to create
              functional and aesthetically pleasing elements.
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

          {/* item 6 */}

          <div className=" py-6 pl-6 flex flex-col gap-8 bg-white text-[var(--color-text)] hover:text-white focus:text-white hover:bg-red-500 focus:bg-red-500 ">
            <GrUserWorker size={36} />
            <p className="text-3xl font-bold ">
              Landscaping <br /> and Exterior Work
            </p>
            <hr />
            <p className="w-[90%]">
              Landscaping services focus on creating attractive and functional
              outdoor spaces around a building. This includes designing and
              implementing features like gardens, lawns, pathways, driveways
              lighting, fences, and other exterior elements that enhance the
              overall aesthetics and usability of the property.
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
          <div className=" py-6 pl-6 flex flex-col gap-8 bg-white text-[var(--color-text)] hover:text-white focus:text-white hover:bg-red-500 focus:bg-red-500 ">
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

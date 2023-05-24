import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { HiMailOpen, HiLocationMarker } from "react-icons/hi";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Link from "next/link";

export default function Home() {
  return (
    <main className="" id="/">
      <div className="main-content relative h-[30rem]  md:h-[40rem] mt-10">
        <div className=" ">
          <Image
            alt="hero"
            src="/hero.png"
            width={300}
            height={300}
            className="w-full h-[30rem] md:h-[40rem] object-cover"
          />
        </div>
        <div className="flex gap-4 flex-col absolute top-0 bg-black bg-opacity-70 h-full w-full px-6 py-10 md:px-[7rem] md:py-[4rem]">
          <h1 className="text-4xl font-bold">
            Provide Effect <br /> Building Solution!
          </h1>
          <p className="md:w-[70%]">
            {" "}
            Where quality craftsmanship and attention to detail bring your
            construction visions to life. Our skilled team combines expertise,
            innovation, and a passion for creating enduring structures, from
            commercial developments to residential homes. With a foundation
            built on trust and integrity, we collaborate closely with clients,
            tailoring comprehensive solutions to meet specific requirements
          </p>
          <div className="buttons">
            <Link href="/services">
              <button className="bg-[var(--color-primary)] px-4 py-2 rounded-lg  mr-6 md:mr-[5rem]">
                Our Services <BsArrowRight className="inline-flex" />{" "}
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-[var(--color-bg)] text-black px-4 py-2 rounded-lg">
                More ABout Us!
              </button>
            </Link>
            <div className=" hidden md:flex justify-around absolute left-0 bottom-0 w-full bg-white h-20 p-[0|px]">
              {/* item 1 */}
              <div className=" flex items-center gap-3">
                <div className="h-10 w-10 rounded-full flex justify-center items-center bg-[var(--color-primary)]">
                  <HiMailOpen size={26} />
                </div>
                <div className="text-[var(--color-text)]">
                  <h1>Quick Contact</h1>
                  <p>Email: corbinmechanicals401@gmail.com</p>
                  <p>Phone:tobeupadted</p>
                </div>
              </div>
              {/* item 2 */}
              <div className=" flex items-center gap-3">
                <div className="h-10 w-10 rounded-full flex justify-center items-center bg-[var(--color-primary)]">
                  <HiLocationMarker size={26} />
                </div>
                <div className="text-[var(--color-text)]">
                  <h1>Our Location</h1>
                  <p>pending</p>
                  <p>pending</p>
                </div>
              </div>
              {/* float item  */}
              <div className="bg-[var(--color-primary)] absolute h-[7rem] w-[20rem] p-6 top-[-110px] right-10">
                <p>
                  A Leading Plumber Of A Grade Commercial & Residential Project
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* main end  */}
      </div>
      <section>
        <Services />
      </section>
      <section>
        <Experience />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <Contact />
      </section>
    </main>
  );
}

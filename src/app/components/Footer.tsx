import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdLocationPin } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { HiMailOpen } from "react-icons/hi";
import { AiFillInstagram } from "react-icons/ai";

const Footer: FC = () => {
  return (
    <div className="bg-[var(--color-idan)] p-6 md:px-[10rem]">
      {/* first big div  */}
      <div className="flex gap-4 md:flex-row flex-col justify-between md:items-center mb-6  ">
        {/* image  */}
        <div className="">
          <Image src="/logo.png" width={300} height={300} alt="logo" />
        </div>
        {/* menu  */}
        <div className="">
          <ul className=" gap-4 cursor-pointer">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="https://instagram.com/corbinmechanicalllc?igshid=MzRlODBiNWFlZA==">
                Projects
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/corbinmechanicalllc?igshid=MzRlODBiNWFlZA=="
                target="_blank"
              >
                Blog
              </a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">About US</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 mt-5 ">
          <p className="flex items-center gap-2">
            <MdLocationPin className="text-[var(--color-primary)]" size={26} />{" "}
            To be Updated
          </p>
          <p className="flex items-center gap-2">
            <IoIosCall className="text-[var(--color-primary)]" size={26} /> +to
            be updated
          </p>
          <p className="flex items-center gap-2">
            <HiMailOpen className="text-[var(--color-primary)]" size={26} />{" "}
            corbinmechanical@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <AiFillInstagram
              className="text-[var(--color-primary)]"
              size={26}
            />
            corbinmechanicalllc
          </p>
        </div>
      </div>
      {/* second big div  */}
      <div className="text-[var(--color-text)] justify-start  ">
        <hr className="my-2" />
        <p>© 2023 CORBIN MECHANICAL, All Rights Reserved.</p>
        <p className="text-gray-300">
          We connect you with professional plumbing contractors in your area.
          Please note that Corbin Mechanical does not directly own or operate
          any plumbing services. It is the responsibility of each customer to
          verify that the service provider they are connected with meets all
          necessary licensing and insurance requirements as per their state
          regulations. The images shown are for illustrative purposes only and
          may not represent the plumbing services available in your specific
          region.
        </p>
      </div>
    </div>
  );
};

export default Footer;

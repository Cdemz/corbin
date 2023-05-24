"use client";
import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { IoMdCloseCircle, IoMdContact, IoMdConstruct } from "react-icons/io";
import { HiMailOpen, HiUserGroup } from "react-icons/hi";
import { AiFillInstagram, AiFillHome } from "react-icons/ai";

const NavBar: FC = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className=" fixed top-0 z-40 w-full mb-[5rem] ">
      <div className="bg-[var(--color-bg)] text-[var(--color-text)] relative ">
        <div className=" flex w-[95%] mx-auto p-4 items-center justify-between  ">
          <div>
            <Image
              alt=""
              width={300}
              height={300}
              src="/logo.png"
              className="w-[5rem] h-10"
            />
          </div>
          <nav className="md:flex hidden">
            <ul className="flex gap-4">
              <Link href="/">
                {" "}
                <li>
                  <a href="/">Home</a>
                </li>
              </Link>
              <Link href="/services">
                <li>
                  <a href="">Services</a>
                </li>
              </Link>
              <li>
                <a
                  href="https://instagram.com/corbinmechanicalllc?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                >
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
              <Link href="/contact">
                <li>
                  <a>Contact</a>
                </li>
              </Link>
              <Link href="#about">
                <li>
                  <a href="">About US</a>
                </li>
              </Link>
            </ul>
          </nav>
          <Link href="/contact">
            <button className=" hidden md:flex border-[var(--color-text)] border-4 px-5 py-2 rounded-2xl">
              Free Quote
            </button>
          </Link>

          {/* meun dropdown  */}
          <div onClick={handleNav} className="md:hidden">
            {!nav ? (
              <BiMenuAltRight size={30} />
            ) : (
              <IoMdCloseCircle size={30} />
            )}
          </div>
          {/* end  */}
        </div>
        {/* mobile nav  */}
        <div
          className={
            nav
              ? "md:hidden text-[var(--color-bg)] bg-[var(--color-text)] absolute p-6 items-center  left-[12.3rem] rounded-2xl ease-in-out duration-[1500ms] shadow-lg shadow-black z-40 "
              : "fixed right-[-100%] "
          }
        >
          <nav className=" md:hidden flex   ">
            <ul className="cursor-pointer">
              <Link href="/">
                <li className="flex items-center gap-3">
                  <AiFillHome />
                  <a href="/">Home</a>
                </li>
              </Link>
              <Link href="/services">
                <li className="flex items-center gap-3">
                  <RiServiceLine />
                  <a href="">Services</a>
                </li>
              </Link>
              <li className="flex items-center gap-3">
                <IoMdConstruct />
                <a href="https://instagram.com/corbinmechanicalllc?igshid=MzRlODBiNWFlZA==">
                  Projects
                </a>
              </li>
              <li className="flex items-center gap-3">
                <AiFillInstagram />
                <a
                  href="https://instagram.com/corbinmechanicalllc?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <Link href="/contact">
                <li className="flex items-center gap-3">
                  <IoMdContact />
                  <a href="">Contact</a>
                </li>
              </Link>
              <Link href="#about">
                <li className="flex items-center gap-3">
                  <HiUserGroup />
                  <a href="">About US</a>
                </li>
              </Link>
            </ul>
          </nav>
          <Link href="/contact">
            <button className="border-[var(--color-bg)] border-4 px-5 py-2 rounded-2xl mt-4">
              Get A Quote
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

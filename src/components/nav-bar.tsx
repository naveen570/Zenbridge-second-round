import Image from "next/image";
import React from "react";
import logo from "../../public/logo.webp";
import Link from "next/link";
const NavBar = () => {
  const links = [
    {
      name: "About Us",
      href: "/",
      subNav: true,
    },
    {
      name: "Products",
      href: "/",
      subNav: true,
    },
    {
      name: "Solutions",
      href: "/",
      subNav: true,
    },
    {
      name: "Pricing",
      href: "/",
    },
    {
      name: "Developers",
      href: "/",
    },
    {
      name: "Resources",
      href: "/",
      subNav: true,
    },
  ];
  return (
    <nav className="sticky py-5 px-4 md:px-16 bg-dark-violet-100 shadow-lg top-0 text-white text-sm z-20">
      <div className="container flex items-center justify-between">
        <Image
          src={logo}
          alt="Logo"
          width={50}
          height={50}
          className="w-32 h-12"
        />
        <ul className="gap-5 items-center lg:flex hidden">
          {links.map((link) => (
            <li
              key={link.name}
              className="cursor-pointer flex items-center gap-5"
            >
              <Link href={link.href}>{link.name}</Link>
              {link.subNav && (
                <Image
                  src={"/down-arrow.svg"}
                  width={10}
                  height={10}
                  alt="Arrow"
                />
              )}
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex items-center gap-4">
          <button className="px-6 py-2 rounded-lg bg-linear-gradient self-center lg:self-start font-semibold flex items-center gap-2">
            Contact Sales
            <Image
              src={"/down-arrow.svg"}
              width={10}
              height={10}
              alt="Arrow"
              className="-rotate-90"
            />
          </button>
          <button className="px-6 py-2 rounded-lg font-bold border border-white/80">
            <span className="bg-linear-gradient bg-clip-text text-transparent">
              Login
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

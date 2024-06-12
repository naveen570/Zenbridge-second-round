import Link from "next/link";
import React from "react";

const Footer = () => {
  const NavLinks = [
    {
      id: 1,
      header: "Solutions",
      links: [
        {
          id: 1,
          name: "Developers",
          url: "/",
        },
        {
          id: 2,
          name: "EDI vs API",
          url: "/",
        },
        {
          id: 3,
          name: "API for EDI",
          url: "/",
        },
        {
          id: 4,
          name: "Security",
          url: "/",
        },
        {
          id: 5,
          name: "EDI Software - Decision making guide",
          url: "/",
        },
      ],
    },
    {
      id: 2,
      header: "Integrations",
      links: [
        {
          id: 1,
          name: "NetSuite Integration",
          url: "/",
        },
        {
          id: 2,
          name: "Shopify Integration",
          url: "/",
        },
        {
          id: 3,
          name: "Quickbooks Integration",
          url: "/",
        },
        {
          id: 4,
          name: "Other ERP Integrations",
          url: "/",
        },
      ],
    },
    {
      id: 3,
      header: "Standards",
      links: [
        {
          id: 1,
          name: "API for EDIFACT",
          url: "/",
        },
        {
          id: 2,
          name: "API for ANSI X12",
          url: "/",
        },
        {
          id: 3,
          name: "Pricing",
          url: "/",
        },
      ],
    },
    {
      id: 3,
      header: "Resources",
      links: [
        {
          id: 1,
          name: "Blog",
          url: "/",
        },
        {
          id: 2,
          name: "Documentation",
          url: "/",
        },
      ],
    },
    {
      id: 4,
      header: "Company",
      links: [
        {
          id: 1,
          name: "Home",
          url: "/",
        },
        {
          id: 2,
          name: "About us",
          url: "/",
        },
        {
          id: 3,
          name: "Careers",
          url: "/",
        },
        {
          id: 4,
          name: "Insights",
          url: "/",
        },
        {
          id: 5,
          name: "Contact us",
          url: "/",
        },
      ],
    },
  ];
  return (
    <footer className="py-16 px-4 md:px-16 bg-dark-violet">
      <div className="container grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-5 lg:justify-items-center mb-8">
        {NavLinks.map((item) => (
          <div
            key={`${item.header}-${item.id}`}
            className="col-span-1 flex flex-col gap-6 text-white"
          >
            <h3 className="text-md font-bold">{item.header}</h3>
            <ul className="flex flex-col gap-4">
              {item.links.map((link) => (
                <li
                  key={`${item.header}-${link.id}`}
                  className="text-xs text-white/80"
                >
                  <Link href={link.url}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-0 lg:justify-between text-xs text-primary">
        <span className="">© 2024. All rights reserved.</span>
        <div className="flex items-center gap-5">
          <Link href={"/"}>Privacy policy</Link>
          <Link href={"/"}>Terms of service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

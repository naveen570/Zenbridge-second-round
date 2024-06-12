import React from "react";
import Marquee from "react-fast-marquee";
import customerLogo from "../../public/customer-logo.png";
import Image from "next/image";
const Customers = () => {
  return (
    <Marquee
      speed={100}
      autoFill
      gradient
      gradientColor="#e82a82"
      className="bg-linear-gradient"
    >
      <div className="flex items-center gap-10 mr-10 py-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <Image
            src={customerLogo}
            alt="Customer Logo"
            width={100}
            height={80}
            key={`marquee-logo-${index}`}
          />
        ))}
      </div>
    </Marquee>
  );
};

export default Customers;

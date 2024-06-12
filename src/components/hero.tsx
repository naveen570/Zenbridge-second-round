import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <header className="min-h-screen grid place-items-center bg-dark-violet-100 px-4 md:px-16 pb-32">
      <div className="container">
        <div className="flex flex-col gap-6 lg:flex-row justify-between items-center text-center lg:text-left">
          <div className="flex flex-col gap-6 lg:w-1/2 order-2 lg:order-1">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-wide leading-snug">
              Slay your EDI
              <br />
              <span className="bg-linear-gradient bg-clip-text text-transparent">
                Integrate Faster
              </span>
            </h1>
            <p className="text-xl">
              Leverage the power of API technology faster integrations, greater
              data accuracy, global connectivity & total automation.
            </p>
            <button className="px-6 py-2 rounded-lg bg-linear-gradient self-center lg:self-start font-semibold">
              Schedule a free demo
            </button>
          </div>
          <Image
            src={"/hero-image.png"}
            width={500}
            height={300}
            alt="hero-image"
            className="order-1 lg:order-2"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;

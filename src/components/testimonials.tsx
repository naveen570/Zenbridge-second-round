import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-dark-violet-100">
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 container">
        <Image
          src={"/testimonial.png"}
          alt="Testimonial"
          width={150}
          height={150}
          className="rounded-full size-40 object-contain"
        />
        <div className="flex flex-col gap-6 lg:w-2/5 text-center lg:text-left">
          <h3 className="text-xl font-bold">
            Not just our technology, we are loved for <br />
            <span className="text-primary"> EDI support</span> our too
          </h3>
          <div className="flex flex-col gap-4">
            <p className="text-sm max-w-[43ch]">
              We use Zenbridge as middleware for the end to end sales cycle.The
              customer service and developer resource(s) we have partnered with
              have been exceptional.
            </p>
            <span className="text-xs text-primary">
              Seth V, Senior Director, Operations & Logistics
            </span>
          </div>
        </div>
        <Image
          src={"/badges.png"}
          alt="Testimonial"
          width={150}
          height={150}
          className="w-72 lg:ml-auto"
        />
      </div>
    </section>
  );
};

export default Testimonials;

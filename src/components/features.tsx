import React from "react";
import Feature from "./feature";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Faster & stabler integrations",
      description:
        "Our API eliminates EDI complexities using a very rich modern developer toolset, resulting in faster EDI integrations & production environments that are 10X stabler than typical EDI solutions.",
    },
    {
      id: 2,
      title: "Global connectivity",
      description:
        "Zenbridge is the only platform that offers API for X12 and EDIFACT EDI standards. No matter which part of the world or industry your trading partner belongs to, you are all set for EDI connectivity.",
    },
    {
      id: 3,
      title: "Real time data validation",
      description:
        "Unlike traditional EDI solutions, API can validate data for partner specific compliances in real time, saving hundreds of manual hours lost in communication & thousands of dollars lost as chargebacks.",
    },
    {
      id: 4,
      title: "Faster & stabler integrations",
      description:
        "Zenbridge offers you a delivery manager who manages trading partners & monitors issues with unlimited developer support 24X7 chat, email & phone connectivity. No more EDI support frustrations",
    },
  ];
  return (
    <section className="py-16 px-4 md:px-16">
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        <div className="col-span-1 lg:col-span-2 bg-dark-violet p-8 rounded-3xl flex flex-col justify-center gap-6">
          <h2 className="text-3xl font-bold">
            We are on a mission to make
            <br /> <span className="text-primary">integration</span> easy
          </h2>
          <p className="max-w-[50ch]">
            An EDI platform for all retailers, suppliers, manufacturers,
            transportation, 3PLs & developers.
          </p>
        </div>
        {features.map((feature) => (
          <Feature key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;

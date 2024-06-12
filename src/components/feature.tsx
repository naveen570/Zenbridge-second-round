import Image from "next/image";
import React from "react";
import rocket from "../../public/rocket.svg";
const Feature = (props: { title: string; description: string }) => {
  return (
    <div className="col-span-1 p-8 rounded-3xl flex flex-col gap-6 text-dark-grey shadow-lg">
      <div className="p-3 rounded-lg shadow-lg self-start">
        <Image width={24} height={24} src={rocket} alt="Rocket" />
      </div>
      <h3 className="text-xl font-bold">{props.title}</h3>
      <p className="text-sm">{props.description}</p>
    </div>
  );
};

export default Feature;

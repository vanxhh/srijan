import React from "react";
import { sponsors } from "../constants";
import Image from "next/image";

const sponsor = () => {
  return (
    <div className="container px-6 mx-auto pt-12 pb-4 bg-white">
      <section className="mb-8 text-black text-center">
        <h2 className="text-xl md:text-3xl font-bold mb-16 text-black capitalize">
          Our Sponsors
        </h2>

        <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-x-6 lg:gap-xl-12">
          {sponsors.map((member) => (
            <div className="mb-12" key={member.name}>
              <Image
                src={member.image}
                className="rounded-full mx-auto shadow-lg max-w-[100px]"
                alt={member.name}
                width={150}
                height={150}
                style={{ objectFit: "cover" }}
              />

              <p className="font-bold mb-2 text-xl">{member.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default sponsor;

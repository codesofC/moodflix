import { ALLMOODS } from "@/constant";
import Image from "next/image";
import React from "react";

const Loader = () => {

    const randomInt = Math.floor(Math.random() * ALLMOODS.length)

  return (
    <div className="flex flex-col gap-1 items-center justify-center w-full mt-32 font-semibold text-secondary-foreground">
      <div className="size-16">
        <Image
          src={ALLMOODS[randomInt].url}
          alt="loading..."
          width={120}
          height={120}
          className="w-full object-contain"
        />
      </div>
      <span> Loading... </span>
    </div>
  );
};

export default Loader;

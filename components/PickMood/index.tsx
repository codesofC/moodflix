import { useState } from "react";
import { Button } from "../ui/button";
import MoodButton from "./MoodButton";
import { MoodProps } from "@/types";
import { ALLMOODS } from "@/constant";
import Image from "next/image";

const PickMood = () => {
  const [actualMood, setActualMood] = useState<MoodProps>(ALLMOODS[0]);
  const [achieveMood, setAchieveMood] = useState<MoodProps>(
    ALLMOODS[ALLMOODS.length - 1]
  );

  return (
    <div className="relative w-full lg:w-4/5 xl:w-3/5 h-[40vh] mx-auto rounded-bl-lg rounded-br-lg overflow-hidden">
      <Image 
        src="https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2018/02/1024/512/25c77ae0-netflix-stock-nflx_large-83e04233b87d7510VgnVCM100000d7c1a8c0____.png?ve=1&tl=1"
        alt="banner"
        width={1280}
        height={1280}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full px-6 lg:px-8 py-8 border-b flex flex-col items-center justify-center gap-16 bg-black/85">
        <div className="w-full flex items-center justify-between px-12 sm:justify-center sm:gap-32">
          <div className="flex flex-col gap-2 items-center cursor-pointer">
            <h3 className="text-lg text-white font-bold"> From: </h3>
            <MoodButton item={actualMood} handleMood={setActualMood} />
          </div>

          <div className="flex flex-col gap-2 items-center cursor-pointer">
            <h3 className="text-lg text-white font-bold"> To: </h3>
            <MoodButton item={achieveMood} handleMood={setAchieveMood} />
          </div>
        </div>

        <Button className="text-xl py-6 px-12 rounded-full">Search</Button>
      </div>
    </div>
  );
};

export default PickMood;

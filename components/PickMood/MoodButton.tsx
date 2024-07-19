import Image from "next/image";
import { Popover, PopoverTrigger } from "../ui/popover";
import PopOverMood from "./PopOverMood";
import { ButtonMoodPros, MoodProps } from "@/types";
import { useState } from "react";

const MoodButton = (props: ButtonMoodPros) => {

  const [openPopOver, setOpenPopOver] = useState(false)
  const { item, handleMood } = props

  const handleStateFn = (newMood: MoodProps) => {
    handleMood(newMood)
    setOpenPopOver(prev => !prev)
  }

  return (
    <Popover open={openPopOver} onOpenChange={setOpenPopOver}>
      <PopoverTrigger className="flex flex-col items-center">
        <div className="size-12 sm:size-16 md::size-20">
          <Image
            src={item.url}
            alt={item.title}
            width={120}
            height={120}
            className="w-full object-contain"
          />
        </div>
        <h4 className="text-sm font-semibold text-white"> {item.title} </h4>
      </PopoverTrigger>
      <PopOverMood handleMood={handleStateFn} />
    </Popover>
  );
};

export default MoodButton;

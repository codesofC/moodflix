import Image from "next/image";
import { Popover, PopoverTrigger } from "../ui/popover";
import PopOverMood from "./PopOverMood";

const MoodButton = (props: { url: string; title: string }) => {
  return (
    <Popover>
      <PopoverTrigger className="flex flex-col gap-1 items-center">
        <div className="size-20">
          <Image
            src={props.url}
            alt={props.title}
            width={120}
            height={120}
            className="w-full object-contain"
          />
        </div>
        <h4 className="text-sm font-semibold"> {props.title} </h4>
      </PopoverTrigger>
      <PopOverMood />
    </Popover>
  );
};

export default MoodButton;

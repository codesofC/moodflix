import Image from "next/image";
import { Button } from "./ui/button";

const PickHumor = () => {
  return (
    <div className="w-full px-6 lg:px-8 py-8 border-b flex flex-col items-center justify-center gap-16">
      <div className="flex items-center justify-center gap-96">
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <h3 className="text-lg font-bold"> From: </h3>
          <div className="size-20">
            <Image
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Anxious%20Face%20with%20Sweat.png"
              alt="Anxious Face with Sweat"
              width={120}
              height={120}
              className="w-full object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <h3 className="text-lg font-bold"> To: </h3>
          <div className="size-20">
            <Image
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Beaming%20Face%20with%20Smiling%20Eyes.png"
              alt="Beaming Face with Smiling Eyes"
              width={120}
              height={120}
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>

      <Button className="text-xl py-6 px-12 rounded-full">
        Search
      </Button>
    </div>
  );
};

export default PickHumor;

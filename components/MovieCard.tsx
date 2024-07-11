'use client'

import { Card } from "./ui/card";
import Image from "next/image";
import { Star } from "lucide-react";
import { Credenza, CredenzaTrigger } from "./ui/credenza";
import Modal from "./Modal";

const MovieCard = (props: { url: string }) => {
  return (
    <Credenza>
      <CredenzaTrigger asChild>
        <Card className="cursor-pointer shadow-lg overflow-hidden">
          <div className="relative w-full overflow-hidden">
            <Image
              src={props.url}
              alt="title"
              width={500}
              height={500}
              className="w-full object-cover aspect-square"
            />
          </div>
          <div className="w-full flex flex-col gap-2 p-4">
            <div className="flex items-center justify-between">
              <span className="max-w-[80%] flex flex-wrap">
                {" "}
                Lords of rings{" "}
              </span>
              <span> 2h:22mn </span>
            </div>
            <div className="text-sm text-secondary-foreground/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              harum tenetur laudantium quisquam praesentium deleniti dolores
              ullam...
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="size-6 rounded-full overflow-hidden">
                  <Image
                    src="https://static.vecteezy.com/system/resources/previews/017/396/804/non_2x/netflix-mobile-application-logo-free-png.png"
                    alt="platforme"
                    width={120}
                    height={120}
                    className="w-full object-cover aspect-square"
                  />
                </div>
                <div className="size-6 rounded-full overflow-hidden">
                  <Image
                    src="https://1000logos.net/wp-content/uploads/2022/10/Amazon-Prime-Video-Icon.png"
                    alt="platforme"
                    width={120}
                    height={120}
                    className="w-full object-cover aspect-square"
                  />
                </div>
                <div className="size-6 rounded-full overflow-hidden">
                  <Image
                    src="https://i.pinimg.com/736x/dc/5f/ee/dc5fee0189b193c8ebf8e19076ad56f0.jpg"
                    alt="platforme"
                    width={120}
                    height={120}
                    className="w-full object-cover aspect-square"
                  />
                </div>
              </div>
              <span className="flex gap-1 items-center">
                <Star strokeWidth={1} fill="yellow" />
                4.5
              </span>
            </div>
          </div>
        </Card>
      </CredenzaTrigger>
      <Modal />
    </Credenza>
  );
};

export default MovieCard;

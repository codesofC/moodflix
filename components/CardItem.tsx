'use client'

import { Card } from "./ui/card";
import Image from "next/image";
import { Star } from "lucide-react";
import { Credenza, CredenzaTrigger } from "./ui/credenza";
import Modal from "./Modal";
import { CardItemProps } from "@/types";
import Link from "next/link";
import { getPlatformLogo } from "@/constant";

const CardItem = (props: CardItemProps) => {

  const {platforms, synopsis, poster, title, rating} = props;

  return (
    <Credenza>
      <CredenzaTrigger asChild>
        <Card className="cursor-pointer shadow-lg overflow-hidden">
          <div className="relative w-full h-[20vh] overflow-hidden">
            <Image
              src={poster}
              alt="title"
              width={1200}
              height={1200}
              className="w-full h-full object-cover aspect-square"
            />
          </div>
          <div className="w-full flex flex-col gap-2 p-4">
            <div className="flex items-center justify-between">
              <span className="max-w-[80% line-clamp-1">
                {" "}
                {title}{" "}
              </span>
            </div>
            <div className="text-sm text-secondary-foreground/80 line-clamp-3">
              {synopsis}
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
              {platforms.map((item, index) => (
                    <Link href={item.link} target="_blank" key={index} className="overflow-hidden">
                      {getPlatformLogo(item.name) ? (
                        <Image
                        src={getPlatformLogo(item.name) || ""}
                        alt="platforme"
                        width={120}
                        height={120}
                        className="size-8 object-contain"
                      />
                      ) : (
                        <span className="bg-primary text-primary-foreground text-sm py-2 px-4"> {item.name} </span>
                      )}
                    </Link>
                  ))}
                
              </div>
              <span className="flex gap-1 items-center">
                <Star strokeWidth={1} fill="yellow" />
                {rating}
              </span>
            </div>
          </div>
        </Card>
      </CredenzaTrigger>
      <Modal {...props} />
    </Credenza>
  );
};

export default CardItem;

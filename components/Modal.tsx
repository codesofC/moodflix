import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/ui/credenza";
import { Star } from "lucide-react";
import Image from "next/image";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { CardItemProps } from "@/types";
import Link from "next/link";

const Modal = (props: CardItemProps) => {
  const {
    platforms,
    synopsis,
    poster,
    title,
    rating,
    director,
    starring,
    trailer,
  } = props;

  return (
    <CredenzaContent className="bg-background border border-background">
      <CredenzaHeader>
        <CredenzaTitle>Details</CredenzaTitle>
      </CredenzaHeader>
      <CredenzaBody className="flex flex-col gap-6">
        <div className="relative w-full max-h-[300px] overflow-hidden">
          <Image
            src={poster}
            alt="title"
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <div className="w-full flex justify-between gap-4">
              <div className="max-w-[80%] flex items-center gap-1">
                <span className="flex flex-wrap"> {title} | </span>
                <span className="text-xs"> 2h:22mn </span>
              </div>
              <div className="flex flex-wrap text-sm">
                Drame, Action, etc...
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-sm text-secondary-foreground/80">
                <h3 className="text-sm font-bold"> Synopsis </h3>
                <p className="font-normal text-justify">{synopsis}</p>
              </div>
              <div>
                <div className="flex gap-1 text-sm">
                  <span className="font-semibold">Starring: </span>
                  <span> {starring} </span>
                </div>
                <div className="flex gap-1 text-sm">
                  <span className="font-semibold">Director: </span>
                  <span> {director} </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-bold"> Platforms availables </h3>
              <div className="flex items-center gap-2">
                  {platforms.map((item, index) => (
                    <Link href={item.link} key={index} className="size-10 overflow-hidden">
                      <Image
                        src="https://1000logos.net/wp-content/uploads/2022/10/Amazon-Prime-Video-Icon.png"
                        alt="platforme"
                        width={120}
                        height={120}
                        className="w-full object-cover aspect-square"
                      />
                    </Link>
                  ))}
            </div>
            </div>
            <div className="flex items-center gap-1">
              <Star strokeWidth={1} fill="yellow" />
              <span className="font-bold"> {rating} </span>
            </div>
          </div>
        </div>
      </CredenzaBody>
    </CredenzaContent>
  )
};

export default Modal;

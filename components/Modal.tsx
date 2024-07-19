import {
  CredenzaBody,
  CredenzaContent,
  CredenzaHeader,
  CredenzaTitle,
} from "@/components/ui/credenza";
import { Play, Star, Youtube } from "lucide-react";
import Image from "next/image";
import { CardItemProps } from "@/types";
import Link from "next/link";
import { getPlatformLogo } from "@/constant";
import { useTheme } from "@/context/theme/useTheme";

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
    genre,
    type,
    year
  } = props;

  const { theme } = useTheme();

  return (
    <CredenzaContent
      className={`${
        theme === "dark"
          ? "bg-foreground text-white border border-foreground"
          : "bg-background"
      }`}
    >
      <CredenzaHeader>
        <CredenzaTitle>Details</CredenzaTitle>
      </CredenzaHeader>
      <CredenzaBody className="relative flex flex-col gap-6">
        <div className="relative w-full max-h-[300px] flex items-center justify-center overflow-hidden rounded-md">
          <Image
            src={poster}
            alt={title}
            width={1400}
            height={800}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <div className="w-full flex justify-between gap-4">
              <div className="max-w-[80%] flex items-center gap-1">
                <span className="flex flex-wrap"> {title} | </span>
                <span className="text-xs"> {type} </span>
              </div>
              <Link
                href={trailer}
                target="_blank"
                className="flex items-center flex-wrap text-sm bg-primary text-white py-2 px-4 rounded-md gap-1"
              >
                <span>Trailer</span>
                <Youtube />
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <div className="space-y-2">
                <div className="text-sm">
                  <h3 className="text-sm font-bold"> Synopsis </h3>
                  <p className="font-normal text-justify">{synopsis}</p>
                </div>
                <div className="text-sm flex gap-2">
                  <h3 className="text-sm font-bold"> Year: </h3>
                  <p className="font-normal text-justify">{year}</p>
                </div>
                <div className="text-sm flex gap-2">
                  <h3 className="text-sm font-bold"> Gender: </h3>
                  <p className="font-normal text-justify">{genre}</p>
                </div>
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
                  <Link
                    href={item.link}
                    target="_blank"
                    key={index}
                    className="overflow-hidden"
                  >
                    {getPlatformLogo(item.name) ? (
                      <Image
                        src={getPlatformLogo(item.name) || ""}
                        alt="platforme"
                        width={120}
                        height={120}
                        className="size-10 rounded-md object-contain aspect-square"
                      />
                    ) : (
                      <span className="bg-primary text-primary-foreground text-sm py-2 px-4">
                        {" "}
                        {item.name}{" "}
                      </span>
                    )}
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
  );
};

export default Modal;

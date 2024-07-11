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

const Modal = () => {
  return (
    <CredenzaContent className="bg-background border border-background">
      <CredenzaBody className="flex flex-col gap-4">
        <div className="relative w-full max-h-[300px] overflow-hidden">
          <Image
            src="https://musicart.xboxlive.com/7/78985000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
            alt="title"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full flex justify-between gap-2">
          <div className="max-w-[80%] flex flex-col gap-1">
            <span className="flex flex-wrap"> Lords of rings </span>
            <span> 2h:22mn </span>
          </div>
          <div>Drame, Action, etc...</div>
        </div>
        <div className="text-sm text-secondary-foreground/80">
          <h3 className="text-sm font-bold"> Synopsis </h3>
          <p className="font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam harum
            tenetur laudantium quisquam praesentium deleniti dolores ullam...
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-bold"> Platforms availables </h3>
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
        </div>
      </CredenzaBody>
      <CredenzaFooter>
        <CredenzaClose asChild>
          <Button> Close </Button>
        </CredenzaClose>
      </CredenzaFooter>
    </CredenzaContent>
  );
};

export default Modal;

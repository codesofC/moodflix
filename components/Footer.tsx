'use client'

import { useTheme } from "@/context/theme/useTheme";
import { cn } from "@/lib/utils";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {

  const { theme } = useTheme()
  
  return (
    <footer className={cn("w-full py-2 px-6 flex flex-col gap-2 items-center border-t", theme === "dark" && "bg-secondary-foreground text-secondary")}>
      <p className="flex gap-4">
        <Link href="https://www.github.com/codesofC" target="_blank">
          <Github size={20} />
        </Link>
        <Link href="https://www.linkedin.com/in/judelininelus" target="_blank">
          <Linkedin size={20} />
        </Link>
      </p>
      <p className="text-sm sm:text-md">
        Build by Judelin Inélus - &copy; 2024
      </p>
    </footer>
  );
};

export default Footer;

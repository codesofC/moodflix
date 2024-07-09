'use client'

import Navbar from "@/components/Navbar";
import { useTheme } from "@/context/theme/useTheme";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {

  const {theme} = useTheme()

  return (
    <main className={cn(theme, "bg-background min-h-screen")}>
      <Navbar />
    </main>
  );
}

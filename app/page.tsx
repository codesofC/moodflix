'use client'

import MovieCard from "@/components/MovieCard";
import Navbar from "@/components/Navbar";
import PickHumor from "@/components/PickHumor";
import { useTheme } from "@/context/theme/useTheme";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {

  const {theme} = useTheme()

  return (
    <main className={cn(theme, "bg-background min-h-screen")}>
      <Navbar />
      <PickHumor />
      <div className="w-full px-8 py-4 grid grid-cols-5 items-center gap-6">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </main>
  );
}

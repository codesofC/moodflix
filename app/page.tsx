"use client";

import Navbar from "@/components/Navbar";
import { useTheme } from "@/context/theme/useTheme";
import { cn } from "@/lib/utils";
import PickMood from "@/components/PickMood";
import CardItem from "@/components/CardItem";
import { CardItemProps } from "@/types";
import { useGlobalContext } from "@/context/globalContext/useGlobalContext";

export default function Home() {
  const { theme } = useTheme();
  const { isLoading, allShows } = useGlobalContext();

  return (
    <main className={cn(theme, "bg-background min-h-screen")}>
      <Navbar />
      <PickMood />
      <div className="space-y-4 px-6 lg:px-32 xl:px-64 2xl:px-96 py-4 mt-12">
        <h2 className="text-xl font-bold text-secondary-foreground"> Enjoy yourself with: </h2>
        {!isLoading ? (
          allShows.length > 0 ? (
            <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 items-center gap-6">
              {allShows.map((item: CardItemProps) => (
                <CardItem key={item.uid} {...item} />
              ))}
            </div>
          ) : (
            <div className="w-full mt-16 text-xl font-bold text-center">
              Let me make you in <strong>mood</strong>
            </div>
          )
        ) : (
          <div className="w-full mt-20 text-center font-bold">Loading...</div>
        )}
      </div>
    </main>
  );
}

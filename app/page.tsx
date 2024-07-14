'use client'

import Navbar from "@/components/Navbar";
import { useTheme } from "@/context/theme/useTheme";
import { cn } from "@/lib/utils";
import PickMood from "@/components/PickMood";
import { useEffect } from "react";
import  {generateListItems}  from "./action";
import { Button } from "@/components/ui/button";
import CardItem from "@/components/CardItem";
import data from "../constant/data.json"
import { CardItemProps } from "@/types";

export default function Home() {

  const {theme} = useTheme()

  
  const fecth = async () => {
    const data = await generateListItems()

    console.log(data);
  }
  
  return (
    <main className={cn(theme, "bg-background min-h-screen")}>
      <Navbar />
      {/* <Button onClick={fecth}> Call </Button> */}
      <PickMood />
      <div className="w-full px-6 lg:px-32 xl:px-64 2xl:px-96 py-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 items-center gap-6">
        
        {data.recomendations.map((item: CardItemProps) => (
          <CardItem key={item.uid} {...item} />
        ))}
      </div>
    </main>
  );
}
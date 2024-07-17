'use client'

import Navbar from "@/components/Navbar";
import { useTheme } from "@/context/theme/useTheme";
import { cn } from "@/lib/utils";
import {uuid as uuidv4} from "uuidv4"
import PickMood from "@/components/PickMood";
import { useEffect, useState } from "react";
import  {generateListItems, getShow}  from "./action";
import { Button } from "@/components/ui/button";
import CardItem from "@/components/CardItem";
import { CardItemProps } from "@/types";

export default function Home() {

  const [allShows, setAllShows] = useState<CardItemProps []>([])

  const [isLoading, setIsLoading] = useState(false)

  const {theme} = useTheme()

  
  
  if(isLoading) {
    return (
      <div className="w-full mt-20 text-center font-bold">
        Loading...
      </div>
    )
  }
  
  return (
    <main className={cn(theme, "bg-background min-h-screen")}>
      <Navbar />
      <Button onClick={fecth}> Call </Button>
      <PickMood />
      {allShows.length > 0 ? (<div className="w-full px-6 lg:px-32 xl:px-64 2xl:px-96 py-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 items-center gap-6">
        
        {allShows.map((item: CardItemProps) => (
          <CardItem key={item.uid} {...item} />
        ))}
      </div>) : (
          <div className="w-full mt-16 text-xl font-bold text-center">
            Let me make you in <strong>mood</strong>
          </div>
      )}
    </main>
  );
}
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
import data from "../constant/data.json"
import { CardItemProps } from "@/types";

export default function Home() {

  const [allShows, setAllShows] = useState<CardItemProps []>([])

  const {theme} = useTheme()

  
  const fecth = async () => {
    try {
      const res = await generateListItems()
      console.log(res);
      res.results.forEach(async (item) => {
        const response = await getShow(item.title);
        console.log(response);
        setAllShows(prev => ([
          ...prev, 
          {
            title: item.title,
            trailer: item.trailer,
            synopsis: response.Plot,
            poster: response.Poster,
            director: response.Director,
            starring: response.Actors,
            platforms: item.platforms,
            rating: item.rating,
            uid: uuidv4()
          }
        ]))
      });
    } catch (error) {
      console.log("Error AI generating: ", error);
    }
  }
  
  return (
    <main className={cn(theme, "bg-background min-h-screen")}>
      <Navbar />
      <Button onClick={fecth}> Call </Button>
      <PickMood />
      <div className="w-full px-6 lg:px-32 xl:px-64 2xl:px-96 py-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 items-center gap-6">
        
        {allShows.length > 0 ? allShows.map((item: CardItemProps) => (
          <CardItem key={item.uid} {...item} />
        )) : (
          <div className="mt-16 text-xl font-bold text-center">
            Loading ...
          </div>
        )}
      </div>
    </main>
  );
}
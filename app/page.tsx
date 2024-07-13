'use client'

import MovieCard from "@/components/MovieCard";
import Navbar from "@/components/Navbar";
import { useTheme } from "@/context/theme/useTheme";
import { cn } from "@/lib/utils";
import PickMood from "@/components/PickMood";
import { useEffect } from "react";
import  generateListItems  from "./action";
import { Button } from "@/components/ui/button";

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
      <div className="w-full px-6 lg:px-32 py-4 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-center gap-6">
        
        <MovieCard url="https://musicart.xboxlive.com/7/78985000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080" />
        <MovieCard url="https://imusic.b-cdn.net/images/item/original/514/7340112752514.jpg?star-wars-2020-star-wars-episode-3-revenge-of-the-sith-dvd&class=scaled&v=1582709206"/>
        <MovieCard url="https://br.web.img2.acsta.net/pictures/18/11/06/15/36/0408812.jpg" />
        <MovieCard url="https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2023/03/02/621807462-die-hart-2-die-harter.jpg" />
        <MovieCard url="https://musicart.xboxlive.com/7/78985000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080" />
        <MovieCard url="https://imusic.b-cdn.net/images/item/original/514/7340112752514.jpg?star-wars-2020-star-wars-episode-3-revenge-of-the-sith-dvd&class=scaled&v=1582709206" />
      </div>
    </main>
  );
}
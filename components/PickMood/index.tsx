import { useState } from "react";
import { Button } from "../ui/button";
import MoodButton from "./MoodButton";
import { MoodProps } from "@/types";
import { ALLMOODS } from "@/constant";
import Image from "next/image";
import { generateListItems, getShow } from "@/app/action";
import { useGlobalContext } from "@/context/globalContext/useGlobalContext";
import { nanoid } from "nanoid";

const PickMood = () => {
  const [actualMood, setActualMood] = useState<MoodProps>(ALLMOODS[0]);
  const [achieveMood, setAchieveMood] = useState<MoodProps>(
    ALLMOODS[ALLMOODS.length - 1]
  );

  const { setIsLoading, setAllShows, setError } = useGlobalContext();

  const fecthDatasMoods = async () => {
    try {
      setAllShows([]);
      setIsLoading(true);
      const res = await generateListItems({
        from: actualMood.title,
        to: achieveMood.title,
      });
      res.results.forEach(async (item) => {
        const response = await getShow(item.title);
        setAllShows((prev) => [
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
            genre: response.Genre,
            type: response.Type,
            year: response.Year,
            uid: nanoid(),
          },
        ]);
      });
    } catch (error) {
      setError("The gemini api quota limit has been reached.")
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full lg:w-4/5 xl:w-3/5 h-[40vh] mx-auto rounded-bl-lg rounded-br-lg overflow-hidden">
      <Image
        src="https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2018/02/1024/512/25c77ae0-netflix-stock-nflx_large-83e04233b87d7510VgnVCM100000d7c1a8c0____.png?ve=1&tl=1"
        alt="banner"
        width={1280}
        height={1280}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full px-6 lg:px-8 py-8 border-b flex flex-col items-center justify-center gap-4 md:gap-6 bg-black/85">
        <h1 className="text-lg sm:text-xl md:text-2xl text-white font-bold text-center">Feel Better, Watch Better with MoodFlix</h1>
        <div className="w-full flex items-center justify-between px-12 sm:justify-center sm:gap-32">
          <div className="flex flex-col gap-2 items-center cursor-pointer">
            <h3 className="md:text-lg text-white font-bold"> From: </h3>
            <MoodButton item={actualMood} handleMood={setActualMood} />
          </div>

          <div className="flex flex-col gap-2 items-center cursor-pointer">
            <h3 className="md:text-lg text-white font-bold"> To: </h3>
            <MoodButton item={achieveMood} handleMood={setAchieveMood} />
          </div>
        </div>

        <Button
          className="sm:text-xl p-4 sm:p-6 rounded-xl mt-4 md:mt-8"
          onClick={fecthDatasMoods}
        >
          Match My Mood
        </Button>
      </div>
    </div>
  );
};

export default PickMood;

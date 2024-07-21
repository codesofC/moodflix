import { MoodsFetchingProps } from "@/types";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateObject } from "ai";
import { z } from "zod";

//Call to AI API to get the shows based in the user's entries
export const generateListItems = async (moods: MoodsFetchingProps) => {
    const google = createGoogleGenerativeAI({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    });

    const obj = z.object({
        title: z.string().describe("Represent the movie's name"),
        trailer: z.string().describe("Represent the trailer's link youtube"),
        platforms: z.array(z.object({
            name: z.string().describe("Represent the name of the platform"),
            link: z.string().describe("the link of this platform")
        })).describe("Represent the all platforms where this show is available"),
        rating: z.number().describe("Represent the rating of this out of 5.")
    })

    const result = await generateObject({
        model: google("models/gemini-1.5-pro-latest", {
            
        }),
        system: "You are a expert in recommending TV shows such as movies, series, animes, documentary, reality TV. Your job is to make 5 recommandations of what to watch to the user based on their current mood and the mood he wants to reach after watch. You must do an analysis of the moods described by the user to make a recommendation that is as personalized as possible. For this, you will receive from the user the following data: current mood, mood to achieve.",
        prompt: `Make 5 recommandation for a current mood: ${moods.from}; mood to achieve: ${moods.to}`,
        schema: z.object({
            results: z.array(obj).describe("Array with movie objects"),
          })
    });

    return result.object;
}

//Call API to get all data to complete the shows datas
export const getShow = async (name: string) => {
    const res = await fetch(`https://www.omdbapi.com/?t=${name}&apikey=${process.env.NEXT_PUBLIC_OMBD_API_KEY}`)

    const result = await res.json()

    return result
}
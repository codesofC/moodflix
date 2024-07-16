import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateObject, generateText, streamText } from "ai";
import { z } from "zod";


export const generateListItems = async () => {
    const google = createGoogleGenerativeAI({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY
    });

    const obj = z.object({
        title: z.string().describe("Represent the movie's name"),
        trailer: z.string().describe("Represent the youtube link to the trailer for the show"),
        platforms: z.array(z.object({
            name: z.string().describe("Represent the name of the platform"),
            link: z.string().describe("the link of this platform")
        })).describe("Represent the platforms where this show is available"),
        rating: z.number().describe("Represent the rating of this out of 5.")
    })

    const result = await generateObject({
        model: google("models/gemini-1.5-pro-latest"),
        prompt: "Recomand 2 movies name I can wacth",
        schema: z.object({
            results: z.array(obj).describe("Array with movie objects"),
          })
    });

    return result.object;
}

export const getShow = async (name: string) => {
    const res = await fetch(`https://www.omdbapi.com/?t=${name}&apikey=${process.env.NEXT_PUBLIC_OMBD_API_KEY}`)

    const result = await res.json()

    return result
}
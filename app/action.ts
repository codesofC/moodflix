"use server";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText, streamText } from "ai";


export default async function generateListItems() {


    const google = createGoogleGenerativeAI({
        apiKey: process.env.NEXT_GOOGLE_AI_API_KEY
    });

    const result = await streamText({
        model: google("models/gemini-1.5-flash-latest"),
        prompt: 'Return a json array with 5 object with "title" key where title represent the name of a movie or serie you recommended.',
    });

    return result.text
}
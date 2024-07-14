import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText, streamText } from "ai";


export const generateListItems = async () => {
    const google = createGoogleGenerativeAI({
        apiKey: process.env.NEXT_GOOGLE_AI_API_KEY
    });

    const result = await generateText({
        model: google("models/gemini-1.5-pro-latest"),
        prompt: 'Tell me a joke.',
    });

    return result.text
}
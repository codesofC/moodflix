'use client'

import { ThemeContextProps } from "@/types";
import { createContext, useContext } from "react";


export const ThemeContext = createContext<ThemeContextProps | null>(null)


export const useTheme = () => {

    const context = useContext(ThemeContext)

    if(!context){
        throw new Error("No match context data with theme context!")
    }

    return context;
}
'use client'

import { GlobalContextProps } from "@/types";
import { createContext, useContext } from "react";


export const globalContextCreated = createContext<GlobalContextProps | null>(null)


export const useGlobalContext = () => {

    const context = useContext(globalContextCreated)

    if(!context){
        throw new Error("No match context data with theme context!")
    }

    return context;
}
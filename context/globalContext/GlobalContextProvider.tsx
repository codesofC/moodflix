'use client'

import { useState } from "react"
import {globalContextCreated} from "./useGlobalContext"
import { CardItemProps } from "@/types"


const GloabalContextProvider = ({children}:{children: React.ReactNode}) => {

    const [allShows, setAllShows] = useState<CardItemProps []>([])
    const [isLoading, setIsLoading] = useState(false)

  return (
    <globalContextCreated.Provider value={{allShows, setAllShows, isLoading, setIsLoading}}>
        {children}
    </globalContextCreated.Provider>
  )
}

export default GloabalContextProvider
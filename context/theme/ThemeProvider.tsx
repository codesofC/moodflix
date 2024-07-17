'use client'

import { useState } from "react"
import { ThemeContext } from "./useTheme"


const ThemeProvider = ({children}:{children: React.ReactNode}) => {

    const [theme, setTheme] = useState<"light" | "dark">("light")
    const [isLoading, setIsLoading] = useState(false)

  return (
    <ThemeContext.Provider value={{theme, setTheme, isLoading, setIsLoading}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
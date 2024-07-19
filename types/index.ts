
export interface ThemeContextProps{
    theme: "light" | "dark"
    setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>
}

export interface MoodProps{
    title: string,
    url: string
}

export interface ButtonMoodPros{
    item: MoodProps,
    handleMood:  React.Dispatch<React.SetStateAction<MoodProps>>
}
export interface CardItemProps {
    uid: string,
    title: string,
    synopsis: string,
    poster: string,
    trailer: string,
    starring: string,
    director: string,
    platforms: {
        name: string,
        link: string
    } [],
    rating: number,
    genre: string,
    type: string,
    year: string
}

export interface MoodsFetchingProps{
    from: string,
    to: string
}

export interface GlobalContextProps{
    isLoading: boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
    allShows: CardItemProps[]
    setAllShows: React.Dispatch<React.SetStateAction<CardItemProps[]>>,
    error: string,
    setError: React.Dispatch<React.SetStateAction<string>>
}
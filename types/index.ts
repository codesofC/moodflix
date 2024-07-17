
export interface ThemeContextProps{
    theme: "light" | "dark"
    setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>,
    isLoading: boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
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
    type: string
}

export interface MoodsFetchingProps{
    from: string,
    to: string
}

export interface MoodsContextProps{
    actualMood: MoodProps,
    setActualMood: React.Dispatch<React.SetStateAction<MoodProps>>,
    achieveMood: MoodProps,
    setAchieveMood: React.Dispatch<React.SetStateAction<MoodProps>>
}
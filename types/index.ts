
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
        logo?: string,
        link: string
    } [],
    rating: number
}
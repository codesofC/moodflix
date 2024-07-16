

export const ALLMOODS = [
    {
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Neutral%20Face.png",
        title: "Neutral"
    },
    {
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Loudly%20Crying%20Face.png",
        title: "Sad"
    },
    {
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Beaming%20Face%20with%20Smiling%20Eyes.png",
        title: "Happy"
    },
    {
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Angry%20Face.png",
        title: "Angry"
    },
    {
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Fearful%20Face.png",
        title: "FearFul"
    },
    {
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Grinning%20Squinting%20Face.png",
        title: "Excited"
    },
    
]

export const getPlatformLogo = (name: string) => {
    const url = name.toLowerCase() === "netflix" ? "https://static.vecteezy.com/system/resources/previews/017/396/804/non_2x/netflix-mobile-application-logo-free-png.png" : (name.toLowerCase() === "amazon prime video" ? "https://1000logos.net/wp-content/uploads/2022/10/Amazon-Prime-Video-Icon.png" : (name.toLowerCase() === "disney" ? "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/800px-Disney%2B_logo.svg.png" : (name.toLowerCase() === "hulu" ? "https://img.odcdn.com.br/wp-content/uploads/2019/02/20190228121324.jpg" : null)))

    return url
}
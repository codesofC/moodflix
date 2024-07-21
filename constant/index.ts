

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
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Anxious%20Face%20with%20Sweat.png",
        title: "Anxious"
    },
    {
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Thinking%20Face.png",
        title: "Thought-provoking"
    },
    {
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Woozy%20Face.png",
        title: "Brain-dead"
    },
    {
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Light%20Bulb.png",
        title: "Creative mood"
    },
    {
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Beating%20Heart.png",
        title: "Romantic"
    },
    {
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Broken%20Heart.png",
        title: "Broken Heart"
    },
    {
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20activities/Person%20Rowing%20Boat%20Medium%20Skin%20Tone.png",
        title: "Adventurous"
    },
    {
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20Holding%20Back%20Tears.png",
        title: "Nostalgic"
    },
    {
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Astonished%20Face.png",
        title: "Astonished"
    },
    {
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Nerd%20Face.png",
        title: "Nerd mood"
    },
    {
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Money-Mouth%20Face.png",
        title: "Money mood"
    },
    {
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Flexed%20Biceps%20Medium%20Skin%20Tone.png",
        title: "Motivation mood"
    },
    {
        url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Exploding%20Head.png",
        title: "Wow mood"
    }
]

export const getPlatformLogo = (name: string) => {
    const url = name.toLowerCase() === "netflix" ? "https://static.vecteezy.com/system/resources/previews/017/396/804/non_2x/netflix-mobile-application-logo-free-png.png" : ((name.toLowerCase() === "amazon prime video" || name.toLowerCase() === "amazon prime" || name.toLowerCase() === "prime video" || name.toLowerCase() === "prime") ? "https://1000logos.net/wp-content/uploads/2022/10/Amazon-Prime-Video-Icon.png" : ((name.toLowerCase() === "disney+" || name.toLowerCase() === "disney plus") ? "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/800px-Disney%2B_logo.svg.png" : (name.toLowerCase() === "hulu" ? "https://download.logo.wine/logo/Hulu/Hulu-Logo.wine.png" : (name.toLowerCase() === "hbo max" ? "https://i.pinimg.com/originals/8b/02/00/8b020050690f955ccb306cdf51324aea.png" : null))))

    return url
}
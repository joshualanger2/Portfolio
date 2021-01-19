import FishingCardImage from './assets/fishing-ui.png'
import AlaCarteCardImage from './assets/alacarte-ui-home.png'
import JustBreatheImage from './assets/just-breathe-ui-home.png'
import PrecordingsImage from './assets/precordings-ui.png'

export const openSpring = { type: "spring", stiffness: 200, damping: 30 };

// *TODO update id on competencies project

export const projects = [
    {
        id: "portfolio",
        category: "React Web Development",
        title: "Portfolio",
        summary: "I built this portfolio to show you my work -",
        backgroundColor: "#5D6DDC",
        buttonLabel: "Read more",
        date:  "December 2020",
        size: "small"
    },
    {
        id: "precordings",
        category: "React Web Development",
        title: "Precordings",
        summary: "I built an internal tool for HubSpot Support to share and query pre-recorded product tutorials.",
        backgroundColor: "#FF7A59",
        buttonLabel: "Read more",
        date: "Fall 2020 to present",
        image: PrecordingsImage,
        size: "small"
    },
    {
        id: "justbreathe",
        category: "iOS Development",
        title: "Literally Just Breathe!",
        summary: "An iOS app I am developing that provides users with a simple breathing guide in their pocket; an alternative to meditation with phsycial and psychological benefits.",
        backgroundColor: "#5F2CDC",
        buttonLabel: "Read more",
        date: "Fall 2019 to present",
        image: JustBreatheImage,
        size: "large"
    },
    {
        id: "alacarte",
        category: "UX Design",
        title: "GA Project - alaCarte",
        summary: "Final project at General Assembly UX course where I attempt to redesign how we recommend and discover places to eat.",
        backgroundColor: "#FF8281",
        buttonLabel: "Read UX case study",
        date: "Summer 2019",
        image: AlaCarteCardImage,
        size: "large"
    },
    {
        id: "fishing",
        category: "Philosophy / UI Design",
        title: "Over-Fishing & Environmental Ethics",
        summary: "Final project at Bates College combining biology and philosophy to try and solve one of the many environmental problems today.",
        backgroundColor: "#026CA4",
        buttonLabel: "Read more",
        date: "Fall 2018",
        image: FishingCardImage,
        size: "large"
    },
    {
        id: "",
        category: "Research",
        title: "2021 Project",
        summary: "Currently in progress...",
        backgroundColor: "#5D6DDC",
        buttonLabel: "In progress",
        date: "2021",
        size: "large"
    }
]
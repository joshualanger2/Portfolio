// homepage height

export const defaultHeight = (id) => {
    switch(id) {
        case "projects":
            return "2000px";
        case "about":
            return "100%";
        default:
            return "100%";
    }
}

export const defaultHeightTablet = (id) => {
    switch(id) {
        case "projects":
            return "4000px";
        case "about":
            return "2800px";
        default:
            return "100%";
    }
}

export const defaultHeightMobile = (id) => {
    switch(id) {
        case "projects":
            return "3500px";
        case "about":
            return "100%";
        default:
            return "100%";
    }
}

// projects height
export const standardProjectHeight = (id) => {
    switch(id) {
        case "fishing":
            return "3500px";
        case "alacarte":
            return "10800px";
        case "justbreathe":
            return "4500px";
        case "precordings":
            return "2300px";
        case "portfolio":
            return "100vh";
        default:
            return "100%";
    }
}

export const tabletProjectHeight = (id) => {
    switch(id) {
        case "fishing":
            return "4000px";
        case "alacarte":
            return "11000px";
        case "justbreathe":
            return "5000px";
        case "precordings":
            return "2300px";
        case "portfolio":
            return "100vh";
        default:
            return "100%";
    }
}

export const mobileProjectHeight = (id) => {
    switch(id) {
        case "fishing":
            return "4500px";
        case "alacarte":
            return "11000px";
        case "justbreathe":
            return "5000px";
        case "precordings":
            return "2500px";
        case "portfolio":
            return "100vh";
        default:
            return "100%";
    }
}
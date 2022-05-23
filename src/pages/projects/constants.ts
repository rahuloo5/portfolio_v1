import imgBookmark from "../../assets/images/projects/bookmark.png";
import imgBurger from "../../assets/images/projects/burger-builder.png";
import imgCadmils from "../../assets/images/projects/cadmils.png";
import imgHospitalFinder from "../../assets/images/projects/hospital-findr.png";
import imgDchat from "../../assets/images/projects/d-chat.png";
import imgDcommerce from "../../assets/images/projects/d-commerce.png";
import imgDdiscus from "../../assets/images/projects/d-discus.png";
import imgDproductivity from "../../assets/images/projects/d-productivity.png";
import imgDeveloper from "../../assets/images/projects/developer.png";
import imgDrummachine from "../../assets/images/projects/drum-machine.png";
import imgFreebies from "../../assets/images/projects/freebies.png";
import imgPomodoro from "../../assets/images/projects/pomodoro.png";
import imgPv1 from "../../assets/images/projects/pv-1.png";
import imgQuizninja from "../../assets/images/projects/quiz-ninja.png";
import imgShortly from "../../assets/images/projects/shortly.png";
import imgProdeus from "../../assets/images/projects/prodeus.png";

const tags = ["Enterprise grade application", "Website", "Web Application", "Playful/Experimental"];

export const ALL_PROJECTS = [
    {
        id: "prodeus",
        title: "Prodeus",
        details: "Web Application for prodeus extension",
        live_link: "https://www.prodeus.co/",
        image: imgProdeus,
        tags: [tags[0], tags[2]]
    },
    {
        id: "cadmils",
        title: "Cadmils Consulting",
        details: "Official website of cadmils consulting agency",
        live_link: "https://www.cadmils.com/",
        image: imgCadmils,
        tags: [tags[1]]
    },
    {
        id: "hospital-finder",
        title: "Hospital finder",
        details: "Find Hospitals, Clinics, Pharmacies and Health care centers close to you",
        live_link: "https://enye-cohort4-obodo.web.app/",
        image: imgHospitalFinder,
        tags: [tags[3]]
    },

    // {
    //     id: 1,
    //     title: "OPPO Redefinition contest",
    //     details: "Site for the OPPO REDEFINITION PHOTOGRAPHY CONTEST which took place January 2020",
    //     live_link: "https://differenceinaclick.ng/"
    // },
    {
        id: 2,
        title: "d-productivity",
        details: "Web-based Kanban-style list-making application",
        live_link: "https://d-productivity.now.sh/",
        image: imgDproductivity,
        tags: [tags[2]]
    },
    {
        id: 3,
        title: "d-Discus",
        details: "A site where people can share details of projects together.",
        live_link: "https://myfirst-fullstackproject.firebaseapp.com/signin",
        image: imgDdiscus,
        tags: [tags[2]]
    },
    {
        id: 4,
        title: "d-chat",
        details: "A basic chat application.",
        live_link: "https://d-chat-98abe.firebaseapp.com/auth",
        image: imgDchat,
        tags: [tags[2]]
    },
    {
        id: 5,
        title: "d-commerce(WIP)",
        details: "An e-commerce platform",
        live_link: "https://d-commerce-99633.firebaseapp.com/",
        image: imgDcommerce,
        tags: [tags[2]]
    },
    {
        id: 16,
        title: "developer of the year",
        details: "Clone of “Awwwards” (https://www.awwwards.com/) awards site for the year 2020",
        live_link: "https://obododavid.github.io/developer-of-the-year/",
        image: imgDeveloper,
        tags: [tags[3]]
    },
    {
        id: 6,
        title: "Shortly",
        details: "Site that makes use of rel link API to shorten links",
        live_link: "https://obododavid.github.io/FEM-shortly/",
        image: imgShortly,
        tags: [tags[3]]
    },
    {
        id: 7,
        title: "Bookmark",
        details: "Bookmark landing page",
        live_link: "https://obododavid.github.io/FEM-bookmark-landing-page/",
        image: imgBookmark,
        tags: [tags[3]]
    },
    {
        id: 13,
        title: "Burger builder",
        details: "Build and order your own burger",
        live_link: "https://burger-builder.obododavid5.now.sh/",
        image: imgBurger,
        tags: [tags[2]]
    },
    {
        id: 14,
        title: "Drum Machine",
        details: "Simple drum machine",
        live_link: "https://obododavid.github.io/drumMachine/",
        image: imgDrummachine,
        tags: [tags[2]]
    },
    // {
    //     id: 15,
    //     title: "Netflixy",
    //     details: "Movie recommender",
    //     live_link: "https://netflixy.obododavid5.now.sh/"
    // },

    {
        id: 9,
        title: "Pomodoro clock",
        details: "Timer for pomodoro time management technique",
        live_link: "https://pomodoroclock.now.sh/",
        image: imgPomodoro,
        tags: [tags[1]]
    },
    {
        id: 10,
        title: "Quiz ninja",
        details: "How well do you know super heroes real names?",
        live_link: "https://obododavid.github.io/Learning-javascript-quiz-ninja/",
        image: imgQuizninja,
        tags: [tags[2]]
    },
    {
        id: 11,
        title: "Freebies",
        details: "clone of freebies(https://freebies.bypeople.com/) website home page",
        live_link: "https://obododavid.github.io/freebies/",
        image: imgFreebies,
        tags: [tags[3]]
    },
    {
        id: 8,
        title: "Portfolio v1.0",
        details: "My first portfolio site",
        live_link: "https://obododavid.github.io/portfolio/",
        image: imgPv1,
        tags: [tags[1]]
    }
];

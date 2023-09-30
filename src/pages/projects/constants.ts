import dominos from '../../assets/images/projects/dominos.png';
import popeyes from '../../assets/images/projects/Popeyes-Logo.wine.png';
import statestreet from '../../assets/images/projects/statestreet.jpeg';
import Oliver from '../../assets/images/projects/ow-social.png';
import Omnia from '../../assets/images/projects/omnia.png';
import Ready from '../../assets/images/projects/readyR.png';



const tags = ["Enterprise grade application", "Website", "Web Application", "Playful/Experimental"];

export const ALL_PROJECTS = [
    {
        id: "Dominos",
        title: "Dominos PWA",
        details: "Official PWA of Dominos India",
        live_link: "https://m.dominos.co.in/",
        image: dominos,
        tags: [tags[0], tags[2]]
    },
    {
        id: "Dominos Desktop",
        title: "Dominos Desktop",
        details: "Official website of Dominos India",
        live_link: "https://pizzaonline.dominos.co.in/",
        image: dominos,
        tags: [tags[0], tags[2]]
    },
    {
        id: "Popeyes",
        title: "Popeyes",
        details: "Official Website of Popeyes India",
        live_link: "https://www.popeyes.in/",
        image: popeyes,
        tags: [tags[0], tags[2]]
    },
    {
        id: 2,
        title: "comm-forecaster",
        details: "Saas Product of oliver wayman",
        live_link: "https://www.oliverwyman.com/commforecaster.html",
        image: Oliver,
        tags: [tags[0], tags[2]]
    },
    {
        id: 3,
        title: "State Street",
        details: "Official Website of State Street",
        live_link: "https://www.statestreet.com/",
        image: statestreet,
        tags: [tags[0], tags[2]]
    },
    {
        id: 4,
        title: "Deloitte",
        details: "Digital Audit Software",
        live_link: "https://omnia.portal.deloitte.com/",
        image: Omnia,
        tags: [tags[0], tags[2]]
    },
    {
        id: 4,
        title: "BlueTriton Brands",
        details: "Official website Ready Refresh ",
        live_link: "https://www.readyrefresh.com/en/",
        image: Ready,
        tags: [tags[1], tags[2]]
    },
   ];

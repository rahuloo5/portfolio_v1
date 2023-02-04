import React from "react";
import Layout from "../../layout";
import { ContactContainer } from "./style";

const ALL_CONTACTS = [
    {
        icon: "fab fa-linkedin",
        link: "https://www.linkedin.com/in/rahul-tomar-941586116/",
        label: "https://www.linkedin.com/"
    },
    {
        icon: "fab fa-github-square",
        link: "https://github.com/rahuloo5",
        label: "https://github.com"
    },
    {
        icon: "fas fa-envelope",
        link: "mailto:rahuldeveloper005@gmail.com",
        label: "rahuldeveloper005@gmail.com"
    },
    {
        icon: "fab fa-twitter-square",
           link: "https://twitter.com/rahuloo55",
           label: "https://twitter.com"
    },
    {
        icon: "fab fa-instagram",
           link: "https://www.instagram.com/___rahul5____/",
           label: "https://www.instagram.com"
    },
    
];

const Contact = () => {
    return (
        <Layout isFooterPresent={false}>
            <ContactContainer>
                <h1 className="contact__header">contact.</h1>
                <p className="contact__subheader">You can contact me through my mail or any of the platforms below:</p>
                <ul className="contact__links-wrapper">
                    {ALL_CONTACTS.map((contact, i) => {
                        const { icon, link, label } = contact;
                        return (
                            <li key={i}>
                                <i className={icon}></i>
                                <a href={link} target="_blank" rel="noopener noreferrer">
                                    {label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </ContactContainer>
        </Layout>
    );
};

export default Contact;

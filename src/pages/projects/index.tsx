import React, { useState, useEffect } from "react";
import Layout from "../../layout";
import { ALL_PROJECTS } from "./constants";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";

import { Props } from "./IProject";
import { ProjectContainer, ProjectHeader, ProjectBody, ProjectBodyTwo } from "./styles";

const Projects: React.FC<Props> = () => {
    const [displayOne, setDisplayOne] = useState(false);
    const [displayTwo, setDisplayTwo] = useState(false);

    const handleTriggerGoogleAnalyticsEvent = (title: any) => {
        ReactGA.event({
            category: title,
            action: "Click this project"
        });
    };

    useEffect(() => {
        setTimeout(() => {
            setDisplayOne(true);
        }, 500);
        setTimeout(() => {
            setDisplayTwo(true);
        }, 1000);
    });

    return (
        <Layout isFooterPresent>
            <ProjectContainer>
                <ProjectHeader>projects.</ProjectHeader>
                <ProjectBodyTwo>
                    <ul className="projects__body">
                        {ALL_PROJECTS.map((project, i) => {
                            const { title, details, live_link, image, tags } = project;
                            return (
                                <a
                                    href={live_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => handleTriggerGoogleAnalyticsEvent(title)}
                                >
                                    <li key={i} className="project">
                                        <div className="project__info">
                                            <h4>{title}</h4>
                                            <p>{details}</p>
                                            <a
                                                href={live_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={() => handleTriggerGoogleAnalyticsEvent(title)}
                                            >
                                                Visit site
                                            </a>

                                            <span className="tag">
                                                {tags.map((item, index) => {
                                                    if (index !== 0) {
                                                        return <li key={index}>- {item}</li>;
                                                    }
                                                    return <li key={index}>{item}</li>;
                                                })}
                                            </span>
                                        </div>

                                        <div
                                            className="project__image"
                                            style={{ backgroundImage: `url(${image})` }}
                                        ></div>
                                        <div className="project__overlay"></div>
                                    </li>
                                </a>
                            );
                        })}
                    </ul>
                    <section className="projects__buttonContainer">
                        <Link to="/contact">Go to Contacts</Link>
                        <span>&#10230;</span>
                    </section>
                </ProjectBodyTwo>
            </ProjectContainer>
        </Layout>
    );
};

export default Projects;

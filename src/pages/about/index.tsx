import React, { useState, useEffect } from 'react';
import Layout from '../../layout';
import TypeMe from '../../components/typeMe';

import { AboutContainer, AboutHeader, AboutBody } from './style';
import { Props } from './IAbout';


const About: React.FC<Props> = () => {
    const [displayOne, setDisplayOne] = useState();
    const [displayTwo, setDisplayTwo] = useState();
    const [displayThree, setDisplayThree] = useState();
    const [displayFour, setDisplayFour] = useState();
    const [displayFive, setDisplayFive] = useState();
    const [displaySix, setDisplaySix] = useState();
    const [displaySeven, setDisplaySeven] = useState();
    const [displayEight, setDisplayEight] = useState();


    useEffect(() => {
        setTimeout(() => {
            setDisplayOne(true)
        }, 0)

        setTimeout(() => {
            setDisplayTwo(true)
        }, 2500)

        setTimeout(() => {
            setDisplayThree(true)
        }, 5000)

        setTimeout(() => {
            setDisplayFour(true)
        }, 7000)
    })

    return (
        <Layout isFooterPresent>
            <AboutContainer>
                <AboutHeader>about.</AboutHeader>
                <AboutBody
                    displayFive={displayFive}
                >
                    <div className='about__details'>
                        {displayOne && <TypeMe duration={2000}>Meticulous front end web developer with passion for responsive website design.</TypeMe>}
                        <br />
                        {displayTwo && <TypeMe duration={2000}>freeCodeCamp certified. Proficient in vanilla javascript, hence can easily adapt to any of its frameworks</TypeMe>}
                        <br />
                        {displayThree && <TypeMe duration={2000}>depending on the requirement of the job. Detail - oriented, with a strong knack for writing clean</TypeMe>}
                        <br />
                        {displayFour && <TypeMe duration={2000}>and maintainable code.</TypeMe>}

                    </div>
                    <section className='about__tech-section'>
                        <h3 className='about__tech-section__header'>
                            tech skills.
                        </h3>
                        <p className='about__tech-section__category'>
                            <span>proficient:</span>
                            HTML, CSS, SASS, Styled-components, Vanilla javascript, React.JS, Redux, Git
                        </p>
                        <p className='about__tech-section__category'>
                            <span>familiar:</span>
                            Typescript, webpack, Jest, JQuery, Blazor
                        </p>
                    </section>
                    <section className='about__buttonContainer'>
                        <button>Go to projects</button>&#10230;
                </section>
                </AboutBody>
            </AboutContainer>
        </Layout>
    )
};

export default About
import React, { useState, useEffect } from 'react';
import Layout from '../../layout';
import TypeMe from '../../components/typeMe';
import { Link } from 'react-router-dom';

import { AboutContainer, AboutHeader, AboutBody } from './style';
import { Props } from './IAbout';


const About: React.FC<Props> = () => {
    const [displayOne, setDisplayOne] = useState(false);
    const [displayTwo, setDisplayTwo] = useState(false);
    const [displayThree, setDisplayThree] = useState(false);
    const [displayFour, setDisplayFour] = useState(false);
    const [displayFive, setDisplayFive] = useState(false);
    const [displaySix, setDisplaySix] = useState(false);
    const [displaySeven, setDisplaySeven] = useState(false);
    const [displayEight, setDisplayEight] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            setDisplayOne(true)
        }, 0)

        setTimeout(() => {
            setDisplayTwo(true)
        }, 500)

        setTimeout(() => {
            setDisplayThree(true)
        }, 1000)

        setTimeout(() => {
            setDisplayFour(true)
        }, 1500)

        setTimeout(() => {
            setDisplayFive(true)
        }, 2000)
        setTimeout(() => {
            setDisplaySix(true)
        }, 2500)
        setTimeout(() => {
            setDisplaySeven(true)
        }, 3000)
        setTimeout(() => {
            setDisplayEight(true)
        }, 3500)
    })

    return (
        <Layout isFooterPresent>
            <AboutContainer>
                <AboutHeader>about.</AboutHeader>
                <AboutBody
                    displayFive={displayFive}
                    displaySix={displaySix}
                    displayEight={displayEight}
                >
                    <div className='about__details'>
                        {displayOne && <TypeMe duration={500}>Meticulous front end developer with passion for responsive website design.</TypeMe>}
                        <br />
                        {displayTwo && <TypeMe duration={500}> Proficient in javascript, hence can easily adapt to any of its frameworks</TypeMe>}
                        <br />
                        {displayThree && <TypeMe duration={500}>depending on the requirement of the job. Detail - oriented, with a strong knack for writing clean</TypeMe>}
                        <br />
                        {displayFour && <TypeMe duration={500}>and maintainable code.</TypeMe>}

                    </div>
                    <section className='about__tech-section'>
                        <h3 className='about__tech-section__header'>
                            tech skills.
                        </h3>
                        <p className='about__tech-section__category'>
                            <span>proficient:</span>
                            {displaySeven && <TypeMe duration={500}>HTML, CSS, SASS, Styled-components, javascript, React.JS,Next js, Redux, Git, Typescript, Webpack, Jest, PWA</TypeMe>}
                        </p>
                        <p className='about__tech-section__category'>
                            <span>familiar:</span>
                            {displaySeven && <TypeMe duration={500}>Node.JS, React Native, Mongo DB, Next API Routes</TypeMe>}
                        </p>
                    </section>
                    <section className='about__buttonContainer'>
                        <Link to='/projects'>Go to projects</Link>
                        <span>&#10230;</span>
                    </section>
                </AboutBody>
            </AboutContainer>
        </Layout>
    )
};

export default About

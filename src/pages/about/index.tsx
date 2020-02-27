import React, { useState, useEffect } from 'react';
import Layout from '../../layout';
import TypeMe from '../../components/typeMe';

import { AboutContainer, AboutHeader, AboutBody } from './style';

export interface Props {
    // displayFive: boolean,
}

const dataSource: Array<string> = [
    "Meticulous front end web developer with passion for responsive website design.",
    "freeCodeCamp certified. Proficient in vanilla javascript, hence can easily adapt to any of its frameworks",
    "depending on the requirement of the job. Detail - oriented, with a strong knack for writing clean",
    "and maintainable code."
];

const TYPE_SPEED = 10;

const About: React.FC<Props> = () => {
    const [uiState, setUiState] = useState(0);
    const [renderData, setRenderData] = useState([dataSource[0]]);

    useEffect(() => {
        const dataLength = dataSource.length;
        const intervalId = setInterval(() => {
            if (uiState === dataLength - 1) {
                clearInterval(intervalId);
                return;
            }

            const modifiedUiState = uiState + 1;
            const modifiedRenderData = [...renderData, dataSource[modifiedUiState]];
            setUiState(modifiedUiState);
            setRenderData(modifiedRenderData);
        }, 2500);

        return () => clearInterval(intervalId);
    }, [uiState, renderData]);

    // const dataLength = dataSource.length;
    // const intervalId = setInterval(() => {
    //     console.log({ uiState, intervalId })
    //     if (uiState === dataLength - 1) {
    //         clearInterval(intervalId);
    //         return;
    //     }

    //     const modifiedUiState = uiState + 1;
    //     const modifiedRenderData = [...renderData, dataSource[modifiedUiState]];
    //     setUiState(modifiedUiState);
    //     setRenderData(modifiedRenderData);
    // }, 2500);

    // const [displayOne, setDisplayOne] = useState();
    // const [displayTwo, setDisplayTwo] = useState();
    // const [displayThree, setDisplayThree] = useState();
    // const [displayFour, setDisplayFour] = useState();
    // const [displayFive, setDisplayFive] = useState();
    // const [displaySix, setDisplaySix] = useState();
    // const [displaySeven, setDisplaySeven] = useState();
    // const [displayEight, setDisplayEight] = useState();


    // useEffect(() => {

    //     setTimeout(() => {
    //         setDisplayOne(true)
    //     }, 0)

    //     setTimeout(() => {
    //         setDisplayTwo(true)
    //     }, 2500)

    //     setTimeout(() => {
    //         setDisplayThree(true)
    //     }, 5000)

    //     setTimeout(() => {
    //         setDisplayFour(true)
    //     }, 7000)
    // })

    return (
        <Layout isFooterPresent>
            <AboutContainer>
                <AboutHeader>about.</AboutHeader>
                <AboutBody
                // displayFive={displayFive}
                >
                    <div className='about__details'>
                        {renderData.map(o => <TypeMe key={o} duration={o.length * TYPE_SPEED}>{o}</TypeMe>)}



                        {/* {displayOne && <TypeMe duration={2000}>Meticulous front end web developer with passion for responsive website design.</TypeMe>}
                        <br />
                        {displayTwo && <TypeMe duration={2000}>freeCodeCamp certified. Proficient in vanilla javascript, hence can easily adapt to any of its frameworks</TypeMe>}
                        <br />
                        {displayThree && <TypeMe duration={2000}>depending on the requirement of the job. Detail - oriented, with a strong knack for writing clean</TypeMe>}
                        <br />
                        {displayFour && <TypeMe duration={2000}>and maintainable code.</TypeMe>} */}

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
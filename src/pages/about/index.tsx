import React from 'react';
import styled from 'styled-components';
import Layout from '../../layout';

const AboutContainer = styled.div`
    .about__header{
        margin-bottom: 60px;
    }

    .about__details{
        margin-bottom: 200px;
        font-size: 24px;
        font-weight: 300;
        line-height: 40px;
    }

    .about__tech-section{
        margin-bottom: 110px;

        &__header{
            font-size: 36px;
            font-weight: 600;
            margin-bottom: 30px;
        }

        &__category{
            font-size: 24px;
            font-weight: 300;
            margin-bottom: 15px;

            span{
                font-weight: 400;
                margin-right: 15px;
            }
        }
    }

    .about__buttonContainer{

        button{
            font-size: 24px;
            border: none;
            color: #074BF8;
            background-color: transparent;
            cursor: pointer;
            font-weight: 600;
            font-style: italic;
        }
    }
`

const About = () => {
    return (
        <Layout isFooterPresent>
            <AboutContainer>
                <h1 className='about__header'>about.</h1>
                <p className='about__details'>Meticulous front end web developer with passion for responsive website design. <br />
                    freeCodeCamp certified. Proficient in vanilla javascript, hence can easily adapt to any of its frameworks <br />
                    depending on the requirement of the job. Detail - oriented, with a strong knack for writing clean <br />
                    and maintainable code.</p>
                <section className='about__tech-section'>
                    <h3 className='about__tech-section__header'>tech skills.</h3>
                    <p className='about__tech-section__category'><span>proficient:</span>HTML, CSS, SASS, Styled-components, Vanilla javascript, React.JS, Redux, Git </p>
                    <p className='about__tech-section__category'><span>familiar:</span>Typescript, webpack, Jest, JQuery, Blazor</p>
                </section>
                <section className='about__buttonContainer'>
                    <button>Go to projects</button>&#10230;
                </section>
            </AboutContainer>
        </Layout>
    )
};

export default About
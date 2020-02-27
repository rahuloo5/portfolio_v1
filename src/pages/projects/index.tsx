import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Layout from '../../layout';
import { ALL_PROJECTS } from './constants'
import { Link } from 'react-router-dom'

import { Props } from './IProject';

const ProjectContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`

const ProjectHeader = styled.h1`
    margin-bottom: 30px;
`

const ProjectBody = styled.div<Props>`
    flex: 1;
    display: flex;
    flex-direction: column;
    

        .projects__body{
            display:grid;
            // grid-template-columns: 1fr 1fr 1fr;
            // grid-auto-rows: 1fr 1fr 1fr 1fr 1fr;

            grid-auto-flow: column;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(5, auto);

            grid-column-gap: 50px;
            flex: 1;
            opacity: 0;
            transition: opacity 1s ease-in-out;
            ${({ displayOne }) => displayOne && 'opacity: 1'};

            h4{
                font-size: 18px;
                font-weight: 600;
                margin-bottom: 10px;
            }

            p{
                font-size: 14px;
                font-weight: 300;
                margin-bottom: 5px;
            }

            a{
                font-size: 14px;
                color: #074BF8;
                text-decoration: none;
                opacity: 0.4;
                transition: all 0.5s ease-in-out;

                &:hover{
                    text-decoration: underline;
                    opacity: 1;
                }
            }
        }

        .projects__buttonContainer{
            margin-bottom: 30px;
            opacity: 0;
            transform: translateY(20px);
            transition-property: opacity, transform;
            transition: 0.5s ease-in-out;
            ${({ displayTwo }) => displayTwo && 'opacity: 1; transform: translateY(0px)'};

            a{
                font-size: 12px;
                border: none;
                color: #074BF8;
                background-color: transparent;
                cursor: pointer;
                font-weight: 600;
                font-style: italic;
                position: relative;
                text-decoration: none;
    
                &:after{
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 1px;
                    background-color: #074BF8;
                    bottom: 0;
                    left: 0;
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: all 0.25s ease-in-out;
                }
    
                &:hover{
    
                    &:after{
                        transform-origin: right;
                        transform: scaleX(1);
                    }
                }
            }
    
            span{
                display: inline-block;
                transform: translate(10px, 0px);
            }
        }
`

const Projects: React.FC<Props> = () => {
    const [displayOne, setDisplayOne] = useState();
    const [displayTwo, setDisplayTwo] = useState();

    useEffect(() => {
        setTimeout(() => {
            setDisplayOne(true);
        }, 500);
        setTimeout(() => {
            setDisplayTwo(true);
        }, 1000);
    })
    return (
        <Layout isFooterPresent>
            <ProjectContainer>
                <ProjectHeader>projects.</ProjectHeader>
                <ProjectBody
                    displayOne={displayOne}
                    displayTwo={displayTwo}>
                    <ul className='projects__body'>
                        {ALL_PROJECTS.map((project, i) => {
                            const { title, details, live_link } = project
                            return <li key={i}>
                                <h4>{title}</h4>
                                <p>{details}</p>
                                <a href={live_link}>live site</a>
                            </li>
                        })}
                    </ul>
                    <section className='projects__buttonContainer'>
                        <Link to='/contact'>Go to Contacts</Link>
                        <span>&#10230;</span>
                    </section>
                </ProjectBody>
            </ProjectContainer>
        </Layout>
    )
};

export default Projects
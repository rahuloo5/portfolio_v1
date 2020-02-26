import React from 'react';
import styled from 'styled-components';
import Layout from '../../layout';
import { ALL_PROJECTS } from './constants'

const ProjectContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

        .projects__header{
            margin-bottom: 60px;
        }

        .projects__body{
            display:grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-auto-rows: 1fr 1fr 1fr 1fr 1fr;
            flex: 1;

            h4{
                font-size: 14px;
                font-weight: 600;
            }

            p{
                font-size: 14px;
                font-weight: 300;
            }

            a{
                font-size: 14px;
                color: #074BF8;
            }
        }

        .projects__buttonContainer{

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

const Projects = () => {
    return (
        <Layout isFooterPresent>
            <ProjectContainer>
                <h1 className='projects__header'>projects.</h1>
                <ul className='projects__body'>
                    {ALL_PROJECTS.map((project, i) => {
                        const { title, details, live_link, source_code } = project
                        return <li key={i}>
                            <h4>{title}</h4>
                            <p>{details}</p>
                            <a href="">{live_link}</a>
                            <a href="">{source_code}</a>
                        </li>
                    })}
                </ul>
                <section className='projects__buttonContainer'>
                    <button>Go to contacts</button>&#10230;
                </section>
            </ProjectContainer>
        </Layout>
    )
};

export default Projects
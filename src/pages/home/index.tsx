import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Layout from '../../layout';
import TypeMe from '../../components/typeMe';

interface Props {
    showOccupation: boolean
}


const HomeContainer = styled.div<Props>`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 765px){
        height: calc(100vh - 150px);
    }

    .home{
        display: flex;
        align-items:baseline;

        @media(max-width: 765px){
            flex-direction: column;
        }

        &__title{
            font-size: 96px;
            margin-right: 15px;

            @media(max-width: 992px){
                font-size: 70px;
            }

            @media(max-width: 765px){
                font-size: 45px;
                margin-right: 0;
            }
        }
    
        &__subtitle{
            font-size: 18px;
            font-style: italic;
            color: #074BF8;
            opacity: 0;
            transition: opacity 1s ease-in-out;

            ${({ showOccupation }) => showOccupation && 'opacity: 1'};

            @media(max-width: 765px){
                align-self: center;
                font-size: 15px;
            }
        }
    }
    
`;


const Home = () => {
    const [showOccupation, setShowOccupation] = useState();

    useEffect(() => {
        setTimeout(() => {
            setShowOccupation(true)
        }, 1000);
    }, [])
    return (
        <Layout isFooterPresent>
            <HomeContainer showOccupation={showOccupation}>
                <div className='home'>
                    <h1 className='home__title'>
                        <TypeMe duration={1000}>
                            Obodo David
                        </TypeMe>
                    </h1>
                    <h6 className='home__subtitle'>Front End Developer</h6>
                </div>
            </HomeContainer>
        </Layout>
    )
};

export default Home;
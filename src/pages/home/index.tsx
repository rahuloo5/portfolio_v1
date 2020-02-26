import React from 'react';
import styled from 'styled-components';
import Layout from '../../layout';
import TypeMe from '../../components/typeMe';


const HomeContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .home{
        display: flex;
        align-items:baseline;

        &__title{
            font-size: 96px;
            margin-right: 15px;
        }
    
        &__subtitle{
            font-size: 18px;
            font-style: italic;
            color: #074BF8;
            margin-top: 55px;
        }
    }
    
`

const Home = () => {
    return (
        <Layout isFooterPresent>
            <HomeContainer>
                <div className='home'>
                    <h1 className='home__title'>
                        <TypeMe duration={2000}>
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
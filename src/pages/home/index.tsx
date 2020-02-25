import React from 'react';
import styled from 'styled-components';
import Layout from '../../layout';


const HomeContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .home__title{
        margin-right: 15px;
    }

    .home__subtitle{
        font-size: 18px;
        font-style: italic;
        color: #074BF8;
        margin-top: 55px;
    }
`

const Home = () => {
    return (
        <Layout isFooterPresent>
            <HomeContainer>
                <h1 className='home__title'>Obodo David</h1>
                <h6 className='home__subtitle'>Front End Developer</h6>
            </HomeContainer>
        </Layout>
    )
};

export default Home;
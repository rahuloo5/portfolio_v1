import React from 'react';
import styled from 'styled-components';
import Layout from '../../layout';


const HomeContainer = styled.div`

`

const Home = () => {
    return (
        <Layout isFooterPresent>
            <HomeContainer>
                This is the home page
            </HomeContainer>
        </Layout>
    )
};

export default Home;
import React from 'react';
import styled from 'styled-components';

import Header from './header';
import Footer from './footer';

import Backdrop from '../components/backdrop';
import Hamburger from '../components/hamburger';

const LayoutContainer = styled.div`
    height: 100vh;
`;

const Body = styled.div`
    height: calc(100vh - 140px);
    padding: 0 10vw;
    background-color: #ffffff;
`;

interface Props {
    children: any,
    isFooterPresent: boolean,
}

const layout: React.FC<Props> = ({ children, isFooterPresent }) => {
    const handleShowNavbar = () => {
        console.log('im here')
    }

    return (
        <LayoutContainer>
            <Backdrop />
            <Hamburger handleshowNavbar={handleShowNavbar} />
            <Header />
            <Body>
                {children}
            </Body>
            {isFooterPresent && <Footer />}
        </LayoutContainer>
    )
};

export default layout
import React, { useState } from 'react';
import styled from 'styled-components';

import Header from './header';
import Footer from './footer';

import Backdrop from '../components/backdrop';
import Hamburger from '../components/hamburger';
import PagesLink from '../components/pagesLinks';
import { JSXElement } from '@babel/types';

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

const Layout: React.FunctionComponent<Props> = ({ children, isFooterPresent }) => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handleShowNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen)
    }

    return (
        <LayoutContainer>
            <PagesLink isNavbarOpen={isNavbarOpen} />
            <Backdrop isNavbarOpen={isNavbarOpen} />
            <Hamburger
                handleShowNavbar={handleShowNavbar}
                isNavbarOpen={isNavbarOpen} />
            <Header />
            <Body>
                {children}
            </Body>
            {isFooterPresent && <Footer />}
        </LayoutContainer>
    )
};

export default Layout
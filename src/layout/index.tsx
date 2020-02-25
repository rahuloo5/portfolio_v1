import React from 'react';
import styled from 'styled-components';

import Header from './header';
import Footer from './footer';

const LayoutContainer = styled.div`
    height: 100vh;
`;

const Body = styled.div`
    height: 100%;
    padding: 100px 10vw;
`;

interface Props {
    children: any,
    isFooterPresent: boolean,
}

const layout: React.FC<Props> = ({ children, isFooterPresent }) => {
    return (
        <LayoutContainer>
            <Header />
            <Body>
                {children}
            </Body>
            {isFooterPresent && <Footer />}
        </LayoutContainer>
    )
};

export default layout
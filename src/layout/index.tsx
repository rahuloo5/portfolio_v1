import React from 'react';
import styled from 'styled-components';

import Header from './header';
import Footer from './footer';

const LayoutContainer = styled.div`

`;

const Body = styled.div`

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
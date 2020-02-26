import React from 'react';
import styled from 'styled-components';

import Hamburger from '../../components/hamburger';

const HeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: #FAF9F9;
    top: 0;
`

const Header = () => {
    return (
        <HeaderContainer>
            <Hamburger />
        </HeaderContainer>
    )
};

export default Header
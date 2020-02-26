import React from 'react';
import styled from 'styled-components';

const HamburgerContainer = styled.div`
        width: 25px;
        height: 3px;
        background-color: #000000;
        position: fixed;
        align-self: center;
        right: 45px;
        top: 35px;

        &:before{
            content: '';
            width: 25px;
            height: 3px;
            background-color: #000000;
            position: absolute;
            top: -7px;
        }

        &:after{
            content: '';
            width: 25px;
            height: 3px;
            background-color: #000000;
            position: absolute;
            top: 7px;
        }
    }
`

const Hamburger = () => {
    return (
        <HamburgerContainer>

        </HamburgerContainer>
    )
};

export default Hamburger
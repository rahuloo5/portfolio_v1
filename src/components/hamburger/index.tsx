import React from 'react';
import styled from 'styled-components';

interface Props {
    handleShowNavbar?: any,
    isNavbarOpen: boolean,
}

const HamburgerContainer = styled.div<Props>`
    position: fixed;
    right: 45px;
    top: 35px;
    cursor: pointer;

    .hamburger{
            width: 25px;
            height: 3px;
            background-color: #000000;
            align-self: center;
            ${({ isNavbarOpen }) => isNavbarOpen && 'background-color: #ffffff;'}
            

            &:before{
                content: '';
                width: 25px;
                height: 3px;
                background-color: inherit;
                position: absolute;
                top: -7px;
            }

            &:after{
                content: '';
                width: 25px;
                height: 3px;
                background-color: inherit;
                position: absolute;
                top: 7px;
            }
        }
    }

    .click-box{
        height: 20px;
        position: absolute;
        width: 100%;
        top: -10px;
    }
`;



const Hamburger: React.FC<Props> = ({ handleShowNavbar, isNavbarOpen }) => {
    return (
        <HamburgerContainer
            onClick={handleShowNavbar}
            isNavbarOpen={isNavbarOpen}
        >
            <div className='hamburger'></div>
            <div className='click-box'></div>
        </HamburgerContainer>
    )
};

export default Hamburger
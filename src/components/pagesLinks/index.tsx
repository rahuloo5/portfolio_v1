import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const PagesLinkContainer = styled.div<Prop>`
    position: fixed;
    background-color: transparent;
    z-index: 1;
    width: 100%;
    height: 100%;
    transform: translateY(-100vh);
    transition: transform 0.25s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    a{
        text-decoration: none;
        color: #ffffff;
        font-size: 36px;
        margin-bottom: 50px;
    }

    ${({ isNavbarOpen }) => isNavbarOpen && 'transform: translateY(0)'}

`

interface Prop {
    isNavbarOpen: boolean
}

const PagesLink: React.FC<Prop> = ({ isNavbarOpen }) => {
    return (
        <PagesLinkContainer isNavbarOpen={isNavbarOpen}>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
        </PagesLinkContainer>
    )
};

export default PagesLink
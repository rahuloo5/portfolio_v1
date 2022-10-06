import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: #000000;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 765px){
        position: static;
    }

    i{
        color: #ffffff;
        font-size: 40px;
        margin-right: 40px;
        cursor: pointer;
    }
`

const Footer = () => {
    return (
        <FooterContainer>
            <a href="https://github.com/obododavid" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
            <a href="https://twitter.com/phitGeek" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a>
            <a href="https://www.linkedin.com/in/david-obodo-998786174" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        </FooterContainer>
    )
};

export default Footer

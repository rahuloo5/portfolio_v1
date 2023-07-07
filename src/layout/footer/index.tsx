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
            <a href="https://github.com/rahuloo5" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
            <a href="https://twitter.com/rahuloo55" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a>
            <a href="https://www.linkedin.com/in/rahul-tomar-941586116/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/___rahul5____/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com/channel/UC59c-3g5bY44cF9C3MW5VNQ" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
            <a href="https://medium.com/@rahultomar092" target="_blank" rel="noopener noreferrer"><i className="fab fa-medium"></i></a>
        </FooterContainer>
    )
};

export default Footer

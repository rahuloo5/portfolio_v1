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
            <a href="https://github.com/obododavid" target="_blank"><i className="fab fa-github-square"></i></a>
            <a href="https://twitter.com/ObodoDavid2" target="_blank"><i className="fab fa-twitter-square"></i></a>
            <a href="https://www.linkedin.com/in/obodo-david-998786174/" target="_blank"><i className="fab fa-linkedin"></i></a>
        </FooterContainer>
    )
};

export default Footer
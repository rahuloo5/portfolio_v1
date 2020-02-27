import styled from 'styled-components';
import { Props } from './IAbout';


export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const AboutHeader = styled.h1`

`
export const AboutBody = styled.div<Props>`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .about__details{
        font-size: 24px;
        font-weight: 300;
        line-height: 40px;
    }

    .about__tech-section{

        &__header{
            font-size: 36px;
            font-weight: 600;
            margin-bottom: 30px;
            opacity: 0;
            transform: translate(-10px, 20px);
            transition: 0.5s ease-in-out;
            transition-property: opacity, transform;
            ${({ displayFive }) => displayFive && 'opacity: 1; transform: translate(0,0)'}
        }

        &__category{
            font-size: 24px;
            font-weight: 300;
            margin-bottom: 15px;

            span{
                display: inline-block;
                font-weight: 400;
                margin-right: 15px;
                transition: 0.5s ease-in-out;
                transform: translateX(-20px);
                opacity: 0;
                transition-property: opacity, transform;
                ${({ displaySix }) => displaySix && 'opacity: 1; transform: translateX(0px)'}
            }
        }
    }

    .about__buttonContainer{
        opacity: 0;
        transform: translateY(20px);
        transition-property: opacity, transform;
        transition: 0.5s ease-in-out;
        ${({ displayEight }) => displayEight && 'opacity: 1; transform: translateY(0px)'};

        button{
            font-size: 24px;
            border: none;
            color: #074BF8;
            background-color: transparent;
            cursor: pointer;
            font-weight: 600;
            font-style: italic;
        }
    }
`
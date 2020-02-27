import styled from 'styled-components';
import { Props } from './index';


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
        }

        &__category{
            font-size: 24px;
            font-weight: 300;
            margin-bottom: 15px;

            span{
                font-weight: 400;
                margin-right: 15px;
            }
        }
    }

    .about__buttonContainer{

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
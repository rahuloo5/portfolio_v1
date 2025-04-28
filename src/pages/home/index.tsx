import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "../../layout";
import TypeMe from "../../components/typeMe";
import { Link } from "react-router-dom";

interface Props {
    showOccupation: boolean;
}

const HomeContainer = styled.div<Props>`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    height: calc(100vh - 150px);

    @media (max-width: 765px) {
        height: calc(100vh - 150px);
    }

    .title-wrapper {
    }

    .home {
        display: flex;
        align-items: baseline;

        @media (max-width: 765px) {
            flex-direction: column;
        }

        &__title {
            font-size: 96px;
            margin-right: 15px;

            @media (max-width: 992px) {
                font-size: 70px;
            }

            @media (max-width: 765px) {
                font-size: 45px;
                margin-right: 0;
            }
        }

        &__subtitle {
            font-size: 18px;
            font-style: italic;
            color: #074bf8;
            color: #fff;
            opacity: 0;
            transition: opacity 1s ease-in-out;

            ${({ showOccupation }) => showOccupation && "opacity: 1"};

            @media (max-width: 765px) {
                align-self: center;
                font-size: 15px;
            }
        }
    }

    .links-section {
        display: flex;
        margin-top: 2rem;

        a {
            margin-right: 2rem;
            color: #fff;
            text-transform: uppercase;
            letter-spacing: 3px;
        }
    }
`;

const Home = () => {
    const [showOccupation, setShowOccupation] = useState(false);

    useEffect(() => {
        setTimeout(() => {
         setShowOccupation(prev=>!prev);
        }, 1000);
    }, []);
    return (
        <Layout isFooterPresent>
            <HomeContainer showOccupation={showOccupation}>
                <div className="home">
                    <h1 className="home__title">
                        <TypeMe duration={1000}>Rahul Singh Tomar</TypeMe>
                    </h1>
                    <h6 className="home__subtitle">Full Stack Developer</h6>
                </div>
                <div className="links-section">
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </HomeContainer>
        </Layout>
    );
};

export default Home;

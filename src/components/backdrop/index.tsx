import React from 'react';
import styled from 'styled-components';

const BackdropContainer = styled.div`
    position: fixed;
    background-color: rgba(0,0,0,0.95);
    width: 100%;
    height: 100%;
    transform: translateY(-100vh);
`

const Backdrop = () => {
    return (
        <BackdropContainer>

        </BackdropContainer>
    )
};

export default Backdrop
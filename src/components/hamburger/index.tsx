import React from 'react';
import styled from 'styled-components';

const HamburgerContainer = styled.div`
    position: fixed;
    right: 45px;
    top: 35px;

    .hamburger{
            width: 25px;
            height: 3px;
            background-color: #000000;
            align-self: center;
            

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
    }

    .click-box{
        height: 20px;
        position: absolute;
        width: 100%;
        top: -10px;
    }
`;

type Prop = {
    handleshowNavbar: any,
}

const Hamburger: React.FC<Prop> = ({ handleshowNavbar }) => {
    return (
        <HamburgerContainer onClick={handleshowNavbar}>
            <div className='hamburger'></div>
            <div className='click-box'></div>
        </HamburgerContainer>
    )
};

export default Hamburger
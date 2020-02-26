import React from 'react';
import styled from 'styled-components';
import Layout from '../../layout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;

        .contact__header{
            margin-bottom: 60px;
        }

        .contact__subheader{
            font-size: 36px;
            margin-bottom: 30px;
            font-weight: 300;
        }

        .contact__links-wrapper{
            list-style: none;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;

            li{

                svg{

                }

                a{
                    text-decoration: none;
                    font-size: 34px;
                    font-weight: 300;
                    color: #000000;
                }
            }
        }
`

const ALL_CONTACTS = [
    {
        icon: faEnvelope,
        link: 'obododavid5@gmail.com',
    },
    {
        icon: faEnvelope,
        link: 'https://github.com/obododavid',
    },
    {
        icon: faEnvelope,
        link: 'https://twitter.com/ObodoDavid2',
    },
    {
        icon: faEnvelope,
        link: 'https://www.linkedin.com/in/obodo-david-998786174/',
    },
]

const Contact = () => {
    return (
        <Layout isFooterPresent={false} >
            <ContactContainer>
                <h1 className='contact__header'>contact.</h1>
                <p className='contact__subheader'>You can contact me through my mail or any of the platforms below:</p>
                <ul className='contact__links-wrapper'>
                    {ALL_CONTACTS.map((contact, i) => {
                        const { icon, link } = contact
                        return <li>
                            <FontAwesomeIcon icon={icon} />
                            <a href={link} target='_blank'>{link}</a>
                        </li>
                    })}
                </ul>
            </ContactContainer>
        </Layout >
    )
};

export default Contact
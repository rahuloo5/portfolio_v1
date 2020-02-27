import React from 'react';
import Layout from '../../layout';
import { ContactContainer } from './style';

const ALL_CONTACTS = [
    {
        icon: 'fab fa-github-square',
        link: 'https://github.com/obododavid',
    },
    {
        icon: 'fab fa-twitter-square',
        link: 'https://twitter.com/ObodoDavid2',
    },
    {
        icon: 'fab fa-linkedin',
        link: 'https://www.linkedin.com/in/obodo-david-998786174/',
    },
]

const Contact = () => {

    const handleCopyToClipboard = (e: any): void => {
        const element = document.createElement('textarea');
        element.value = e.target.innerHTML;
        document.body.appendChild(element);
        element.select();
        document.execCommand('copy');
        document.body.removeChild(element);
    }

    return (
        <Layout isFooterPresent={false} >
            <ContactContainer>
                <h1 className='contact__header'>contact.</h1>
                <p className='contact__subheader'>You can contact me through my mail or any of the platforms below:</p>
                <ul className='contact__links-wrapper'>
                    <li>
                        <i className='fas fa-envelope'></i>
                        <a onClick={handleCopyToClipboard}>obododavid5@gmail.com</a>
                    </li>
                    {ALL_CONTACTS.map((contact, i) => {
                        const { icon, link } = contact
                        return <li>
                            <i className={icon}></i>
                            <a href={link} target='_blank'>{link}</a>
                        </li>
                    })}
                </ul>
            </ContactContainer>
        </Layout >
    )
};

export default Contact
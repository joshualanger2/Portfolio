import React from 'react';
import styled from 'styled-components'
import { FlexDiv } from '../global/styled-components';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import {openInNewTab} from '../../utility/openInNewTab'

const SocialIconContainter = styled(FlexDiv)`
    max-width: 250px;
    min-height: 30px;
    max-height: 100%;
    background-color: #D6E0F0;
    justify-content: center;
    margin: 20px auto;
    border-radius: 5px;
    padding: 10px;
`;

const Circle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 0 10px;
    background: none;
    width: 60px;
    height: 60px;
    &:hover {
        background-color: #c7d0df;
        cursor: pointer;
    }
`;

function Footer() {
    return (
        <SocialIconContainter>
            <Circle onClick={() => openInNewTab('https://www.linkedin.com/in/nicolasjoshualanger/')}>
                <FaLinkedin className="social-icon"/>
            </Circle>
            <Circle onClick={() => openInNewTab('https://github.com/joshualanger2')}>
                <FaGithub className="social-icon"/>
            </Circle>
        </SocialIconContainter>
    );
}

export default Footer;
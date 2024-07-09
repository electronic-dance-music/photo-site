import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
    background: #ffffff;
    color: #333;
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap; /* Allow flex items to wrap */
    
    @media (max-width: 800px) {
        flex-direction: column;
        text-align: center;
    }
`;

const FooterText = styled.p`
    margin: 0;

    @media (max-width: 800px) {
        margin-bottom: 10px;
    }
`;

const IconLink = styled.a`
    color: #333;
    margin-left: 15px;
    margin-right: 9px;
    &:hover {
        color: #e4405f;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 800px) {
        justify-content: center;
        margin-bottom: 10px;
    }
`;

const IconButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color: #555;
    }

    &:focus {
        outline: none;
    }

    & + & {
        margin-left: 10px; /* Add space between the buttons */
    }
`;

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>All content &copy; 2024 Lizzie Miller Photography. All rights reserved.</FooterText>
            <ButtonContainer>
                <IconButton to="/">
                    <FontAwesomeIcon icon={faHome} />
                </IconButton>
                <IconLink href="https://www.instagram.com/lizzie.denim.miller/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </IconLink>
                <IconButton as="button" onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </IconButton>
            </ButtonContainer>
        </FooterContainer>
    );
};

export default Footer;

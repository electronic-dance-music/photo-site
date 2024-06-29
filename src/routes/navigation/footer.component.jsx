import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const FooterContainer = styled.footer`
    background: linear-gradient(90deg, #ffffff 0%, #f5f5f5 50%, #dcdcdc 100%);
    color: #333;
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const FooterText = styled.p`
    margin: 0;
`;

const IconLink = styled.a`
    color: #333;
    margin-left: 10px;
    &:hover {
        color: #e4405f;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
`;

const BackToTopButton = styled.button`
    margin-left: 10px;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #333;
    color: #fff;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #555;
    }

    display: flex;
    align-items: center;
    justify-content: center;
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
                <IconLink href="https://www.instagram.com/lizzie.denim.miller/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </IconLink>
                <BackToTopButton onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faArrowUp} size="lg" />
                </BackToTopButton>
            </ButtonContainer>
        </FooterContainer>
    );
};

export default Footer;

import styled from "styled-components";
import { Link } from "react-router-dom";
import { sharedStyleProps } from "../../styles/globalstyles.styles";
import { Image } from "semantic-ui-react";


//the height of the navbar MSUT match the padding located underneath it to ensure no content at the top of screen is lost
const SharedNavigationHeightProp = {navigationHeight: 50}

interface INavigationLinkProps
{
    side: string,
    mobileNavVisible?:Boolean
}

export const NavTitleLink = styled(Link)`
    text-decoration: none;
    color: #000;

    &:hover {
        color: #000;
        text-decoration: none;
        transform: scale(1.05);
        transition: transform 0.3s ease, color 0.3s ease, background-color 0.3s ease;
    }
`

export const NavTitleText = styled.h1`
    padding-right: 20px;
    padding-left: 10px;
    font-family: ${sharedStyleProps.fontsToUse};
    font-size: 26px;
`


export const NavigationHamburger = styled.div`
    display: none;
    color: #999;
    


    @media screen and (max-width: ${props => sharedStyleProps.tabletViewMaxWidth}){
        display: block;
        position: absolute;
        right: 1rem;
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavigationContainer = styled.div`
    height: ${props => SharedNavigationHeightProp.navigationHeight.toString() + "px"};
    width: 100%;
    background: ${props => sharedStyleProps.primaryBackgroundGradient};


    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: fixed;
    z-index: 800;
    white-space: nowrap;

    font-family: ${sharedStyleProps.fontsToUse};

     @media screen and (max-width: ${props => sharedStyleProps.tabletViewMaxWidth}){
    justify-content: flex-start;
    }
`

export const NavigationLink = styled(Link)<INavigationLinkProps>`
    margin: 0px 8px;
    padding: 0px 5px;
    cursor: pointer;
    color: ${sharedStyleProps.primaryTextColor};
    letter-spacing: 1px;
    vertical-align: sub;
    text-decoration: none;
    font-family: ${sharedStyleProps.fontsToUse};
    font-size: clamp(14px, 4vw, 16px);
    border: ${props => props.side === "l" ? "none" : "0.2rem solid #fff"};
    border-radius: 10px;

    &:hover {
        color: rgba(45, 45, 45, 0.6);
        background-color: ${props => props.side === "l" ? "transparent" : "#fff"};
        transform: scale(1.05);
        transition: transform 0.3s ease, color 0.3s ease, background-color 0.3s ease;
    }

    // Conditional styling for active link (current page)
    &.active {
        pointer-events: none; /* Disable link */
        color: rgba(45, 45, 45, 0.6);
        background-color: ${props => props.side === "l" ? "transparent" : "#fff"};
        // transform: scale(1.05);
    }

    @media screen and (max-width: ${props => sharedStyleProps.tabletViewMaxWidth}){
        text-align: center;
        margin: 15px;
        width: 80%;
        display: table;
        font-size: clamp(15px, 4vw, 18px);
    }
`;


export const NavigationLinkContainer = styled.div<INavigationLinkProps>`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: ${props => props.side === "l" ? "left" : "right"};

    @media screen and (max-width: ${props => sharedStyleProps.tabletViewMaxWidth}){
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100vh;
        position: absolute;
        top: ${props => props.side === "l" ? "50px" : "250px"};

        transition: all 0.5s ease;
        
        background: ${props => sharedStyleProps.primaryBackgroundGradient};
        left: ${props => props.mobileNavVisible ? 0 : "-100%"};
        opacity: ${props => props.mobileNavVisible ? 1 : 0};
        z-index: 1;

        // margin-top: ${props => props.side === 'l' ? 0 : '20px'};
        
    }

    // @media screen and (min-width: ${props => sharedStyleProps.tabletViewMaxWidth}){
        // margin: 0 5%;
    // }
`

export const BelowNavigationContainer = styled.div`
    padding-top: ${props => (SharedNavigationHeightProp.navigationHeight).toString() + "px"};
`

export const NavigationLogoImage = styled(Image)`
    width: 14rem;//5.2rem;
    height: auto;
    padding-left: 10px;
    @media screen and (min-width: ${props => sharedStyleProps.tabletViewMaxWidth}){
        margin-right: 10px!important;
    }
`
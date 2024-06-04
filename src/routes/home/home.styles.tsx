import { Container, Image, Message } from "semantic-ui-react";
import styled from "styled-components";
import { sharedStyleProps } from "../../styles/globalstyles.styles";

//#region HOME HEADER
export const HomeHeaderContainer = styled.div`
    background: ${props => sharedStyleProps.primaryBackgroundGradient}; 
    width: 100%;
    height: auto;
    padding-bottom: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    top: -10px;
`

export const HomeHeaderImage = styled(Image)`
    width: 25%;
    margin-bottom: 20px;

    @media screen and (max-width: ${sharedStyleProps.mobileViewMaxWidth}){
        width: 80%!important;
    }
`

export const HomeHeaderButton = styled.a`
    color: #ffffff!important;
    width: fit-content;
    text-decoration: none;
    padding: 0.5rem 1.0rem;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    white-space: nowrap;
    border-radius: 0.4em;
    background-color: ${sharedStyleProps.primaryColor};

    &:hover{
        background-color: ${sharedStyleProps.secondaryColor};
    }
`
//#endregion


//#region HOME BODY

export const HomeBodyMasterContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    justify-content: space-evenly;
    align-items: center;
    padding: 2rem 2rem;
`

export const HomeTextContainer = styled(Message)`
    width: 60%;

    @media screen and (max-width: ${sharedStyleProps.mobileViewMaxWidth}){
        width: 100%;
    }
`

export const HomeSingleTextSection = styled(Container)`
    
`

export const HomeBodyImage = styled(Image)`
    width: 10%;
`

//#endregion
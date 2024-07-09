import styled from "styled-components"


interface IHorizontalLineProps
{
    lineWidth: string
}

export const HorizontalLine = styled.hr<IHorizontalLineProps>`
    width: ${props => props.lineWidth};
`

//css variables essentially to help share props like colors or sizes between various components
export const sharedStyleProps = {
    mobileViewMaxWidth: "700px",
    tabletViewMaxWidth: "1000px",

    //colors and gradients
    primaryBackgroundGradient: "#ffffff",
    primaryColor: "#0171BC",
    secondaryColor: "#747474",
}
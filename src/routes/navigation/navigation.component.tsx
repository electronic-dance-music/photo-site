import { NavigationContainer, NavigationLink, NavigationLinkContainer, BelowNavigationContainer, NavigationHamburger, NavigationLogoImage, NavTitleText } from "./navigation.styles";
import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import { INavigationSection, NavigationSections } from "./navigation.sections";
import { Icon } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const Navigation = () => {
    const dispatch = useAppDispatch()

    const { isLoggedIn, username } = useAppSelector((state) => state.user)

    const [mobileNavIsVisible, setMobileNavIsVisible] = useState<Boolean>(false);

    function toggleMobileNavVisibility():void
    {
        setMobileNavIsVisible(!mobileNavIsVisible);
    }
    
    function closeMobileNav():void
    {
        setMobileNavIsVisible(false);
    }


    //{/* all the sections for navigation are stored in the navigations.sections.js file (add object into the array there for new section) */}
    return(
        <Fragment>
            <NavigationContainer>
                {/* hamburger menu for smaller displays to compress the nav */}
                <NavigationHamburger onClick={toggleMobileNavVisibility}><Icon name={mobileNavIsVisible ? "times" : "bars"} /></NavigationHamburger>

                {/* <NavigationLogoImage src={`${process.env.PUBLIC_URL}/images/x.png`} centered ui={true} /> */}
                <NavTitleText>Lizzie Miller</NavTitleText>

                <NavigationLinkContainer mobileNavVisible={mobileNavIsVisible} side="l">
                    {NavigationSections
                        .filter((item:INavigationSection) => item.side === "r" 
                                                                    ? false 
                                                                    : !(item.codeId === 'submitCategory' && !isLoggedIn))
                        .map((item:INavigationSection, index:number) => {
                            return(
                                <NavigationLink key={index} onClick={closeMobileNav} side="l" to={item.path}>{item.label}</NavigationLink>
                            )
                    })}
                </NavigationLinkContainer>
                {/* <NavigationLinkContainer mobileNavVisible={mobileNavIsVisible} side="r">
                    {NavigationSections.filter((item:INavigationSection) => item.side === "l"
                                                                                ? false
                                                                                : !(item.codeId === 'signup' && !isLoggedIn)                                 
                    ).map((item:INavigationSection, index:number) => {
                        const indexStr = "m" + index;

                        //change the login button to direct to the user's account view page if they are already signed in
                        let pathToUse = item.path;
                        let labelToUse = item.label
                        
                        //the login button becomes the button to view the user profile once the user is logged in
                        if(item.codeId === 'login' && isLoggedIn)
                        {
                            pathToUse = `/user/${username}`
                            labelToUse = username
                        }

                        //the signup button becomes the logout button once the user is logged in
                        if(item.codeId === 'signup' && isLoggedIn)
                        {
                            pathToUse = '/'
                            labelToUse = 'Log Out'
                            return(
                                <NavigationLink key={indexStr} 
                                                onClick={() => {
                                                                    closeMobileNav(); 
                                                                    dispatch({
                                                                        type: 'user/logout', 
                                                                        payload: {}    
                                                                    })
                                                                }} 
                                                side="r" 
                                                to={pathToUse}>{labelToUse}</NavigationLink>
                            )
                        }

                        return(
                            <NavigationLink key={indexStr} onClick={closeMobileNav} side="r" to={pathToUse}>{labelToUse}</NavigationLink>
                        )
                    })}
                </NavigationLinkContainer> */}
            </NavigationContainer>
            {/* may decide to change it so this can be manually added to pages if desired, but without it, the age will be
            able to have a top image that can be behind the nav */}
            <BelowNavigationContainer />
            <Outlet />
        </Fragment>
    )
}

export default Navigation
import { Fragment, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { INavigationSection, NavigationSections } from "./navigation.sections";
import { Icon } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { NavTitleLink, NavTitleText, NavigationHamburger, NavigationContainer, NavigationLinkContainer, BelowNavigationContainer, NavigationLink, NavigationLogoImage } from "./navigation.styles";

const Navigation = () => {
    const dispatch = useAppDispatch();
    const { isLoggedIn, username } = useAppSelector((state) => state.user);
    const [mobileNavIsVisible, setMobileNavIsVisible] = useState<Boolean>(false);
    const location = useLocation();

    function toggleMobileNavVisibility(): void {
        setMobileNavIsVisible(!mobileNavIsVisible);
    }

    function closeMobileNav(): void {
        setMobileNavIsVisible(false);
    }

    return (
        <Fragment>
            <NavigationContainer>
                <NavigationHamburger onClick={toggleMobileNavVisibility}>
                    <Icon name={mobileNavIsVisible ? "times" : "bars"} />
                </NavigationHamburger>
                <NavTitleLink to="/">
                    <NavTitleText>Lizzie Miller</NavTitleText>
                </NavTitleLink>
                <NavigationLinkContainer mobileNavVisible={mobileNavIsVisible} side="l">
                    {NavigationSections
                        .filter((item: INavigationSection) => item.side === "r" ? false : !(item.codeId === 'submitCategory' && !isLoggedIn))
                        .map((item: INavigationSection, index: number) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <NavigationLink key={index} onClick={isActive ? undefined : closeMobileNav} side="l" to={item.path} className={isActive ? 'active' : ''}>{item.label}</NavigationLink>
                            )
                        })}
                </NavigationLinkContainer>
            </NavigationContainer>
            <BelowNavigationContainer />
            <Outlet />
        </Fragment>
    )
}

export default Navigation;

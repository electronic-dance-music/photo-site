export interface INavigationSection
{
    label: string,
    path: string,
    side: string,
    //teh codeId is a consistent way to identify each section just in
    //case the label is changed (the lable is dispalyed on screen and thus
    //may be changed depending on what word(s) we want visible)
    codeId: string
}

export const NavigationSections:INavigationSection[] = [
    {
        label: 'HOME',
        path: '/',
        side: 'l',
        codeId: 'home'
    },
    {
        label: 'PORTFOLIO',
        path: '/portfolio',
        side: 'l',
        codeId: 'portfolio'
    },
    {
        label: 'PRICING',
        path: '/pricing',
        side: 'l',
        codeId: 'pricing'
    },
    {
        label: 'ABOUT ME',
        path: '/about',
        side: 'l',
        codeId: 'about'
    },
    {
        label: 'CONTACT',
        path: '/contact',
        side: 'l',
        codeId: 'contact'
    }
]
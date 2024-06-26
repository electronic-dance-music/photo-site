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
        label: 'Home',
        path: '/',
        side: 'l',
        codeId: 'home'
    },
    {
        label: 'Photo Gallery',
        path: '/gallery',
        side: 'l',
        codeId: 'gallery'
    },
    {
        label: 'About Me',
        path: '/about',
        side: 'l',
        codeId: 'about'
    },
    {
        label: 'Contact',
        path: '/contact',
        side: 'l',
        codeId: 'contact'
    }
]
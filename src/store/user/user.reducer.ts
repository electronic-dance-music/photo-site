import { PayloadAction } from "@reduxjs/toolkit"

export interface IUserInfo
{
    isLoggedIn: Boolean,
    username: string
}

//use localStore on broswer to maintian the login state of the user evenon page refresh
const USER_INITIAL_STATE:IUserInfo = {
    'isLoggedIn': (localStorage.getItem('isLoggedIn') === 'true') || false,
    'username': localStorage.getItem('username') || ''
}

const loginHandler = (username:string):IUserInfo => {
    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('username', username)
    return {'isLoggedIn': true, 'username': username}
}

const logoutHandler = ():IUserInfo => {
    localStorage.setItem('isLoggedIn', 'false')
    localStorage.setItem('username', '')
    return {'isLoggedIn':false, 'username': ''}
}



export default function userReducer(state:IUserInfo = USER_INITIAL_STATE, action:PayloadAction<IUserInfo>){
    switch (action.type) {
        case 'user/login':
            return {...state, ...loginHandler(action.payload.username)}

        case 'user/logout':
            return {...state, ...logoutHandler()}
    
        default:
            return state
    }
}
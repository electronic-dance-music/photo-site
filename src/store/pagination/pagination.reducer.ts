import { PayloadAction } from "@reduxjs/toolkit"

export interface IPaginationInfo
{
    page: number,
    index: number
}

const PAGINATION_INITIAL_STATE:IPaginationInfo = {
    'page': 1,
    'index': 0
}

function changePageAndIndex(page:number)
{
    return {'page': page, 'index': page-1}
}

export default function paginationReducer(state:IPaginationInfo = PAGINATION_INITIAL_STATE, action:PayloadAction<IPaginationInfo>){
    switch (action.type) {
        case 'pagination/changePage':
            return {...state, ...changePageAndIndex(action.payload.page)}
    
        default:
            return state
    }
}
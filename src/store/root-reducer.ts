import { combineReducers } from "@reduxjs/toolkit";
import paginationReducer from "./pagination/pagination.reducer";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({pagination: paginationReducer, user: userReducer})

export default rootReducer
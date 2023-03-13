import registerReducer from "./reg";
import loginReducer from "./login";
import fetch from './fetch'
import {combineReducers} from 'redux';



const AllReducers=combineReducers({
    login: loginReducer,
    register:registerReducer,
    users: fetch
    
});

export default AllReducers;
import {GET_USERS, USERS_ERROR} from './types'
import axios from 'axios';


export const name=(name)=>{
    return{
        type: 'name',
        name
    }
}
export const email=(email)=>{
    return{
        type: 'email',
        email,
    }
}
export const password=(password)=>{
    return{
        type: 'password',
        password,
    }
}
export const confirmPass=(confirmPass)=>{
    return{
        type: 'confirmPass',
        confirmPass,
    }
}
export const signup=()=>{
return{
    type: 'SIGNUP',
}
}
export const emailORUsername=(emailORUsername)=>{
    return{
        type: 'emailORUsername',
        emailORUsername
    }
}
export const login=()=>{
    return{
        type: 'LOGIN',
    }
    
}

// export const getUsers = () => async dispatch => {

//     try{
//         const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=cd50b668108ab0e7d74f4585d5c05b53`)
//         dispatch( {
//             type: GET_USERS,
//             payload: res.data.results
//         })
//     }
//     catch(e){
//         dispatch( {
//             type: USERS_ERROR,
//             payload: console.log(e),
//         })
//     }

// }
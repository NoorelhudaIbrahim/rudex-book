import axios from "axios";
import { useNavigate } from "react-router-dom";

const nameRegExp= RegExp(
    /^[A-Za-z0-9_-]*$/
)
const emailRegExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)
const passRegExp= RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
)



const registerReducer=(state={nameError:'',emailError:'',passError:'',confirmPassError:'',name:''},action)=>{
    switch(action.type){
        
        case "name":
            if(action.name !=='' && nameRegExp.test(action.name)){
                return {...state,
                    name:action.name,
                    nameError: null};
            }else{
                return{...state,
                    nameError: 'Username is invalid'}
            }
        case "email":
            if(action.email !=='' && emailRegExp.test(action.email)){
                return {...state,email:action.email, emailError: null}
            }else{
                return{...state,emailError: 'Email is invalid'}
            }
        case "password":
            if(action.password !=='' && passRegExp.test(action.password)){
                return {...state,password:action.password, passError: null}
            }else{
                return{...state,passError: 'Password is invalid'}
            }
        case "confirmPass":
            if(action.confirmPass === state.password && action.password !== ''){
                return {...state, confirmPassError: null};
            }else{
                return{...state,confirmPassError: 'The two passwords do not match'}
            }
        case "SIGNUP":
            if(state.nameError == null && state.emailError == null && state.passError == null && state.confirmPassError == null) {
                axios.post('http://localhost/Book/BookApp/backend/reg.php?name='+state.name+'&email='+state.email+'&password='+state.password)
                window.location.href = "/Login";
             console.log('here');
            }else{
                return console.log('error');
            }
            break;
        default:
            return state;
    }
    
    
}
export default registerReducer;
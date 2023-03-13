import axios from "axios";
let user ='';

const loginReducer=(state={error:''},action)=>{

    switch(action.type){
        
        case "emailORUsername":
            if(action.emailORUsername !==''){
                return {...state,emailORUsername:action.emailORUsername};
            }
            break;
        case "password":
            if(action.password !==''){
                return {...state, password:action.password}
            }
            break;
        case "LOGIN":
          console.log("login")
                const loadInfo = async () => {
                    const res = await axios.get(`http://localhost/Book/BookApp/backend/login.php?email=${state.emailORUsername}&password=${state.password}`);
                    // sessionStorage.clear()
                sessionStorage.setItem("user_info",JSON.stringify( res.data ));
                console.log(res.data,"data");
                let user_info=JSON.parse( sessionStorage.getItem("user_info"));
        

                console.log(user_info);
                if(user_info !==''){
                    // window.location.href = "/home";
                }
                return {...state, error: 'Username/ email or password is invalid'}
            
  
            };
            loadInfo();
            
            
        default:
            return state;
    }
    
    
    
}
export default loginReducer;
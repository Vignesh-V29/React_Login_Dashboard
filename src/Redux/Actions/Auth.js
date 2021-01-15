 export const loginSuccess = (loginData) =>{
     return {
        type:'LOGIN_SUCCESS',
        payload:loginData
     }
 }

 export const loginFailure = (loginData) =>{
    return {
       type:'LOGIN_FAIL',
       payload:loginData
    }
}

export const logoutUser = () =>{
   return {
      type:'LOGOUT_USER'      
   }
}

export const loggedInUser = () =>{
   return {
      type:'LOGIN_USER'      
   }
}
const initialState =  {
    authentication:false
  };
  
const Reducer = (state = initialState, action) => {
      switch(action.type){
          case 'LOGIN_SUCCESS':
          case 'LOGIN_USER':
            localStorage.setItem('token','Token')
              return {
                  ...state,
                  authentication: true                
              }
  
            case 'LOGIN_FAIL':
              return {
                  ...state,
                  authentication:false
              }

            case 'LOGOUT_USER':
              return {
                  ...state,
                  authentication:false
              }
         
          default:
              return state
      }
  }

  export default Reducer;
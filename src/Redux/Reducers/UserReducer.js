const initialState =  {
  users:[],
  errors:[],
  isAuthenticated:false,
  loading:true
};

const Reducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_USER':
            return {
                ...state,
                users:action.payload,
                isAuthenticated:true,
                loading:false           
            }

        case 'CLEAR_USER':
                return {
                    ...state,
                    users:[],
                    isAuthenticated:false,
                    errors:[],
                    loading:false                 
                }
        case 'USER_ERROR':
            return {
                ...state,
                users:[],
                errors:action.payload,
                isAuthenticated:false,
                loading:false 
            }
       
        default:
            return state
    }
}

export default Reducer;
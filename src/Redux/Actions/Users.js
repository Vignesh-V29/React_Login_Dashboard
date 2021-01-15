import axios from 'axios';
 
export const getUser = () => async dispatch => {

    try {
        const response = await axios.get('http://localhost:5000/user')
    
        dispatch({
            type:'GET_USER',
            payload:response.data
        })

    } catch (err) {
        dispatch({
            type:'USER_ERROR',
            payload:err.message
        })
    }
}

export const clearUser = () => {
    return {
        type:'CLEAR_USER'
    }
}
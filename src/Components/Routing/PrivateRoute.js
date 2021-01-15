import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRoute = ({component : Component, loginUser , ...rest}) => {

    return (
       <Route {...rest} render={props => 
           localStorage.getItem('token') ? (<Component {...props}/>) :(<Redirect to='/'/>)
       }       
       />
    )
}

const mapStateToProps = state => ({
    loginUser:state.login.authentication
})

export default connect(mapStateToProps,null)(PrivateRoute)



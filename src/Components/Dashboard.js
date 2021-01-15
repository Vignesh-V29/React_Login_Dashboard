import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import {getUser,clearUser} from '../Redux/Actions/Users';
import {logoutUser,loggedInUser} from '../Redux/Actions/Auth';
import {Link} from 'react-router-dom';
import '../App.css';
import '../Styles/dashboard.css';
import ErrorAlert from './Layout/ErrorAlert';


const Dashboard = (props) => {

    const {usersList:{users,errors,loading},getUser,clearUser,logoutUser,loggedInUser} = props

    useEffect( () => {
        getUser()          
        loggedInUser()    
      }, [getUser,loggedInUser])

      const [logout, setLogout] = useState(false)

      const signOut = () =>{
        setLogout(true);
        localStorage.removeItem('token')
        props.history.push('/')
        logoutUser()
        clearUser()
      }

    return (

        <div className="dashBoard">
            <div className="Header">
                <h1>Dashboard</h1>
                <div className="holder">
                <li>
                    <Link to='/' className="list" onClick={signOut}>Logout</Link>                    
                </li>
                    {!logout ? <img src="/static/media/user-min.53c6e851.png" alt="Avatar" className="avatarImg"/>:null}
                </div>
                
            </div>
            <div className="content">
             {loading ? <div className="loadingText">Loading....</div> : 
            (users.length > 0 && !loading) ?
            <table id="users">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>GENDER</th>
                    <th>EMAIL</th>
                    <th>PHONE</th>
                </tr>
                </thead>
                <tbody>
                    {
                         users.map((user) => (
                            <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.gender}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNo}</td>
                     </tr>
                        ))
                    }
                </tbody>
            </table>
            :
                   <ErrorAlert field={errors}/>
                }
            </div>    
        </div>
    )
}

const mapStateToProps = state => ({
    usersList:state.user,
    loginUser:state.login.authentication
})

export default connect(mapStateToProps,{getUser,clearUser,logoutUser,loggedInUser})(Dashboard)

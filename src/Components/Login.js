import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import {loginSuccess,loginFailure} from '../Redux/Actions/Auth';
import '../Styles/login.css';
import '../App.css';

const Login = (props) => {

    const [user, setUser] = useState({      
        username:'',
        password:''       
    })
    const [error, setError] = useState(false)
    const [msg, setMsg] = useState('')

    //Destructuring
    const {username,password} = user;

    useEffect(() => {
        localStorage.removeItem('token')
        props.history.push('/')
    }, [props.history])

    const onChange = e => {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit = e =>{
        e.preventDefault();
        if(username === '' || password === ''){
            setError(true)
            setMsg('Please Enter the fields......')

            setTimeout(() => {
                setMsg('')
            }, 2000);
        }    
        else{          
            if(username === 'hruday@gmail.com' && password === 'hruday123'){
                props.loginSuccess(true);
                props.history.push("/dash");
                setError(false)
                setUser({
                    username:'',
                    password:'' 
                })
            }
            else{
                setError(true)
                setMsg('Please provide a valid credential......')
                setTimeout(() => {
                    setMsg('')
                }, 2000);
            }
        }
    }

    return (
        <div className="login-form">
            <form onSubmit={onSubmit}>
                {error ? <span className="errormsg"><div style={{width:'100%'}}>{msg}
                        </div></span>: <span className="noError"></span>}
                <div className="imgHolder">
                    <img src="/static/media/user-min.53c6e851.png" alt="Avatar" className="img"/>
                </div>               
                <div className="form-group">
                    <label htmlFor="username" className="label">UserName</label>
                    <input type="text" name="username" style={username ? {width:'100%'}: {width:'60%'}} id="username" value={username} onChange={onChange} autoComplete="off" />                                         
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" name="password" style={password ? {width:'100%'}: {width:'60%'}} id="password" value={password} onChange={onChange} autoComplete="off" />                    
                </div>
                <div className="form-group btn-block">
                    <input type="submit" value="Login" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}


const mapStateToProps = state => ({
    loginUser:state.login.authentication
})

export default connect(mapStateToProps,{loginSuccess,loginFailure})(Login)

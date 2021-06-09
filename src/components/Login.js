import React, { useState,useEffect } from 'react'
import { Link,useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import './Login.css'
import { useStateValue } from './StateProvider';

const Login = () => {
    const history=useHistory();
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('')
    const [{user},dispatch]=useStateValue()
    useEffect(() => {
       if(user){
           history.push('/profile');
       }
    }, [])
    

    const logIn=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{
            history.push('/')
        })
        .catch(error=>alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__container">
                <h2>Log In</h2>
                <div className="login__input">
                    <input type="email" placeholder="Email Address" value={email} onChange={(e)=> setemail(e.target.value)}/>
                    <input type="password" name="" id="" placeholder="Password" value={password} onChange={(e)=> setpassword(e.target.value)}/>
                </div>
                <button className="login__button" on onClick={logIn}>LOG IN</button>
                <p>Need help logging in?</p>

                <div className="signup__buttons">
                 <Link to="/signup" style={{ textDecoration: 'none' }}>
                      <button className="signup__button" >SIGN UP</button>
                      </Link>  
                    <button className="signup__button__google">SIGNUP WITH GOOGLE</button>
                </div>
            </div>
        </div>
    )
}

export default Login

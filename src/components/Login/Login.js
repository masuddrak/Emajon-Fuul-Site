import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/shop";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const naviget=useNavigate()
    const handeEmail = (event) => {
        setEmail(event.target.value)
    }
    const handePassword = (event) => {
        setPassword(event.target.value)
    }
    
    if(user){

        navigate(from, { replace: true });
    }
    const handelLoinUser=(event)=>{
        event.preventDefault()
        signInWithEmailAndPassword(email,password)
    }
    return (
        <div className='form-containe'>
            <h2 className='form-title'>LogIn</h2>
            <div className='form-label'>
                <div>
                    <form onSubmit={handelLoinUser}>
                        <div className="input-grup">
                            <label htmlFor="email">Email</label>
                            <input onBlur={handeEmail} type="email" name="email" id="" required />
                        </div>
                        <div className="input-grup">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handePassword} type="password" name="password" id="" required />
                        </div>
                        {
                            error?.message
                        }
                        {
                            user?.email
                        }
                        <div className="input-grup">
                            <input className='submit' type="submit" value="Submit" />
                        </div>
                        < p>Emajon New?<Link to='/signup'>Creat a New Account</Link></p>
                    </form>
                    <div className='google-signin'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png" alt="" />
                        <p>Goole With Sigup</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
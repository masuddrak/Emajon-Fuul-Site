import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [error,setError]=useState('')
    return (
        <div className='form-containe'>
            <h2 className='form-title'>LogIn</h2>
            <div className='form-label'>
                <div>
                <form >
                    <div className="input-grup">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required/>
                    </div>
                    <div className="input-grup">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required/>
                    </div>
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
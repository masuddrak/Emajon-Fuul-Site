import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigat=useNavigate()
    // set up authentication
    const [createUserWithEmailAndPassword,user]=useCreateUserWithEmailAndPassword(auth)

    // handel event
    const handeEmail = (event) => {
        setEmail(event.target.value)
    }
    const handePassword = (event) => {
        setPassword(event.target.value)
    }
    const handeConfirmPassword = (event) => {
        setConfirmPassword(event.target.value)
    }
    if(user){
        navigat('/shop')
    }
    const handelCreateUser=(event)=>{
        event.preventDefault()
        if(password!==confirmPassword){
            setError('do not match')
            return;
        }
        if(password.length<6){
            setError('password showd be 7 cheracter')
            return
        }
        createUserWithEmailAndPassword(email,password)
    }
    return (
        <div className='form-containe'>
            <h2 className='form-title'>Sign Up</h2>
            <div className='form-label'>
                <div>
                    <form onSubmit={handelCreateUser}>
                        <div className="input-grup">
                            <label htmlFor="email">Email</label>
                            <input onBlur={handeEmail} type="email" name="email" id="" required />
                        </div>
                        <div className="input-grup">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handePassword} type="password" name="password" id="" required />
                        </div>
                        <div className="input-grup">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input onBlur={handeConfirmPassword} type="password" name="confirm-password" id="" required />
                            <p>{error}</p>
                        </div>
                        <div className="input-grup">
                            <input className='submit' type="submit" value="Submit" />
                        </div>
                        < p>Alredy have a accound?<Link to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
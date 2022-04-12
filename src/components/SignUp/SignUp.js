import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='form-containe'>
            <h2 className='form-title'>Sign Up</h2>
            <div className='form-label'>
                <div>
                <form >
                    <div className="input-grup">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className="input-grup">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" />
                    </div>
                    <div className="input-grup">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" name="confirm-password" id="" />
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
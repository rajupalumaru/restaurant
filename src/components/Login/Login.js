import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='container'>
            <div className='login'>
                <div className='login-form'>
                    <h1>Login</h1>
                    <div className='label-form'>
                        <label>Email</label>
                        <input type='text' placeholder='email' />
                    </div>
                    <div className='label-form'>
                        <label>Password</label>
                        <input type='password' placeholder='Enter Password' />
                    </div>
                    <div className='login-forgot'>
                        <div>
                            <input type='checkbox' />
                            <span>Remember Me</span>
                        </div>
                        <a href='#'>Forgot Password</a>
                    </div>
                    <p><b>Don't have an account? &nbsp;<a href='#'>Sign Up </a></b></p>
                    <button className='login-button'>Login</button>
                </div>

                <div className='login-image'>
                    <img src='https://snipstock.com/assets/cdn/png/new/706fcd569133742630346ea755abe888.png' alt='' />

                </div>
            </div>
        </div>
    )
}

export default Login

import React from 'react'
import './ForgotPassword.css';
const ForgotPassword = () => {
    return (
        <div className='forgot'>
             <h1>Forgot Password</h1>
            <div className='label-form'>
                <label>Email</label>
                <input type='text' placeholder='Enter Password' />
            </div>
            <a href='#'><b>Back To Login</b></a>
            
            <button className='login-button'>Resend Password</button>
        </div>
    )
}

export default ForgotPassword

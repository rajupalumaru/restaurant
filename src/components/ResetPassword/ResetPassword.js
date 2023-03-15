import React from 'react';
import '../ForgotPassword/ForgotPassword.css';

const ResetPassword = () => {
    return (
        <div className='forgot'>
            <h1>Reset Password</h1>
            <div className='label-form'>
                <label>New Password</label>
                <input type='text' placeholder='Enter Password' />
            </div>
            <div className='label-form'>
                <label>Confirm Password</label>
                <input type='text' placeholder='Enter Confirm Password' />
            </div>
            <a href='#'><b>Back To Login</b></a>

            <button className='login-button'>Reset Password</button>
        </div>
    )
}

export default ResetPassword

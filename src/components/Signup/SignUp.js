import React from 'react'

const SignUp = () => {
  return (
    <div className='container'>
            <div className='login signup'>
                <div className='login-form'>
                    <h1>Sign Up</h1>
                    <div className='label-form'>
                        <label>Full Name</label>
                        <input type='text' placeholder='Enter Full Name' />
                    </div>
                    <div className='label-form'>
                        <label>Restaurant Name</label>
                        <input type='text' placeholder='Enter Restaurant Name' />
                    </div>
                    <div className='label-form'>
                        <label>Email</label>
                        <input type='text' placeholder='email' />
                    </div>
                    <div className='label-form'>
                        <label>Password</label>
                        <input type='password' placeholder='Enter Password' />
                    </div>
                    
                    <p><b>Already Have an Account? &nbsp;<a href='#'>Sign In </a></b></p>
                    <button className='login-button'>Sign Up</button>
                </div>

                <div className='login-image'>
                    <div className='sign'>
                    <img src='https://snipstock.com/assets/cdn/png/new/706fcd569133742630346ea755abe888.png' alt='' />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SignUp

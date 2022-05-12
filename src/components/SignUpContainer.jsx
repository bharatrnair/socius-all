import React from 'react'

const SignUpContainer = () => {
  return (
    <div className= "signUpContainer">
    <div className="signUpSection">
    <p id='two'>Sign Up</p>
    <div className="signUpInput">
    <input type="text" placeholder='First Name' id='firstName' />
    <input type="text" placeholder='Last Name' id='lastName' />
    </div>
    <div className="formField">
      <p>E-mail</p>
    <input type="text" />
    </div>
    <div className="formField">
      <p>Create-Password</p>
    <input type="password" />
    </div>
    <div className="formField">
      <p>Confirm-Password</p>
    <input type="password" />
    </div>
    <div className="formField">
      <p>Date of Birth</p>
    <input type="date" />
    </div>
    <div className="formField">
      <p>Phone Number</p>
    <input type="text" />
    </div>
    <div className="formField">
      <p>State</p>
    <input type="text" />
    </div>
    <div className="formField">
      <p>City</p>
    <input type="text" />
    </div>
    <button id='signUpButton'>Sign-up</button>
    </div>

  </div>
  )
}

export default SignUpContainer
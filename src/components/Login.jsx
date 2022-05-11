import React from 'react';
import logo from './../components/Assets/logo.svg'
import './Login.css';

function Login() {
  return (
    <div className="mainContainer">

      <div className="loginContainer">
        <div className="loginSection">
        <div className="logoSection">
          <img src={logo} alt="" />
          <div className="line"></div>
           <h1>socius</h1>
        </div>

        <input type="text" placeholder='username' id='username' />
        <input type="text" placeholder='password'  id='password' />
      
      <div className="loginButton">
        <button id='login'>Log in</button>
      </div>
        <p id='one'>"connect people around"</p>
        </div>
        </div>
      
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
          <p>New-Password</p>
        <input type="text" />
        </div>
        <div className="formField">
          <p>Confirm New-Password</p>
        <input type="text" />
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

     
    </div>
  );
}

export default Login;

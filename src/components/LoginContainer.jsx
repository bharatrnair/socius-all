import React from 'react'
import logo from './../components/Assets/logo.svg'


const LoginContainer = () => {
  return (
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
  )
}

export default LoginContainer
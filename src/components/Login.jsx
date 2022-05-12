import React from 'react';
import LoginContainer from './LoginContainer';
import SignUpContainer from './SignUpContainer';
import "./Login.css"
function Login() {
  return (
    <div className="mainContainer">
   <LoginContainer/>
   <SignUpContainer/>
   </div>
  );
}

export default Login;

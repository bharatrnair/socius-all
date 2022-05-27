import React, { useState } from 'react'
import logo from './../components/Assets/logo.svg'
import { useNavigate } from 'react-router-dom'

const LoginContainer = () => {

const [values,setValues] = useState({Email: "", Password: ""})
const navigate = useNavigate();

const {Email,Password} = values;

const onChange = (key,value)=>{
  setValues(prev =>({
      ...prev,
      [key]:value
  }))
}

const formSubmit = (e)=>{
  e.preventDefault();
  fetch("https://localhost:44326//api/login",{
  method:"POST",
  credentials:'include',
  headers:{
      "Content-Type":"application/json"
    },
  body:JSON.stringify({...values})
}).then(res => res.json())
.then((res)=>{
  if(res.status == true)
   navigate("/Home")
});
}

  return (
    <div className="loginContainer">
      <form onSubmit={formSubmit}>
        <div className="loginSection">
        <div className="logoSection">
          <img src={logo} alt="" />
          <div className="line"></div>
           <h1>socius</h1>
        </div>

        <input type="text" 
                placeholder='username' 
                id='username' 
                value={Email}
                onChange={(e) => onChange("Email",e.target.value)} />
                
        <input type="text" 
                placeholder='password'  
                id='password' 
                value={Password}
                onChange={(e) => onChange("Password",e.target.value)} />
      
      <div className="loginButton">
        <button id='login'>Log in</button>
      </div>
        <p id='one'>"connect people around"</p>
        </div>
        </form>
        </div>
  )
}

export default LoginContainer
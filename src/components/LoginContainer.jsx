import React from 'react'
import logo from './../components/Assets/logo.svg'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const LoginContainer = () => {
const [values, setValues] = useState({Email:"",password:""})
const navigate = useNavigate();
const {Email,password} = values;
const onChange = (key,value)=>{
    setValues(prev =>({
        ...prev,
        [key]:value
    }))
}
const formSubmit = (e)=>{
    e.preventDefault();
    fetch("https://localhost:44327/api/login",{
        method:"POST",
        credentials:"include",
        headers:{
            "Content-Type":"application/json"
          },
          
        body:JSON.stringify({...values})
    }).then(res => res.json())  
    .then((res)=>{
        if(res.status ==true)
        navigate("/Home")
    }
    );
    
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
        

        <input type="text" placeholder='username' id='username' 
        value={Email}
        onChange={(e) => onChange("Email",e.target.value)} />
        <input type="password" placeholder='password'  id='password' 
        value={password}
        onChange={(e) => onChange("password",e.target.value)} />
        
      
      <div className="loginButton">
        
        <button id='login'>Log In</button>
      </div>
        <p id='one'>"connect people around"</p>
        </div>
      </form>
        </div>
  )
}

export default LoginContainer
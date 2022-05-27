import React from 'react'
import logo from './../components/Assets/logo.svg'
<<<<<<< HEAD
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const LoginContainer = () => {
const [values, setValues] = useState({Email:"",password:""})
const navigate = useNavigate();
const {Email,password} = values;
const onChange = (key,value)=>{
=======
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const LoginContainer = () => {
  const navigate = useNavigate();

const [values, setValues] = useState({Email: "", password: ""})

const {Email,password} = values;

  const onChange = (key,value)=>{
>>>>>>> 7a7c5465919c7d0f1f930f4363d9f38a72375b2e
    setValues(prev =>({
        ...prev,
        [key]:value
    }))
}
<<<<<<< HEAD
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
=======

const formSubmit = (e)=>{
  e.preventDefault();
fetch("https://localhost:44371/api/login",{
  method:"POST",
  credentials : 'include',
  headers:{
      "Content-Type":"application/json"
    },
  body:JSON.stringify({...values})
}).then(res => res.json())
.then((res)=>{
   if(res.status == true){
    navigate("/home") 
   }
   
});
}


  return (
    <div className="loginContainer">
      <form className='formSection' onSubmit={formSubmit}>
>>>>>>> 7a7c5465919c7d0f1f930f4363d9f38a72375b2e
        <div className="loginSection">
        <div className="logoSection">
          <img src={logo} alt="" />
          <div className="line"></div>
           <h1>socius</h1>
        </div>
        

<<<<<<< HEAD
        <input type="text" placeholder='username' id='username' 
        value={Email}
        onChange={(e) => onChange("Email",e.target.value)} />
        <input type="password" placeholder='password'  id='password' 
        value={password}
        onChange={(e) => onChange("password",e.target.value)} />
        
      
      <div className="loginButton">
        
        <button id='login'>Log In</button>
=======
        <input type="text" placeholder='username' id='username'
        value={Email}
        onChange={(e) => onChange("Email",e.target.value)}
         />

        <input type="password" placeholder='password'  id='password' 
         value={password} 
         onChange={(e) => onChange("password",e.target.value)}
         />
      
      <div className="loginButton">
        <button id='login' >Log in</button>
>>>>>>> 7a7c5465919c7d0f1f930f4363d9f38a72375b2e
      </div>

        <p id='one'>"connect people around"</p>
        </div>
<<<<<<< HEAD
      </form>
=======
        </form>
>>>>>>> 7a7c5465919c7d0f1f930f4363d9f38a72375b2e
        </div>
  )
}

export default LoginContainer
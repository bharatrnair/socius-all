import React from 'react'
import { useState, useEffect } from 'react'

const SignUpContainer = () => {

    // function _(id){
    //     return document.getElementById(id);
    // }

    // function main()
    // {
    //     _("signup-form").addEventListener("submit",UserSignUp);

    // }

    const [values, setValues] = useState({firstName: "", lasttName: "",
    Email:"",DateOfBirth:"",PhoneNumber:"",password:"",confirmpassword:"",State:"",City:""})
    
    const {firstName,lasttName,Email,DateOfBirth,PhoneNumber,password,confirmpassword,State,City} = values;

    const onChange = (key,value)=>{
        setValues(prev =>({
            ...prev,
            [key]:value
        }))
    }

    const formSubmit = (e)=>{
        e.preventDefault();
     fetch("https://localhost:44347/api/Usertbls/",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
          },
        body:JSON.stringify({...values,DOB:DateOfBirth})
     }).then(res => res.json())
     .then((res)=>{
         console.log(res)
     });
    }

  return (

    <div className= "signUpContainer">
        <form onSubmit={formSubmit}>
    <div className="signUpSection">
    <p id='two'>Sign Up</p>
    <div className="signUpInput">

    <input type="text" placeholder='First Name' id='firstName' 
    value={firstName}
    onChange={(e) => onChange("firstName",e.target.value)} />


    <input type="text" placeholder='Last Name' id='lastName'
    value={lasttName} 
    onChange={(e) => onChange("lasttName",e.target.value)}/>
    </div>

    <div className="formField">
      <p>E-mail</p>
    <input type="text" 
    value={Email} 
    onChange={(e) => onChange("Email",e.target.value)} />
    </div>

    <div className="formField">
      <p>Create-Password</p>
    <input type="password"
     value={password} 
     onChange={(e) => onChange("password",e.target.value)}/> 
    </div>

    <div className="formField">
      <p>Confirm-Password</p>
    <input type="password" 
     value={confirmpassword} 
      onChange={(e) => onChange("confirmpassword",e.target.value)}/>
    </div>

    <div className="formField">
      <p>Date of Birth</p>
    <input type="date"
     value={DateOfBirth} 
     onChange={(e) => onChange("DateOfBirth",e.target.value)} /> 
    </div>

    <div className="formField">
      <p>Phone Number</p>
    <input type="text"
     value={PhoneNumber} 
     onChange={(e) => onChange("PhoneNumber",e.target.value)} /> 
    </div>

    <div className="formField">
      <p>State</p>
    <input type="text" 
     value={State} 
     onChange={(e) => onChange("State",e.target.value)} />
    </div>

    <div className="formField">
      <p>City</p>
    <input type="text"
     value={City} 
     onChange={(e) => onChange("City",e.target.value)} /> 
    </div>

    <button id='signUpButton'>Sign-up</button>
    </div>
    </form>
  </div>
  )


}

export default SignUpContainer
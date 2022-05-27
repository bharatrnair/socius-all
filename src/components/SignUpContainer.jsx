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

    const [values, setValues] = useState({firstName: "", lastName: "",
<<<<<<< HEAD
    Email:"",password:"",confirmpassword:"", DateOfBirth:"",PhoneNumber:"",State:"",City:""})
    
    const {firstName,lastName,Email,password,confirmpassword,DateOfBirth,PhoneNumber,State,City} = values;
=======
    Email:"",password:"",Confirmpassword:"",dob:"",phone:"",State:"",City:""})
    
    const {firstName,lastName,Email,password,Confirmpassword,dob,phone,State,City} = values;
>>>>>>> 7a7c5465919c7d0f1f930f4363d9f38a72375b2e

    const onChange = (key,value)=>{
        setValues(prev =>({
            ...prev,
            [key]:value
        }))
    }

    const formSubmit = (e)=>{
        e.preventDefault();
     fetch("https://localhost:44327/api/Usertbls",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
          },
<<<<<<< HEAD
        body:JSON.stringify({...values,Dob:DateOfBirth})
=======
        body:JSON.stringify({...values})
>>>>>>> 7a7c5465919c7d0f1f930f4363d9f38a72375b2e
     }).then(res => res.json())
     .then((res)=>{
         console.log(res)
     });
    }

  return (

    <div className= "signUpContainer">
        <form className='formSection' onSubmit={formSubmit}>
    <div className="signUpSection">
    <p id='two'>Sign Up</p>
    <div className="signUpInput">

    <input type="text" placeholder='First Name' id='firstName' 
    value={firstName}
    onChange={(e) => onChange("firstName",e.target.value)} />


    <input type="text" placeholder='Last Name' id='lastName'
    value={lastName} 
    onChange={(e) => onChange("lastName",e.target.value)}/>
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
<<<<<<< HEAD
      value={password} 
=======
     value={password} 
>>>>>>> 7a7c5465919c7d0f1f930f4363d9f38a72375b2e
      onChange={(e) => onChange("password",e.target.value)}
      /> 
    </div>

    <div className="formField">
      <p>Confirm-Password</p>
    <input type="password" 
<<<<<<< HEAD
      value={confirmpassword} 
     onChange={(e) => onChange("confirmpassword",e.target.value)} 
=======
      value={Confirmpassword} 
      onChange={(e) => onChange("Confirmpassword",e.target.value)} 
>>>>>>> 7a7c5465919c7d0f1f930f4363d9f38a72375b2e
     />
    </div>

    <div className="formField">
      <p>Date of Birth</p>
    <input type="date"
     value={dob} 
     onChange={(e) => onChange("dob",e.target.value)} /> 
    </div>

    <div className="formField">
      <p>Phone Number</p>
    <input type="text"
     value={phone} 
     onChange={(e) => onChange("phone",e.target.value)} /> 
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
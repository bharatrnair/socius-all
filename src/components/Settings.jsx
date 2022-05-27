import React from 'react'
import { Navigate } from 'react-router-dom';
import './Settings.css'
import { useNavigate } from 'react-router-dom'

const Settings = () => {
<<<<<<< HEAD
    const navigate  = useNavigate();
    const logOut = (e)=>{
        e.preventDefault();
        fetch("https://localhost:44347/api/logout",{
            method:"POST",
            credentials:"include",
            headers:{
                "Content-Type":"application/json"
            },
        })
        .then(res => res.json())
     .then((res)=>{
         navigate("/")
    })
}
=======

    const navigate =useNavigate();

  const logOut =(e)=>{
    e.preventDefault();
    fetch("https://localhost:44371/api/logout", {
        method:"POST",
        credentials : 'include',
        headers:{
            "Content-Type":"application/json"
          }
      }).then(res => res.json())
      .then((res)=>{
          navigate("/")
    })
  }


>>>>>>> 7a7c5465919c7d0f1f930f4363d9f38a72375b2e
  return (
      <div className="settings-mainContainer">
          <div className="settings-MainBody">
              <div className="settings-mainHeader">
                  <p id='settingHeader'>settings</p>
              </div>
              <div className="settings-section">
                  <div className="settings-property">
                   <h3>Edit Profile</h3>
                  </div>
                  <div className="settings-property">
                      <h3>Privacy & Security</h3>
                      </div>
                      <div className="settings-property">
                      <h3>Privacy Policy</h3>
                      </div>
                      <div className="settings-property">
                      <h3>Community Guidelines</h3>
                      </div>
                      <div className="settings-property">
<<<<<<< HEAD
                          <button 
                          onClick={logOut}
                          id="log-out" >Log Out</button>
                     
=======
                      <button 
                      onClick={logOut}
                      id='log-out'>Log Out</button>
>>>>>>> 7a7c5465919c7d0f1f930f4363d9f38a72375b2e
                      </div>
              </div>
          </div>
      </div>
  )
}

export default Settings
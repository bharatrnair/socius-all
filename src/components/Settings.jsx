import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Settings.css'
import { useNavigate } from 'react-router-dom'


const Settings = () => {
    const navigate = useNavigate();
    const logOut = (e) => {
        e.preventDefault();
        fetch("https://localhost:44327/api/logout",{
            method:"POST",
            credentials:"include",
            headers:{
                "Content-Type":"application/json"
                },
            }).then(res => res.json())
            .then((res)=>{
                navigate("/")  
            });
    }
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
                          <button
                          onClick={logOut}
                          id='log-out'>Log Out</button>
                      
                      </div>
              </div>
          </div>
      </div>
  )
}

export default Settings
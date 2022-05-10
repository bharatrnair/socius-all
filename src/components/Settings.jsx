import React from 'react'
import './Settings.css'

const Settings = () => {
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
                      <h3>Log Out</h3>
                      </div>
              </div>
          </div>
      </div>
  )
}

export default Settings
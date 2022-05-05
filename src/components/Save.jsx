import React from 'react'
import VectorSave from './../components/Assets/Vectorsave.svg'
import "./Save.css"
const Save = () => {
  return (
    <div className="save-mainContainer">
        <div className="save-mainBody">
            <div className="save-heading">
                <h2>saved</h2>
                <img src={VectorSave} alt="" />
            </div>
            
            <div className="savePost-body">
              <div className="saveUpper-part">
                  <div className="postImage"></div>
                  <div className="postImage"></div>
                  <div className="postImage"></div>
              </div>
              <div className="saveLower-part">
                  <div className="postImage"></div>
                  <div className="postImage"></div>
                  <div className="postImage"></div>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Save
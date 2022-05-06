import React from 'react'
import view from './../components/Assets/Vectoreyeview.svg'
import Bin from './../components/Assets/Vectorbin.svg'
import './StoryViews.css'

const StoryViews = () => {
  return (
    <div className="storyView-mainContainer">
        <div className="story-mainBody">
        <div className="storyView-Header">
        <div className="viewHeader-First">
         <img src={view} alt="" />
         <p>100</p>
         </div>
         <div className="viewHeader-Second">
             <img src={Bin} alt="" />
         </div>
        </div>
        <div className="storyView-body">
            <div className="storyView-user">
                <div className="storyView-dp">

                </div>
                <div className="storyView-name">
                    <p>
                        user 1
                    </p>
                </div>
            </div>
            <div className="storyView-user">
                <div className="storyView-dp">

                </div>
                <div className="storyView-name">
                    <p>
                        user 2
                    </p>
                </div>
            </div>
            <div className="storyView-user">
                <div className="storyView-dp">

                </div>
                <div className="storyView-name">
                    <p>
                        user 3
                    </p>
                </div>
            </div>
            <div className="storyView-user">
                <div className="storyView-dp">

                </div>
                <div className="storyView-name">
                    <p>
                        user 4
                    </p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default StoryViews 
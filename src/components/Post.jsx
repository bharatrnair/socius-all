import React from 'react'
import Back from "./../components/Assets/back1.svg"
import PostButton from "./../components/Assets/post2.svg"
import "./Post.css"


const Post = () => {
  return (
    <div className="post-mainContainer">
        <div className="postMain-body">
            <div className="post-header">
              
                <div className="post-back">
                  <img src={Back} alt="" />
                </div>

                <div className="post-heading">
                    <h2>New post</h2>
                </div>

            </div>
            <div className="postBody-section">
                <div className="postPhoto-selection">

                </div>
                <div className="post-button">
                    <img src={PostButton} alt="" />
                </div>
            </div>
            <div className="post-footer">
           <input type="text" className='postingCaption'/>
            <div className="postFrom-section">
                <div className="postFrom-gallery">
                  <p>Gallery - </p>
                </div>
                <div className="postStory">
                  <p>Story - </p>
                </div>
                <div className="goLive">
                  <p> Live -</p>
                </div>
            </div>
            </div>
            


        </div>

    </div>
  )
}

export default Post
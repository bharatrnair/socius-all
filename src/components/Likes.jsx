import React from 'react'
import like from './../components/Assets/Vectorlike.svg'

const Likes = () => {
  return (
    <div className="Like-mainContainer">
        <div className="likeBody">
        <div className="likeHeader">
         <p id='likeHeading'>likes</p>
         <img src={like} alt="" />
        </div>
        <div className="users-liked">
            <div className="users-who-liked">
                <div className="likedUsersDp">

                </div>
                <div className="likeUserName">
                    <p>user 1</p>
                </div>
            </div>

            <div className="users-who-liked">
                <div className="likedUsersDp">

                </div>
                <div className="likeUserName">
                    <p>user 2</p>
                </div>
            </div>

            <div className="users-who-liked">
                <div className="likedUsersDp">

                </div>
                <div className="likeUserName">
                    <p>user 3</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Likes
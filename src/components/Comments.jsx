import React from 'react'
import comments from './../components/Assets/comments.svg'
import like from './../components/Assets/Vectorlike.svg'
import Send from './../components/Assets/Vectorsend.svg'
import './Comments.css'

const Comments = () => {
  return (
    <div className="comments-mainContainer">
        <div className="commentsBody">
            <div className="comments-header">
                <p id='comments-heading'>comments</p>
                <img src={comments} alt="" />
            </div>
            <div className="comment-section">
                <div className="comment">
                    <div className="comment-dp">

                    </div>
                    <div className="comment-in-detail">
                        <div className="commenter-name">
                          <p>User 1</p>
                        </div>
                        <div className="commented">
                          <p>................</p>
                          </div>
                        <div className="comments-footer">
                            <p>15m  20Likes    Reply</p>
                        </div>
                    </div>
                    <div className="comment-like-unlike">
                    <img src={like} alt="" />
                    </div>
                </div>

                <div className="comment">
                    <div className="comment-dp">

                    </div>
                    <div className="comment-in-detail">
                        <div className="commenter-name">
                          <p>User 2</p>
                        </div>
                        <div className="commented">
                          <p>................</p>
                          </div>
                        <div className="comments-footer">
                            <p>15m  8 Likes    Reply</p>
                        </div>
                    </div>
                    <div className="comment-like-unlike">
                    <img src={like} alt="" />
                    </div>
                </div>
            
        
        <div className="newComment">
          <div className="newComment-dp">

          </div>
          <div className="commentingArea">
              <p>Add a comment</p>
          </div>
          <div className="sendButton">
              <img src={Send} alt="" />
          </div>

        </div>
        </div>
        </div>
    </div>
  )
}

export default Comments
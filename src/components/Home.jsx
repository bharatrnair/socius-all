import React, { useEffect } from 'react'
import home from  './../components/Assets/home.svg'
import chat from './../components/Assets/chat.svg'
import post from './../components/Assets/post.svg'
import search from './../components/Assets/search.svg'
import bell from './../components/Assets/bell.svg'
import online from './../components/Assets/online.svg'
import like from './../components/Assets/like.svg'
import dislike from './../components/Assets/dislike.svg'
import comments from './../components/Assets/comments.svg'
import "./home.css"

const Home = () => {

    useEffect(() => {
        fetch("https://localhost:44379/api/users", 
        {
            credentials : 'include',

        })
        .then(res => res.json())
        .then((res)=>{
            console.log(res)
    })
},[])

  return (
    <div className="homeContainer">
        <div className="homeBody">
            <div className="homeStory">
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">your story</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 2</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 3</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 4</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 5</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 6</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 7</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 8</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 9</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 10</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 11</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 12</div>
                </div>
              
                </div>
                <div className="homeFeed">
                    <div className="postField">
                    <div className="photoSection">
                        <div className="postHeader">
                            <div className="userDp"></div>
                            <div className="user-Feed-Name">user 1</div>
                        </div>
                        <div className="postedPhoto">

                        </div>
                        <div className="postFooter">
                            <div className="postReaction">
                                <div className="postLike">
                                    <img src={like} alt="" />
                                    <p id='reactionFont'>Like</p>
                                </div>
                                <div className="postDislike">
                                    <img src={dislike} alt="" />
                                    <p id='reactionFont'>Dislike</p>
                                </div>
                                <div className="postComment">
                                    <img src={comments} alt="" />
                                    <p id='reactionFont'>Comments</p>
                                </div>
                            </div>
                            <div className="postReaction-details">
                                <p>Liked By user 1 and</p>
                            </div>
                            <div className="postCaption"></div>
                        </div>
                    </div>
                    </div>
                    <div className="sectionDivider"></div>
                    <div className="onlineSection">
                        <p id='onlineHeading'>online</p>
                        <div className="onlineUser">
                            <img src={online} alt="" />
                            <p>User 1</p>
                        </div>
                        <div className="onlineUser">
                            <img src={online} alt="" />
                            <p>User 2</p>
                        </div>
                        <div className="onlineUser">
                            <img src={online} alt="" />
                            <p>User 3</p>
                        </div>
                        <div className="onlineUser">
                            <img src={online} alt="" />
                            <p>User 4</p>
                        </div>
                        <div className="onlineUser">
                            <img src={online} alt="" />
                            <p>User 5</p>
                        </div>
                        <div className="onlineUser">
                            <img src={online} alt="" />
                            <p>User 6</p>
                        </div>
                    </div>
                </div>

        </div>
        <div className="homeFooter">
        <div className="footerImage">
       <img src={home} alt="" />
       <p>home</p>
       </div>
       <div className="footerImage">
         <img src={chat} alt="" />
         <p>chats</p>
       </div>
       <div className="footerImage">
         <img src={post} alt="" />
         <p>post</p>
       </div>
       <div className="footerImage">
         <img src={search} alt="" />
         <p>search</p>
       </div>
       <div className="footerImage">
         <img src={bell} alt="" />
         <p>notifications</p>
       </div>

        </div>
    </div>
  )
}

export default Home
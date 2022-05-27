import React from 'react'
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
<<<<<<< HEAD
import { useEffect } from 'react'

const Home = () => {
    //const [values, setValues] = useState({Email:"",password:""})
    useEffect(()=>{
        fetch("https://localhost:44327/api/Usertbls",{
            credentials:"include",
    }).then(res => res.json())
    .then((res)=>{
        console.log(res);
        // localStorage.setItem("userId", res.Id);
    });
    },[])
=======
import { useState, useEffect } from 'react'
import getCall from '../Services/getCall'

const Home = () => {

    const [usersList, setusersList] = useState([]);
    
    useEffect(()=>{
        getCall("/homefeed?page=1")
        .then((res)=>{
            console.log(res);
            setusersList(res);
        })

    },[])

//  const data = {}

 function LikeApiCall(){
    fetch("https://localhost:44371/api/like?page=3",{
        method : "POST",
        credentials : 'include',
        headers:{
            "Content-Type":"application/json"
          },
        body: JSON.stringify({
            postId:""
            
        }),
    })
    .then(res=> res.json())
    .then((res)=> console.log('success'))}

>>>>>>> 7a7c5465919c7d0f1f930f4363d9f38a72375b2e
  return (
    <div className="homeContainer">
        <div className="homeBody">
            <div className="homeStory">
                {usersList.map((data,i)=>
                <div className="story" key={i}>
                    <div className="storyIcon"></div>
                    <div className="storyUser">{data.FirstName}</div>
                </div>
                )}
              
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
                                <div className="postLike" onClick={LikeApiCall}>
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
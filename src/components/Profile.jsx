import React from 'react';
import home from  './../components/Assets/home.svg'
import chat from './../components/Assets/chat.svg'
import post from './../components/Assets/post.svg'
import search from './../components/Assets/search.svg'
import bell from './../components/Assets/bell.svg'
import settings from './../components/Assets/settings.svg'
import './Profile.css'

const profile = () => {
  return (
   <div className="mainSection">
     <div className="profileSection">
       <div className="profileSection-header">
       <div className="settings">
         <img src={settings} alt="" />
         <p>settings</p>
       </div>
       <div className="displayPicture">

       </div>
       <div className="profileDetails">
         <h2>username</h2>
         <div className="friends">
           <p>followers</p>
           <div className="line2"> </div>
           <p>following</p>

         </div>
         </div>
       </div>
       <div className="profileSection-body">
       <div className="postSection">
         <div className="image1"></div>
         <div className="image2"></div>
         <div className="image3"></div>

       </div>
       </div>

     </div>
     <div className="profileFooter">
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

export default profile
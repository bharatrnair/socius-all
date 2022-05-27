import React, { useEffect, useState } from 'react'
import './Notifications.css'
import { io } from "socket.io-client";

const Notifications = () => {
  const [socket,setSocket]= useState(null);
  useEffect(()=>{
    setSocket(io("http://localhost:5000"));
  },[])

  useEffect(()=>{
    if(!socket) return;
    socket.emit("newUser","prajeesh");
  },[socket]);

  useEffect(()=>{
    if(!socket) return;
    socket.on("getNotification",(notification)=>{
      console.log(notification);
    });
  },[socket]);
  return (
    <div className="notification-MainContainer">
     
        <div className="notification-Body">
            <div className="notification-Header">
                <p id='notificationHeader'>Notifications</p>
                 </div>
                 <div className="notifications">
                     <div className="notification-Unread">
                         <div className="notification-display-picture">

                         </div>
                         <div className="notification-details">
                           <p>user liked your photo</p>
                         </div>
                         <div className="notification-time">
                          <p>1 hr </p>
                         </div>

                     </div>
                     <div className="notification-Unread">
                           <div className="notification-display-picture">

                           </div>
                         <div className="notification-details">
                           <p>user liked your photo</p>
                         </div>
                         <div className="notification-time">
                          <p>1 hr </p>
                         </div>
                         </div>
                         <div className="notification-Unread">
                           <div className="notification-display-picture">
                               
                               </div>
                             <div className="notification-details">
                               <p>user liked your photo</p>
                             </div>
                             <div className="notification-time">
                              <p>1 hr </p>
                             </div>
                         </div>
                         <div className="notification-read">
                         <div className="notification-display-picture">
                               
                               </div>
                             <div className="notification-details">
                               <p>user liked your photo</p>
                             </div>
                             <div className="notification-time">
                              <p>1 hr </p>
                             </div>
                         </div>
                         <div className="notification-read">
                         <div className="notification-display-picture">
                               
                               </div>
                             <div className="notification-details">
                               <p>user liked your photo</p>
                             </div>
                             <div className="notification-time">
                              <p>1 hr </p>
                             </div>
                         </div>
    
    
                 </div>
        </div>
    </div>
  )
}

export default Notifications
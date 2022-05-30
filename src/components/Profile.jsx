
import {useEffect, useState} from 'react';
import React from 'react';
import home from  './../components/Assets/home.svg'
import chat from './../components/Assets/chat.svg'
import post from './../components/Assets/post.svg'
import search from './../components/Assets/search.svg'
import bell from './../components/Assets/bell.svg'
import settings from './../components/Assets/settings.svg';
import './Profile.css'
import { useNavigate } from "react-router-dom";
import fileUploadCall from '../Services/fileUploadCall';
import getCall from '../Services/getCall';
import postCall from '../Services/postCall';

const Profile = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [currentUser,setCurrentUser] = useState();

  useEffect(()=>{
    getCall("/getusers")
    .then((res)=>{
      setCurrentUser(res)
    })
  },[]);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		
	};

	const handleSubmission = () => {
    const formData = new FormData();
		formData.append('File', selectedFile);

		fileUploadCall("/fileUpload", formData)
			.then((result) => {
				console.log('Success:', result[0]);
        postCall("/dp",{Url:result[0]

        })
			})
			.catch((error) => {
				console.error('Error:', error);
			});
  };

  
  const [follow,setFollow]=useState(true);

  // function Following(){
    // setFollow(false);
  // }
  const navigate = useNavigate();
  return (
   <div className="mainSection">
     <div className="profileSection">
       <div className="profileSection-header">
       <div className="settings">
         <img src={settings} alt="" onClick={()=>navigate("/Settings")} />
         <p>settings</p>
       </div>


       <div className="displayPicture">
         <div className="avatar">
            <img src={selectedFile && URL.createObjectURL(selectedFile)}  />
         </div>
         <div>
			    <input type="file" name="file" onChange={changeHandler} />
				  <button onClick={handleSubmission}>Upload</button>

         </div>
       </div>
    

       <div className="profileDetails">
         <h2>username</h2>
         <div className="follow-full">
         <div className="followButton">
         {follow && <button
             id='followOption' onClick={()=>setFollow(false)}>Follow</button>}
          {!follow && <button
             id='followOption' onClick={()=>setFollow(true)}>UnFollow</button> }
          </div>
         <div className="friends">
           <p>followers</p>
           <div className="line2"> </div>
           <p>following</p>

         </div>
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
       <div className="footerImage" id="home" >
       <img src={home} alt="" onClick={()=>navigate("/Home")}/>
      <p>home</p>
       </div>
       <div className="footerImage" id="chats">
         <img src={chat} alt=""  onClick={()=>navigate("/Chat")} />
         <p>chats</p>
       </div>
       <div className="footerImage" id="post" >
         <img src={post} alt="" onClick={()=>navigate("/Post")} />
         <p>post</p>
       </div>
       <div className="footerImage" id="search">
         <img src={search} alt="" onClick={()=>navigate("/Search")} />
         <p>search</p>
       </div>
       <div className="footerImage" id="notifications">
         <img src={bell} alt="" onClick={()=>navigate("/Notifications")}  />
         <p>notifications</p>
       </div>
     </div>
   </div>
    
  )
}

export default Profile
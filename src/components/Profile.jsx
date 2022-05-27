
import {useEffect, useState} from 'react';
import React from 'react';
import home from  './../components/Assets/home.svg'
import chat from './../components/Assets/chat.svg'
import post from './../components/Assets/post.svg'
import search from './../components/Assets/search.svg'
import bell from './../components/Assets/bell.svg'
import settings from './../components/Assets/settings.svg'

import './Profile.css'


const Profile = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [curentUser,setCurentUser] = useState();

  useEffect(()=>{
    fetch("https://localhost:44326/api/users",{
            credentials : 'include',
        })
    .then(res => res.json())
    .then((res)=>{
      setCurentUser(res)
    })
  },[]);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		
	};

	const handleSubmission = () => {
    const formData = new FormData();
		formData.append('File', selectedFile);

		fetch("https://localhost:44326//api/FileUpload",
			{
				method: "POST",
				body: formData,
			}
		)

			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result[0]);
        console.log({
          ...curentUser,
          ImagePath: result[0]
        });
			})
			.catch((error) => {
				console.error('Error:', error);
			});
  };

  
  return (
   <div className="mainSection">
     <div className="profileSection">
       <div className="profileSection-header">
       <div className="settings">
         <img src={settings} alt="" />
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

export default Profile
import React from 'react'
import Back from "./../components/Assets/back1.svg"
import PostButton from "./../components/Assets/post2.svg"
import "./Post.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';




const Post = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [textData, setTextData] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const navigate= useNavigate();
  // const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setSelectedFile(e.target.files[0])
      //setFile(URL.createObjectURL(e.target.files[0]));
  }



  const textSubmit = () =>{
    // const fileData = new FileData();
    let data={
      imageUrl: imageUrl,
      text: textData
    };

    fetch("https://localhost:44379/api/posts", //postcall("/posts")
    {
      method:"POST",
      headers:{
        "Content-Type": 'application/json'
      },
       body: JSON.stringify(data),
    }
    ).then(res => res.json())
    .then((res)=>{
        console.log(res)
     });
   }

 const postSubmit = () =>{
   const formData = new FormData();
   formData.append('File', selectedFile);
 fetch("https://localhost:44379/api/fileUpload",
 {
    method:"POST",
    body: formData,
      }
 ).then(res => res.json())
 .then((res)=>{
     console.log(res)
     setImageUrl(res[0]);
 });
}


  
  return (
    <div className="post-mainContainer">
        <div className="postMain-body">
            <div className="post-header">
                 
                <div className="post-back">
                  <img src={Back} alt="" onClick={()=>{
                navigate("/Home")
                }}/>
                </div>
                

                <div className="post-heading">
                    <h2>New post</h2>
                </div>

            </div>
          
            <div className="postBody-section">
                <div className="postPhoto-selection">

                <input type="file" onChange={handleChange} />
            <img src={selectedFile && URL.createObjectURL(selectedFile)}  style={{width:"100%",
                  maxWidth: "500px",
                  aspectRatio: "2"}}/>


                </div>
                <div className="post-button">
                    <img src={PostButton} alt="" onClick={()=>{postSubmit(); textSubmit()}} />
                </div>
            </div>
            <div className="post-footer">
           <input type="text" className='postingCaption' placeholder='write something..' value={textData} onChange={(e)=>setTextData(e.target.value)}/>
            {/* <div className="postFrom-section">
                <div className="postFrom-gallery">
                  <p>Gallery - </p>
                </div>
                <div className="postStory">
                  <p>Story - </p>
                </div>
                <div className="goLive">
                  <p> Live -</p>
                </div>
            </div> */}
            </div>
            


        </div>

    </div>
  )
}



export default Post
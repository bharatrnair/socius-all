import Login from "./components/Login.jsx";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import React from 'react';
import './App.css';
import Otp from "./components/Otp.jsx";
import Profile from './components/Profile.jsx';
import Chat from './components/Chat.jsx';
import Home from './components/Home.jsx';
import PersonalChat from './components/PersonalChat.jsx'
import Notifications from './components/Notifications.jsx'
import Settings from './components/Settings.jsx'
import Comments from './components/Comments.jsx'
import Likes from './components/Likes.jsx'
import StoryViews  from "./components/StoryViews.jsx";
import Post from "./components/Post.jsx";
import Save from "./components/Save.jsx";
import Search from "./components/Search.jsx";



const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="" element={<Login />} ></Route>
            <Route path="otp" element={<Otp />} ></Route>
            <Route path="profile" element={<Profile />} ></Route>
            <Route path="chat" element={<Chat />} ></Route>
            <Route path="home" element={<Home />} ></Route>
            <Route path="personalChat" element={<PersonalChat />} ></Route>
            <Route path="notifications" element={<Notifications />}></Route>
            <Route path="settings" element ={<Settings />}></Route>
            <Route path="comments" element ={<Comments />}></Route>
            <Route path="likes" element ={<Likes />}></Route>
            <Route path="storyviews" element ={<StoryViews />}></Route>
            <Route path="post" element ={<Post />}></Route>
            <Route path="save" element ={<Save />}></Route>
            <Route path="search" element ={<Search />}></Route>
        </Routes>
        </BrowserRouter>
               );
            }
        
        
        export default App;
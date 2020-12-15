import { Avatar } from '@material-ui/core';
import React from 'react'
import './Post.css';  
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NearMeIcon from '@material-ui/icons/NearMe';
function post({profilePic, image, username, timestamp, message}) {
    return (
        <div className='post'>
            <div className="post__top">
                <Avatar src={profilePic}
                className="post__avatar" />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image">
                <img src={image} alt="" />
            </div>
            <div className="post__options">
                <div className="post__option">
                    <FavoriteIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
}

export default post

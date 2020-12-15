import React, { useEffect, useState } from "react";
import "./Feed.css";
import MeassageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";
// import { useStateValue } from './StateProvider';
function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection('posts').orderBy('timestamp',"desc").onSnapshot(snapshot =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  },[])
    return (
        <div className="outer">
         <MeassageSender />  
          <div className="feed">
            <div className="inner">
            {posts.map((post) => (
              <Post 
                Key={post.id}
                profilePic={post.data.profilePic}
                message={post.data.message}
                timestamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image}
                />
            ))}
            </div>
          </div>
        </div>
    )
}

export default Feed

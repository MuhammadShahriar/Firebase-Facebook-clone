import React, { useEffect, useState } from 'react'
import './Feed.css'
import db from './Firebase'
import MessageSender from './MessageSender'
import Post from './Post'
import { useStateValue } from './StateProvider'
import StoryReel from './StoryReel'

function Feed() {
    
    const [{user}, dispatch] = useStateValue();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts")
        .orderBy( 'timestamp', 'desc' )
        .onSnapshot(snapshot =>(
            setPosts(snapshot.docs.map(doc =>({id: doc.id, data: doc.data()})))
        ));

        console.log(posts.length);

    }, []);

    return (
        <div className = "feed" >
            <StoryReel />
            <MessageSender />

            {posts.map((post) => (
               
                <Post 
                key = {post.id}
                profilePic = {post.data.profilePic}
                timestamp = {post.data.timestamp}
                username = {post.data.username}
                message = {post.data.message}
                image = {post.data.image}
                />
            ))}
            

           
        </div>
    )
}

export default Feed

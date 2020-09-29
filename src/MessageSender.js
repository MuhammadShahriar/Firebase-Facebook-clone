import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './MessageSender.css'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './Firebase';
import firebase from 'firebase';

function MessageSender() {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [{user}, dispatch] = useStateValue();
    


    const handleSubmit = ( e ) => {
        e.preventDefault();

         db.collection('posts').add ({
             message: input,
             profilePic: user.photoURL,
             timestamp: firebase.firestore.FieldValue.serverTimestamp(),
             username: user.displayName,
             image: imageUrl
         });


        setImageUrl("");
        setInput("");
    }

    return (
        <div className = "messageSender">
            <div className = "messageSender__top">
                <Avatar src = {user.photoURL} />
                <form>
                    <input 
                    value = {input}
                    onChange = {(e) => setInput(e.target.value)}
                    className = "messageSender__input"
                    placeholder = {`What's on your mind, ${user.displayName}?`} />
                    <input placeholder = "Image URL" />

                    <button 
                    value = {imageUrl}
                    onChange = { (e) => setInput(e.target.value) }
                    onClick = {handleSubmit} type = "submit">
                        Hidden submit
                    </button>
                </form>
            </div>

            
            <div className = "messageSender__bottom">
                <div className = "messageSender__option">
                    <VideoCallIcon  style = {{color: "red"}} />
                    <h3>Live video</h3>
                </div>

                <div className = "messageSender__option">
                    <PhotoLibraryIcon style = {{color: "green"}} />
                    <h3>Photo/Video</h3>
                </div>
                
                
                <div className = "messageSender__option">
                    <InsertEmoticonIcon style = {{color: "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
                
            </div>
        </div>
    )
}

export default MessageSender

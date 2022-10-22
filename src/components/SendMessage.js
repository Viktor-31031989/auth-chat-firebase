import React, {useState} from 'react';
import {Button, Input} from "@mui/material";
import {auth, db} from "../Firebase";
import {collection, addDoc, Timestamp} from 'firebase/firestore';
import ForumIcon from '@mui/icons-material/Forum';

function SendMessage(props) {
    const [msg, setMsg] = useState('')

    const sendMessageHandler = (e) => {
        setMsg(e.target.value)
    }

    function sendHandler(e) {
        e.preventDefault()
        const {uid, photoURL} = auth.currentUser
        addDoc(collection(db, 'messages'), {
            text: msg,
            photoURL,
            uid,
            created: Timestamp.now()
        }).then(r => console.log(r))
            .catch(err => console.log(err))
        setMsg('')
        props.scroll.current.scrollIntoView({behavior: "smooth"})
    }

    return (
        <div>
            <form>
                <Input style=
                           {{
                               width: "450px",
                               marginLeft: "50px",
                               marginBottom: "20px"
                           }}
                       placeholder='Message...' value={msg} onChange={(e) => sendMessageHandler(e)}/>
                <Button onClick={(e) => sendHandler(e)}><ForumIcon style={{margin: "-70px"}}></ForumIcon>sent</Button>
            </form>
        </div>
    );
}

export default SendMessage;
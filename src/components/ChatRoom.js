import React, {useEffect, useState, useRef} from 'react';
import {db, SignOut} from "../Firebase";
import {collection, query, onSnapshot, orderBy, limit} from 'firebase/firestore'
import Chat from "./Chat";
import SendMessage from "./SendMessage";


function ChatRoom() {
    const [messages, setMessages] = useState([])
    const scroll = useRef()

    useEffect(() => {
        const taskColRef = query(collection(db, 'messages'), orderBy('created', 'asc'), limit(50));
        onSnapshot(taskColRef, (snapshot) => {
            setMessages(snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));
        });
    }, []);

    return (
        <div>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
                backgroundColor: "lightblue",
                padding: "5px 20px 0 20px",
                borderRadius: "20px 20px 0 0"
            }}>

                <div>
                    <img style={{
                        width: "60px",
                        borderRadius: "50px",
                        marginTop: "10px",
                    }} src={localStorage.getItem('profilePic')} alt="pic"/>
                    <h4 style={{
                        display: "inline-block",
                        alignItems: "center",
                    }}>{localStorage.getItem('name')}</h4>
                </div>
                <SignOut/>
            </div>
            {messages.map(({id, text, photoURL, created, uid}) => (
                <Chat
                    text={text}
                    key={id}
                    photoURL={photoURL}
                    created={created}
                    uid={uid}
                />

            ))}
            <div ref={scroll}></div>

            <SendMessage
                messages={messages}
                setMessages={setMessages}
                scroll={scroll}
            />
        </div>
    );
}

export default ChatRoom;
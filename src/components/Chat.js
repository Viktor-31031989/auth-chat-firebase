import React from 'react';
import {auth} from "../Firebase";

function Chat(props) {
    return (
        <div >
            <div style={{
                height: "49px",
                width: "250px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }} key={props.key} className={` ${props.uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                <div>
                    {<img style={{
                        width: "40px",
                        borderRadius: "50px",
                        margin: "10px"

                    }} src={props.photoURL} alt=""/>}
                </div>
                <div style={{
                    margin: "0 auto 0 auto",
                }}>
                    {props.text}
                </div>
            </div>


        </div>
    );
}

export default Chat;
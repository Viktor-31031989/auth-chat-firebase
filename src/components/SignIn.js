import React from 'react';
import {signInWithGoogle} from "../Firebase";
import {Button} from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';

function SignIn() {
    return (
        <div style={{textAlign: "center"}}>
            <Button onClick={signInWithGoogle}>sign In with Google   <GoogleIcon style={{color: "red"}}></GoogleIcon></Button>
       </div>
    );
}

export default SignIn;
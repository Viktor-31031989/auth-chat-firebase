import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {Button} from "@mui/material";

const firebaseConfig = {
    apiKey: "AIzaSyAc2BB9yIjYH2Hhmz14T1Du-UGju9STeDk",
    authDomain: "new-chat-react-auth.firebaseapp.com",
    projectId: "new-chat-react-auth",
    storageBucket: "new-chat-react-auth.appspot.com",
    messagingSenderId: "201843838587",
    appId: "1:201843838587:web:7351dc03888f3ba8b49cde"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)



export const SignOut = () =>{
    return auth.currentUser && (
        <Button onClick={()=> auth.signOut()}> Sign Out</Button>
    )
}
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePic = result.user.photoURL;
            localStorage.setItem('name', name)
            localStorage.setItem('email', email)
            localStorage.setItem('profilePic', profilePic)
        })
        .catch((error) => {
            console.log(error)
        });
}
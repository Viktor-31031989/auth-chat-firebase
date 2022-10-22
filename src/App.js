import {auth} from "./Firebase";
import ChatRoom from "./components/ChatRoom";
import SignIn from "./components/SignIn";
import {useAuthState} from "react-firebase-hooks/auth";
import "./App.css"


function App() {
    const [user] = useAuthState(auth)
    return (
        <div style={{
            margin: "30px auto 0 auto",
            boxShadow: "3px 3px 20px lightblue",
            maxWidth: "600px",
            height: "auto",
            borderRadius: "20px",


        }}>

            {user ? <ChatRoom/> : <SignIn/>}

        </div>
    );
}

export default App;

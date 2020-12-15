import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";  
function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
        });
    })
        .catch((error) => alert(error.message));
    };
    return (
         <div className="login">
         <div className="login__container">
             <img src="http://www.pngplay.com/wp-content/uploads/1/Letter-S-PNG-Photo.png" alt="" />
             <div className="login__text">
                 <h1>Socially</h1>
             </div>
             <Button onClick={signIn}>
                 Sign In with Google
             </Button>
         </div>
     </div>

    )
}

export default Login

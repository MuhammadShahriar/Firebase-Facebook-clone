import React from 'react'
import './Login.css'
import {auth, provider} from './Firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {

    const[state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup (provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        }).catch ((error)=> alert(error.message));
    }

    return (
        <div className = "login" >
            <div className = "login__logo">
                <img
                src = "data:image/png;base64,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"
                alt = ""
                />

                <img
                src = "data:image/png;base64,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"
                alt = ""
                />
            </div>

            <div>
                <button className = "login__button" type = "submit" onClick = {signIn} >
                    Sign In
                </button>
            </div>
        </div>
    )
}

export default Login

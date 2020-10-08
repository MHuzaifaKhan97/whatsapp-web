import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core';
import logo from '../img/whatsapp.png';
import { auth, provider } from '../config/firebase';

import { useStateValue } from '../components/StateProvider';
import { actionTypes } from '../components/reducer';

function Login() {

    const [{ }, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch(error => console.log(error.message))
    }
    return (
        <div className="login">
            <div className="login_container">
                <img src={logo} alt="Whatsapp logo" />

                <div className="login_text">
                    <h1>Sign In To Whatsapp</h1>
                </div>
                <Button type="submit" onClick={signIn}>
                    Sign in with Google
            </Button>
            </div>
        </div>
    )
}

export default Login;
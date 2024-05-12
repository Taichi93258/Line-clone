import { Button } from '@mui/material';
import firebase from "firebase/compat/app";
import React from 'react';
import { auth } from "../firebase.js";

const SignIn = () => {

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <div>
        <Button onClick={signInWithGoogle}>
            Googleでログインする
        </Button>
    </div>
  )
}

export default SignIn

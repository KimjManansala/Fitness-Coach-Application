import axios from 'axios';
import React from 'react';
export function handleSignInSignUpAPI() {
    alert('hello')
    axios.get('/auth/google')
        .then(res => {
            console.log('----')
            console.log(res)
        })
        .catch((error) => {
            console.error(error)
        })
}

export function handleSignOut() {
    // Function to signout
}
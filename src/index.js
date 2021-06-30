import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase'
import 'firebase/firestore'

import './index.css'

import { App } from './App'

firebase.initializeApp({
    apiKey: "AIzaSyDFVeF9MruceAqCOy67buGmFZPxz4ZWKYc",
    authDomain: "organic-map.firebaseapp.com",
    projectId: "organic-map",
    storageBucket: "organic-map.appspot.com",
    messagingSenderId: "1031238817794",
    appId: "1:1031238817794:web:15fb0c0805e526dad9af1b",
    measurementId: "G-LDF39PPHCD"
})

export const firestore = firebase.firestore()

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)

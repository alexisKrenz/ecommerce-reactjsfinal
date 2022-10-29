import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCqma9atEGYPEXbxShEYbwIG7EMikshe4M",

  authDomain: "black-and-wine-e72e0.firebaseapp.com",

  projectId: "black-and-wine-e72e0",

  storageBucket: "black-and-wine-e72e0.appspot.com",

  messagingSenderId: "131567877334",

  appId: "1:131567877334:web:81148e6dc5ef8525821d77"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

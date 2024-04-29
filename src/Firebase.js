// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyAciO97z_YBJ2rAocJJN-idL1LlvMXUSzo",
    authDomain: "footyfix-80fcd.firebaseapp.com",
    projectId: "footyfix-80fcd",
    storageBucket: "footyfix-80fcd.appspot.com",
    messagingSenderId: "197169873988",
    appId: "1:197169873988:web:35c749935f80d0e5d8a811"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
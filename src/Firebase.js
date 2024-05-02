import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  
    apiKey: "AIzaSyAciO97z_YBJ2rAocJJN-idL1LlvMXUSzo",
    authDomain: "footyfix-80fcd.firebaseapp.com",
    projectId: "footyfix-80fcd",
    storageBucket: "footyfix-80fcd.appspot.com",
    messagingSenderId: "197169873988",
    appId: "1:197169873988:web:35c749935f80d0e5d8a811"
  };
// V1SkABbmztgk0c51OPEjM4IndFc2
// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const db = getFirestore(app);
// const analytics = getAnalytics(app);
export default app;
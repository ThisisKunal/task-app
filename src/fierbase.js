import { FirebaseError, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAot7vr0aVMWgSIMS4ebLcaz-KJuh6otF4",
    authDomain: "task-auth-60fbc.firebaseapp.com",
    projectId: "task-auth-60fbc",
    storageBucket: "task-auth-60fbc.appspot.com",
    messagingSenderId: "53081883433",
    appId: "1:53081883433:web:3f1ccf31b4bd115ab52d38",
    measurementId: "G-ZCCY3E4E4W"
  };

  const app = initializeApp(firebaseConfig); 
  export const auth =  getAuth(app);
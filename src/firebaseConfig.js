import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBf4otiAgXU8vNfWDICDQDOMGXz1wjTWKY",
    authDomain: "ct-finalproject.firebaseapp.com",
    projectId: "ct-finalproject",
    storageBucket: "ct-finalproject.appspot.com",
    messagingSenderId: "32793486056",
    appId: "1:32793486056:web:a5930129d23783e4ec9f5d"
  };

  const app = initializeApp(firebaseConfig);

  export const storage = getStorage(app);
  export const db = getFirestore(app);
  export const auth =getAuth(app);

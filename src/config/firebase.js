// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDkcrdremmxUSicd_C3wA_3DERki1vnk0A",
    authDomain: "badroad-87548.firebaseapp.com",
    projectId: "badroad-87548",
    storageBucket: "badroad-87548.appspot.com",
    messagingSenderId: "199102742679",
    appId: "1:199102742679:web:6ee568e6f7f66d22a429d2"
  };

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
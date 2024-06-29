// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup,signInWithEmailAndPassword,signOut,createUserWithEmailAndPassword,query,getDocs, where, addDoc,doc,updateDoc} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAKwmrOkW0fhr9cjkHdq8rfoi1Qmncjg5M",
    authDomain: "odoo-hackathon-b8133.firebaseapp.com",
    projectId: "odoo-hackathon-b8133",
    storageBucket: "odoo-hackathon-b8133.appspot.com",
    messagingSenderId: "202766788664",
    appId: "1:202766788664:web:145f188fae4dc8fcbe9ecd",
    measurementId: "G-SNLS3GZJF9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export { auth, provider, signInWithPopup,signInWithEmailAndPassword ,createUserWithEmailAndPassword,signOut,db,query,getDocs, where, addDoc,doc,updateDoc};

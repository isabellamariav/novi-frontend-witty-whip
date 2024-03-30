import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC-dcCK5qqXlEHMCnoVWIcMcedcn8Zzb10",
    authDomain: "witty-whip.firebaseapp.com",
    projectId: "witty-whip",
    storageBucket: "witty-whip.appspot.com",
    messagingSenderId: "278398637946",
    appId: "1:278398637946:web:37187671d79543994c68c3"
};

const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
export const db = getFirestore(app);
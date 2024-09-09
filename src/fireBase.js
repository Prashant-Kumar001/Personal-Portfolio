
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCJZtdSwgFSTxLDu22FMtxC-WY5YsukqhI",
    authDomain: "react-project-4bc15.firebaseapp.com",
    projectId: "react-project-4bc15",
    storageBucket: "react-project-4bc15.appspot.com",
    messagingSenderId: "895716064383",
    appId: "1:895716064383:web:77437cabc144d0f69d534a",
    measurementId: "G-2EMY9D9V3G"
};


export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const Db = getFirestore()
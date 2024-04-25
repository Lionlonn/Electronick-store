import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwh_Xrt8EVTfqDnsoxJsSF1lPfXllxCfA",
  authDomain: "electronick-api.firebaseapp.com",
  projectId: "electronick-api",
  storageBucket: "electronick-api.appspot.com",
  messagingSenderId: "710212738569",
  appId: "1:710212738569:web:bf25923001ffb16d1f22d8"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
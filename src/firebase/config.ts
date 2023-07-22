// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnTptEfRPMp6cL46zhAZNaRbjPx8602HA",
  authDomain: "bible-study-d4bd2.firebaseapp.com",
  projectId: "bible-study-d4bd2",
  storageBucket: "bible-study-d4bd2.appspot.com",
  messagingSenderId: "969502344050",
  appId: "1:969502344050:web:afec383cc2eedc615c53eb",
  measurementId: "G-5X3LDZF405",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCV9FhdPhdxTzW68A9Lb4POHhhh0Hsryy4",
  authDomain: "netflix-b80da.firebaseapp.com",
  projectId: "netflix-b80da",
  storageBucket: "netflix-b80da.appspot.com",
  messagingSenderId: "533392403407",
  appId: "1:533392403407:web:848dc94104f7fae50e00ba",
  measurementId: "G-FYHN2T0ZYS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth};
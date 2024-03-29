
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBLsR7nYYdMf1BsEYTsfhT2s8TfSrChthI",
  authDomain: "bd-dragon-news.firebaseapp.com",
  projectId: "bd-dragon-news",
  storageBucket: "bd-dragon-news.appspot.com",
  messagingSenderId: "598758049004",
  appId: "1:598758049004:web:abb045cc6bdc98e7f411c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
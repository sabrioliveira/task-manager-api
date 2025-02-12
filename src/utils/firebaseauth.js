// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId } from '../config/dotenv-config.js'

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
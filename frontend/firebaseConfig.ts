import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyACO3YrtzAqW8L5OHi4DwavH3-FhlaVMe8",
  authDomain: "cliktr-c562c.firebaseapp.com",
  databaseURL: "https://cliktr-c562c-default-rtdb.firebaseio.com",
  projectId: "cliktr-c562c",
  storageBucket: "cliktr-c562c.appspot.com",
  messagingSenderId: "188853529319",
  appId: "1:188853529319:web:601444e3a201066eec9042",
  measurementId: "G-J6XJ0NC7Z7"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);

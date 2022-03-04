/* eslint-disable import/prefer-default-export */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6XM30Gw7AgD5D3OtQCiI0j28A3Eev6Wo",
  authDomain: "household-app-daeda.firebaseapp.com",
  projectId: "household-app-daeda",
  storageBucket: "household-app-daeda.appspot.com",
  messagingSenderId: "26965635750",
  appId: "1:26965635750:web:c970758aa99e3595113a67",
  measurementId: "G-CZE8G43CCT",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

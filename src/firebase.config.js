// src/firebase.config.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC9fiEYA3LHsozgZcTC9YlDITDWNVNGLZI",
  authDomain: "badaruddin-welfare.firebaseapp.com",
  projectId: "badaruddin-welfare",
  storageBucket: "badaruddin-welfare.appspot.com",
  messagingSenderId: "735826928949",
  appId: "1:735826928949:web:4d24ba8f37cb1fb8ae187c",
  
  databaseURL: "https://badaruddin-welfare-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

export default app;

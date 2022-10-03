import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCxhZzXlzy0klYTedcgajIQ9Q6P35WGxOg",
    authDomain: "if66k-6600c.firebaseapp.com",
    projectId: "if66k-6600c",
    storageBucket: "if66k-6600c.appspot.com",
    messagingSenderId: "516984739891",
    appId: "1:516984739891:web:509e041406a986f7ee2b46",
    measurementId: "G-0KXB22D7ES"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAgeggWoDm_BTh4cS0YxdSrxhxJ9IkxMOY",
  authDomain: "linkedin-by-aman.firebaseapp.com",
  projectId: "linkedin-by-aman",
  storageBucket: "linkedin-by-aman.appspot.com",
  messagingSenderId: "315996604406",
  appId: "1:315996604406:web:de45c8a6fcce3a429a29d7",
  measurementId: "G-RG8D1WW75F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const firebaseStorage = getStorage(app);

export { db, auth, provider, firebaseStorage };

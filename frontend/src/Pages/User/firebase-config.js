import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "",
  authDomain: "cry-foundation.firebaseapp.com",
  projectId: "cry-foundation",
  storageBucket: "cry-foundation.appspot.com",
  messagingSenderId: "691155833522",
  appId: "1:691155833522:web:4227777d7b049ebb726fab",
  measurementId: "G-GVN2WY2S35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Authentication
const auth = getAuth();

// Initialize Firebase Storage
const storage = getStorage(app);

export { auth, storage };

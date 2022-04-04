import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsWdZNiD8owTe-LgwrZ6EOmLqddxDigcE",
  authDomain: "bookz-341518.firebaseapp.com",
  projectId: "bookz-341518",
  storageBucket: "bookz-341518.appspot.com",
  messagingSenderId: "526686431867",
  appId: "1:526686431867:web:5e0fa3ff4447c3eee910de",
  measurementId: "G-2V4JR2ZMR2",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };

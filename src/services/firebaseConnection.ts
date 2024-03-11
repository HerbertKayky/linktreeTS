import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEqpZ8_ytqqDzQa7hvyAFtjX3jjyMs0_8",
  authDomain: "reactlinks-7a63f.firebaseapp.com",
  projectId: "reactlinks-7a63f",
  storageBucket: "reactlinks-7a63f.appspot.com",
  messagingSenderId: "614406442555",
  appId: "1:614406442555:web:55a48df47ee561dec6161e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

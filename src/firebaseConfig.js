import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGG-pgqnKNVaJzwOH2MLCO_zuljrZRPqk",
  authDomain: "backend-ecommerce-e5c04.firebaseapp.com",
  projectId: "backend-ecommerce-e5c04",
  storageBucket: "backend-ecommerce-e5c04.firebasestorage.app",
  messagingSenderId: "413390773631",
  appId: "1:413390773631:web:1ff8ef6af1c8b7bf4bce4a",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

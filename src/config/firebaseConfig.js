import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBR98Ztf2SkKEW7fE7cOB7K2E4iViOX6Y",
  authDomain: "piskorzow-3a2e7.firebaseapp.com",
  projectId: "piskorzow-3a2e7",
  storageBucket: "piskorzow-3a2e7.firebasestorage.app",
  messagingSenderId: "447308206745",
  appId: "1:447308206745:web:292fcdfa408f669c379e08"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);

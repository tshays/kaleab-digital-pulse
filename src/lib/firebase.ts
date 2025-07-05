
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAk7XbX7kfGe6vM6SrRPHAL1NVAh9GmI_4",
  authDomain: "dr-kal.firebaseapp.com",
  projectId: "dr-kal",
  storageBucket: "dr-kal.firebasestorage.app",
  messagingSenderId: "280614739271",
  appId: "1:280614739271:web:74a45280a0e468f02ec062",
  measurementId: "G-PXDVJS5HCD"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;

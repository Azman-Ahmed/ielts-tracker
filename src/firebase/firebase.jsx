import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAl8gVfw8nv30EDs0n8jxozRSBH2uSY51A",
  authDomain: "ielts-tracker-3bc28.firebaseapp.com",
  databaseURL: "https://ielts-tracker-3bc28-default-rtdb.firebaseio.com",
  projectId: "ielts-tracker-3bc28",
  storageBucket: "ielts-tracker-3bc28.firebasestorage.app",
  messagingSenderId: "274592248112",
  appId: "1:274592248112:web:eb728a3e79a633e3c1d8f5",
  measurementId: "G-0K14104431"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
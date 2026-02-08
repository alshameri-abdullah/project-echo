import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyATvQi5s6HRZntKAEjPzZNeABPRd7gys4s',
  authDomain: 'project-echo-81f71.firebaseapp.com',
  projectId: 'project-echo-81f71',
  storageBucket: 'project-echo-81f71.firebasestorage.app',
  messagingSenderId: '142373696225',
  appId: '1:142373696225:web:9b3600ed2e8af6314b7da0',
  measurementId: 'G-8R9KDP8DX7',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

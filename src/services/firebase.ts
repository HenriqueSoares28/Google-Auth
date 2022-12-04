import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCCtjsaIbcrWgDpph39glYl_fKgsApxuUk',
  authDomain: 'auth-e5342.firebaseapp.com',
  projectId: 'auth-e5342',
  storageBucket: 'auth-e5342.appspot.com',
  messagingSenderId: '354079513112',
  appId: '1:354079513112:web:bc9a319cb79f2a8c71416d'
};

const app = initializeApp(firebaseConfig);
export const auth =getAuth (app)

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAG-_bIv5fYnSj2oHclTIPqxdXxU85BGR8",
  authDomain: "dispositivos-moveis-terca.firebaseapp.com",
  projectId: "dispositivos-moveis-terca",
  storageBucket: "dispositivos-moveis-terca.firebasestorage.app",
  messagingSenderId: "33760057247",
  appId: "1:33760057247:web:99e5432dfdfae07c9b0faa"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
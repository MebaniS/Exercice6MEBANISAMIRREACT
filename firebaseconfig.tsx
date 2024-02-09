import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4TayYDeEJM2FeLvOaTQQsJz_2vVShbjY",
  authDomain: "projettestreact.firebaseapp.com",
  projectId: "projettestreact",
  storageBucket: "projettestreact.appspot.com",
  messagingSenderId: "92095966401",
  appId: "1:92095966401:web:38efbf60afe48f44d23840",
  measurementId: "G-LLRD8C20L9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
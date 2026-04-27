import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDgoeW2bhoiUjDhUTWmS2zFk3QUZ3m0wuo",
  authDomain: "laurien-portfolio.firebaseapp.com",
  databaseURL: "https://laurien-portfolio-default-rtdb.firebaseio.com",
  projectId: "laurien-portfolio",
  storageBucket: "laurien-portfolio.firebasestorage.app",
  messagingSenderId: "1051360362410",
  appId: "1:1051360362410:web:9ce914a1c3cb0516f535d3",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

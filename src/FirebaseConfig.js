import {
  collection,
  query,
  onSnapshot,
  getFirestore
} from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHuWe58MNHbiSAa9Mj_nASQKWXFoAdAh4",
  authDomain: "week-todolist.firebaseapp.com",
  projectId: "week-todolist",
  storageBucket: "week-todolist.appspot.com",
  messagingSenderId: "50676480844",
  appId: "1:50676480844:web:a4c5e2735977cf8794ade9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getTodos = (callBack) => {
  const consulta = query(collection(db, "Lunes"));
  onSnapshot(consulta, callBack);
};

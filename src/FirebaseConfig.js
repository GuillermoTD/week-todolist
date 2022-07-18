import {
  collection,
  query,
  onSnapshot,
  getFirestore,
  setDoc,
  doc,
  addDoc
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

export const getTodos = (callBack, dia) => {
  let diaConsulta;

  if (dia) {
    diaConsulta = dia;
  } else {
    diaConsulta = "Lunes";
  }
  console.log("hola" + dia);
  const consulta = query(collection(db, diaConsulta));
  onSnapshot(consulta, callBack);
};

export const IncludeTask = async (task, day) => {
  // console.log(task);
  // console.log("este es el dia" + day);
  const collref = collection(db, day);
  addDoc(collref, task);
  // await setDoc(doc(db, "Lunes", "task001"), task);
};

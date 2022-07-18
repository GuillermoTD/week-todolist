import { useEffect, useState } from "react";
import "./styles.css";
import { getTodos } from "./FirebaseConfig";
import Menu from "./components/Menu";
import Main from "./components/Main";
import Lunes from "./components/WeekDays/Lunes";
import Martes from "./components/WeekDays/Martes";
import Miercoles from "./components/WeekDays/Miercoles";
import Jueves from "./components/WeekDays/Jueves";
import Viernes from "./components/WeekDays/Viernes";
import Sabado from "./components/WeekDays/Sabado";
import Domingo from "./components/WeekDays/Domingo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   const fetchTodos = (querySnapshot) => {
  //     const result = querySnapshot.docs.map((doc) => doc.data());
  //     setTodos(result);
  //     console.log(todos);
  //     console.log(Array.isArray(querySnapshot.docs))
  //     console.log(querySnapshot.docs)

  //   };
  //   getTodos(fetchTodos);
  // }, []);

  return (
    <div className="App">
      <Menu />
      <Main todos={todos} />
    </div>
  );
}

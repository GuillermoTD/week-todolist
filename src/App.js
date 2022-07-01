import { useEffect, useState } from "react";
import "bulma/css/bulma.css";
import "./styles.css";
import { getTodos } from "./FirebaseConfig";
import Menu from "./components/Menu";
import Main from "./components/Main";
export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = (querySnapshot) => {
      const result = querySnapshot.docs.map((doc) => doc.data());
      setTodos(result);
      console.log(todos);
    };
    getTodos(fetchTodos);
  }, []);
  return (
    <div className="App">
      <Menu />
      <Main todos={todos} />
    </div>
  );
}

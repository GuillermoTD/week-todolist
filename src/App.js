import { useEffect, useState } from "react";
import "bulma/css/bulma.css";
import { getTodos } from "./FirebaseConfig";

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
    <div className="App ">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        {todos.map((doc, index) => {
          return <li key={index}>{doc.Nombre}</li>;
        })}
      </div>
    </div>
  );
}

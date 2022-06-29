import { useEffect, useState } from "react";
import "bulma/css/bulma.css";
import { getTodos } from "./FirebaseConfig";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async (querySnapshot) => {
      await querySnapshot.forEach((doc) => {
        setTodos([...todos, doc.data()]);
      });
    };
    getTodos(fetchTodos);
    console.log(todos);
  }, []);
  return (
    <div className="App ">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

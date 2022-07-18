import { useEffect, useState } from "react";
import { getTodos } from "../../FirebaseConfig";
import AddModal from "../AddModal";
import swal from "@sweetalert/with-react";
import ReactDom from "react-dom";
import { useNavigate } from "react-router-dom";
const Lunes = () => {
  const [todos, setTodos] = useState([]);
  const Navigate = useNavigate();

  // const modalContainer = document.getElementById("modal");
  // const modal = document.querySelector(".ModalContainer");
  useEffect(() => {
    const fetchTodos = (querySnapshot) => {
      const result = querySnapshot.docs.map((doc) => doc.data());
      setTodos(result);
      console.log(todos);
      console.log(Array.isArray(querySnapshot.docs));
    };
    getTodos(fetchTodos, "Martes");
  }, []);

  return (
    <>
      <div className="Main-Container">
        <div className="Main-Header">
          <div className="Main-Header-UserName">Guillermo</div>
          <div className="Main-Header-UserIcon">userImage</div>
        </div>

        <div className="Main-Date-Box">
          <button onClick={() => Navigate("/")}>
            <i className="fas fa-angle-left"></i>
          </button>
          <div className="Main-Heading">
            <h2>Martes</h2>
            <p>30 Julio 2022</p>
          </div>
          <button onClick={() => Navigate("../miercoles")}>
            <i className="fas fa-angle-right"></i>
          </button>
        </div>

        <button className="Main-AddTask">
          <i className="fas fa-plus"></i>
        </button>

        <div className="Main-TasksList">
          {todos.map((todo, index) => (
            <div key={index} className="Main-TasksList-Item">
              <div className="Main-TasksList-Box1">
                <input type="checkbox" />
                <p>{todo.Titulo}</p>
              </div>

              <div className="Main-TasksList-Box2">
                <button>
                  <i className="fas fa-eye"></i>
                </button>
                <button>
                  <i className="fas fa-ellipsis-h"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Lunes;

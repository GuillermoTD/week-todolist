import { IncludeTask } from "../FirebaseConfig";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";

// Add a new document in collection "cities"

const AddTask = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [day, setDay] = useState();

  const handleTitle = (e) => {
    const titleSubmited = e.target.value;
    setTitle(titleSubmited);
    console.log(title);
  };

  const handleDescription = (e) => {
    const descriptionSubmited = e.target.value;
    setDescription(descriptionSubmited);
    console.log(description);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    const daySetted = day === undefined ? "Lunes" : day;
    console.log(daySetted);
    const Task = {
      Titulo: title,
      Descripcion: description,
      Completado: false
    };
    IncludeTask(Task, daySetted);
  };

  return (
    <>
      <div className="AddTask">
        <div className="AddTask_InputBox">
          <input
            type="text"
            className="AddTask_InputBox_Input"
            placeholder="Añade una tarea"
            onChange={handleTitle}
          />
        </div>

        <div className="AddTask_InputBox">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="AddTask_InputBox_TextArea"
            placeholder="Añade una descripcion"
            onChange={handleDescription}
          />
        </div>

        <select onChange={(e) => console.log(e.target.value)}>
          <option value="Lunes">Lunes</option>
          <option value="Martes">Martes</option>
          <option value="Miercoles">Miercoles</option>
          <option value="Jueves">Jueves</option>
          <option value="Viernes">Viernes</option>
          <option value="Sabado">Sabado</option>
          <option value="Domingo">Domingo</option>
        </select>

        <br />

        <button onClick={handleSubmit} type="submit">
          Agregar
        </button>
      </div>
    </>
  );
};
export default AddTask;

import Lunes from "./WeekDays/Lunes";
import Martes from "./WeekDays/Martes";
import Miercoles from "./WeekDays/Miercoles";
import Jueves from "./WeekDays/Jueves";
import Viernes from "./WeekDays/Viernes";
import Sabado from "./WeekDays/Sabado";
import Domingo from "./WeekDays/Domingo";
import { Routes, Route } from "react-router-dom";
import AddTask from "./AddTask";
const Main = ({ todos }) => {
  return (
    <>
      {/* <Lunes todos={todos} /> */}
      <div className="Main">
        <Routes>
          <Route path="/" element={<Lunes />} />
          <Route path="/martes" element={<Martes />} />
          <Route path="/miercoles" element={<Miercoles />} />
          <Route path="/jueves" element={<Jueves />} />
          <Route path="/viernes" element={<Viernes />} />
          <Route path="/sabado" element={<Sabado />} />
          <Route path="/domingo" element={<Domingo />} />
          <Route path="/addtask" element={<AddTask />} />
        </Routes>
      </div>
    </>
  );
};

export default Main;

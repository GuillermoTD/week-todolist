const Menu = () => {
  return (
    <>
      <div className="is-primary Menu-Container">
        <div className="Menu-Hamburguer">
          <span className="span1"></span>
          <span className="span2"></span>
          <span className="span3"></span>
        </div>
        <div className="Menu-Days">
          <li>
            <span>L</span>
            Lunes
          </li>
          <li>
            <span>M</span>
            Martes
          </li>
          <li>
            <span>M</span>
            Miercoles
          </li>
          <li>
            <span>J</span>
            Jueves
          </li>
          <li>
            <span>V</span>
            Viernes
          </li>
          <li>
            <span>S</span>
            Sabado
          </li>
          <li>
            <span>D</span>
            Domingo
          </li>
        </div>

        <div className="Menu-Completed">Tasks Completed</div>
        <div className="MenuIconFAQ">FAQ</div>
      </div>
    </>
  );
};

export default Menu;

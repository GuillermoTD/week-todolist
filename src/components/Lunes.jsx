const Lunes = ({ todos }) => {
  return (
    <>
      <div className="Main-Container">
        <div className="Main-Header">
          <div className="Main-Header-UserName">Guillermo</div>
          <div className="Main-Header-UserIcon">userImage</div>
        </div>

        <div className="Main-Date-Box">
          <button>
            <i class="fas fa-angle-left"></i>
          </button>
          <div className="Main-Heading">
            <h2>Lunes</h2>
            <p>30 Julio 2022</p>
          </div>
          <button>
            <i class="fas fa-angle-right"></i>
          </button>
        </div>

        <button className="Main-AddTask">
          <i class="fas fa-plus"></i>
        </button>

        <div className="Main-TasksList">
          {todos.map((todo, index) => (
            <div key={index} className="Main-TasksList-Item">
              <div className="Main-TasksList-Box1">
                <input type="checkbox" />
                <p>{todo.Nombre}</p>
              </div>

              <div className="Main-TasksList-Box2">
                <button>
                  <i class="fas fa-eye"></i>
                </button>
                <button>
                  <i class="fas fa-ellipsis-h"></i>
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

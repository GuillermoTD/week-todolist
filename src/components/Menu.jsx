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
            L<span>unes</span>
          </li>
          <li>
            M<span>artes</span>
          </li>
          <li>
            M<span>iercoles</span>
          </li>
          <li>
            J<span>ueves</span>
          </li>
          <li>
            V<span>iernes</span>
          </li>
          <li>
            S<span>abado</span>
          </li>
          <li>
            D<span>omingo</span>
          </li>
        </div>

        <div className="Menu-Completed">Tasks Completed</div>
        <div className="MenuIconFAQ">FAQ</div>
      </div>
    </>
  );
};

export default Menu;

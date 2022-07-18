import { createPortal } from "react-dom";

const AddModal = () => {
  // const modalRoot = document.getElementById("modal");
  // const modal = document.querySelector(".ModalContainer");

  // const closeModal = () => {
  //   console.log("esto deberia quitar el component");
  //   modalRoot.removeChild(modal);
  // };
  return (
    <div className="ModalContainer">
      <div className="Modal">
        <div className="Modal_Header">
          <div className="Modal_Header_Title">Agrega una nueva tarea</div>
          <button className="Modal_Header_CloseBtn">X</button>
        </div>

        <div className="Modal_Form">
          <div className="Modal_Form_Inputs">
            <div className="Modal_Form_Input">
              <p>Nombre:</p>
              <input id="Nombre" type="text" placeholder="Nombre" />
            </div>
            <div className="Modal_Form_Input">
              <p>Descripcion</p>
              <textarea
                type="text"
                rows="6"
                cols="38"
                placeholder="Descripcion"
              />
            </div>

            <div className="Modal_Form_SubmitButtons">
              <button class="active">Guardar</button>
              <button>Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="modal">
    //   <div>
    //     <div>
    //       <div>Agrega una nueva tarea</div>
    //       <button>X</button>
    //     </div>

    //     <div>
    //       <div>
    //         <div>
    //           <p>Nombre:</p>
    //           <input id="Nombre" type="text" placeholder="Nombre" />
    //         </div>
    //         <div>
    //           <p>Descripcion</p>
    //           <textarea
    //             type="text"
    //             rows="6"
    //             cols="38"
    //             placeholder="Descripcion"
    //           />
    //         </div>

    //         <div>
    //           <button>Guardar</button>
    //           <button>Cancelar</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
export default AddModal;

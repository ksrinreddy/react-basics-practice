import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../data";

// reducer function
import { reducer } from "./reducer";

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const UseReducerBasics = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>

      {state.people.map((person) => {
        return (
          <div className="item" key={person.id}>
            <h4>{person.name}</h4>
            <button
              type="button"
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: person.id })
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default UseReducerBasics;

// import React, { useState, useReducer } from "react";
// import Modal from "./Modal";
// import { data } from "../../data";
// // reducer function

// const UseReducerBasics = () => {
//   const [name, setName] = useState("");
//   // const [people, setPeople] = useState(data);
//   // const [showModal, setShowModal] = useState(false);
//   const reducer = (state, action) => {};
//   const defaultState = {
//     people: [],
//     isModalOpen: false,
//     modalContent: "",
//   };
//   const [state, dispatch] = useReducer(reducer, defaultState);
//   // console.log(useReducer);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name) {
//     } else {
//     }
//   };
//   return (
//     <>
//       {state.isModalOpen && <Modal modalContent={state.modalContent} />}
//       <form onSubmit={handleSubmit} className="form">
//         <div>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <button type="submit" className="btn">
//           add
//         </button>
//       </form>
//       {state.people.map((person) => {
//         return (
//           <div key={person.id}>
//             <h4>{person.name}</h4>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default UseReducerBasics;

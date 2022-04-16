import "./styles.css";
import { useState } from "react";
import { todosTemplate } from "./utils/data";
import { toDoContext } from "./contexts/todo-context";
import { List } from "./components/List/List";
import { Popup } from "./components/Popup/Popup";

export default function App() {
  const [todo, setTodo] = useState(todosTemplate);
  const [openPopup, setOpenPopup] = useState(false);

  const togglePopup = () => {
    !openPopup ? setOpenPopup(true) : setOpenPopup(false);
  };

  return (
    <toDoContext.Provider value={{ todo, setTodo }}>
      <div className="App">
        {openPopup ? (
          ""
        ) : (
          <div>
            <h1 className="main-title">My to do list</h1>
            {todo.length === 0 ? <p>Looks like youre free today</p> : ""}
            <button onClick={togglePopup}>Add Task</button>

            <List />
          </div>
        )}
        {openPopup && <Popup togglePopup={togglePopup} />}{" "}
        {openPopup && <Popup togglePopup={togglePopup} />}
      </div>
    </toDoContext.Provider>
  );
}

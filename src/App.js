import "./styles.css";
import { useState } from "react";
import { todosTemplate } from "./utils/data";
import { toDoContext } from "./contexts/todo-context";
import { List } from "./components/List/List";
import { Popup } from "./components/Popup/Popup";
import { AddTaskForm } from "./components/AddTaskForm/AddTaskForm";
import { EditTaskForm } from "./components/EditTaskForm/EditTaskForm";

export default function App() {
  const [todo, setTodo] = useState(todosTemplate);
  const [openAddTaskPopup, setOpenAddTaskPopup] = useState(false);
  const [openEditTaskPopup, setOpenEditTaskPopup] = useState(false);

  const toggleAddTaskPopup = () => {
    !openAddTaskPopup ? setOpenAddTaskPopup(true) : setOpenAddTaskPopup(false);
  };

  const toggleEditTaskPopup = () => {
    !openEditTaskPopup
      ? setOpenEditTaskPopup(true)
      : setOpenEditTaskPopup(false);
  };

  return (
    <toDoContext.Provider value={{ todo, setTodo }}>
      <div className="App">
        {openAddTaskPopup ? (
          ""
        ) : (
          <div>
            <h1 className="main-title">My to do list</h1>
            {todo.length === 0 ? <p>Looks like youre free today</p> : ""}
            <button onClick={toggleAddTaskPopup}>Add Task</button>

            <List toggleEditTaskPopup={toggleEditTaskPopup} />
          </div>
        )}
        {openAddTaskPopup && (
          <Popup togglePopup={toggleAddTaskPopup}>
            <AddTaskForm togglePopup={toggleAddTaskPopup}></AddTaskForm>
          </Popup>
        )}
        {openEditTaskPopup && (
          <Popup togglePopup={toggleEditTaskPopup}>
            <EditTaskForm></EditTaskForm>
          </Popup>
        )}
      </div>
    </toDoContext.Provider>
  );
}

import "./styles.css";
import { useState } from "react";
import { todosTemplate } from "./utils/data";
import { toDoContext } from "./contexts/todo-context";
import { List } from "./components/List/List";
import { Popup } from "./components/Popup/Popup";
import { AddTaskForm } from "./components/AddTaskForm/AddTaskForm";
import { EditTaskForm } from "./components/EditTaskForm/EditTaskForm";
import { Counter } from "./components/Counter/Counter";

export default function App() {
  const [todo, setTodo] = useState(todosTemplate);
  const [openAddTaskPopup, setOpenAddTaskPopup] = useState(false);
  const [openEditTaskPopup, setOpenEditTaskPopup] = useState(false);
  const [item, setItem] = useState({});

  const toggleAddTaskPopup = () => {
    !openAddTaskPopup ? setOpenAddTaskPopup(true) : setOpenAddTaskPopup(false);
  };

  const toggleEditTaskPopup = () => {
    !openEditTaskPopup
      ? setOpenEditTaskPopup(true)
      : setOpenEditTaskPopup(false);
  };

  function handleTaskEdit(item) {
    setItem(item);
    toggleEditTaskPopup();
  }

  return (
    <toDoContext.Provider value={{ todo, setTodo }}>
      <div className="App">
        {openAddTaskPopup || openEditTaskPopup ? (
          ""
        ) : (
          <div>
            <h1 className="main-title">My to do list</h1>

            <button onClick={toggleAddTaskPopup}>Add Task</button>
            {todo.length !== 0 ? (
              <>
                <List handleTaskEdit={handleTaskEdit} />
                <Counter />
              </>
            ) : (
              <p>Looks like youre free today</p>
            )}
          </div>
        )}
        {openAddTaskPopup && (
          <Popup togglePopup={toggleAddTaskPopup}>
            <AddTaskForm togglePopup={toggleAddTaskPopup}></AddTaskForm>
          </Popup>
        )}
        {openEditTaskPopup && (
          <Popup togglePopup={toggleEditTaskPopup}>
            <EditTaskForm
              item={item}
              toggleEditTaskPopup={toggleEditTaskPopup}
            ></EditTaskForm>
          </Popup>
        )}
      </div>
    </toDoContext.Provider>
  );
}

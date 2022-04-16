import { useContext, useEffect, useRef, useState } from "react";
import { toDoContext } from "../../contexts/todo-context";

export const AddTaskForm = ({ togglePopup }) => {
  const { todo, setTodo } = useContext(toDoContext);
  const [task, setTask] = useState("");
  const inputField = useRef("");

  const handleAddTask = () => {
    if (task) {
      setTodo([
        ...todo,
        {
          id: todo.length > 0 ? todo[todo.length - 1].id + 1 : 0,
          label: task,
          checked: false
        }
      ]);
    }
    setTask("");
    if (task.length !== 0) togglePopup();
  };

  const handleInput = (e) => {
    setTask(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) handleAddTask();
  };

  useEffect(() => {
    inputField.current.focus();
  }, []);

  return (
    <div className="form">
      <h2>Add your new task </h2>
      <input
        ref={inputField}
        value={task}
        onChange={handleInput}
        className="form__input"
        onKeyUp={handleEnterPress}
      ></input>
      <button
        disabled={task.length === 0 ? true : false}
        onClick={handleAddTask}
        className="form__button"
      >
        Add task
      </button>
    </div>
  );
};

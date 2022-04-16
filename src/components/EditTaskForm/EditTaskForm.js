import { useContext, useEffect, useRef, useState } from "react";
import { toDoContext } from "../../contexts/todo-context";

export const EditTaskForm = () => {
  const { todo, setTodo } = useContext(toDoContext);
  const [task, setTask] = useState("");
  const EditInputField = useRef("");

  const handleEditTask = () => {};

  const handleInput = (e) => {
    setTask(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) handleEditTask();
  };

  useEffect(() => {
    EditInputField.current.focus();
  }, []);

  return (
    <div className="form">
      <h2>Edit Your task</h2>
      <input
        ref={EditInputField}
        value={task}
        onChange={handleInput}
        className="form__input"
        onKeyUp={handleEnterPress}
      ></input>
      <button
        disabled={task.length === 0 ? true : false}
        onClick={handleEditTask}
        className="form__button"
      >
        Add task
      </button>
    </div>
  );
};

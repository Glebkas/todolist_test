import { useContext, useEffect, useRef, useState } from "react";
import { toDoContext } from "../../contexts/todo-context";

export const EditTaskForm = ({ item, toggleEditTaskPopup }) => {
  const { todo, setTodo } = useContext(toDoContext);
  const [task, setTask] = useState("");
  const EditInputField = useRef("");

  const handleEditTask = (id, newLabel) => {
    setTodo(
      todo.map((el) => {
        if (el.id === id)
          return {
            ...el,
            label: newLabel
          };
        return el;
      })
    );
    toggleEditTaskPopup();
  };

  const handleInput = (e) => {
    setTask(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) handleEditTask(item.id, task);
  };

  useEffect(() => {
    EditInputField.current.focus();
    setTask(item.label);
  }, [item.label]);

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
        onClick={() => handleEditTask(item.id, task)}
        className="form__button"
      >
        Save
      </button>
    </div>
  );
};

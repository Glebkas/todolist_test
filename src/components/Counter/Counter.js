import "./Counter.css";
import { useContext, useEffect, useState } from "react";

import { toDoContext } from "../../contexts/todo-context";

export const Counter = () => {
  const { todo } = useContext(toDoContext);
  const [checkedCount, setCheckedCount] = useState("");

  useEffect(() => {
    setCheckedCount(todo.filter((item) => item.checked === true).length);
  }, [todo]);

  return (
    <div className="counter">
      <span className="counter__container">
        <p> {`${checkedCount}/${todo.length}`}</p>
        <p>tasks completed</p>
      </span>
    </div>
  );
};

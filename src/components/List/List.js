import { ListItem } from "../ListItem/ListItem";

import { useContext } from "react";
import { toDoContext } from "../../contexts/todo-context";

export const List = ({ handleTaskEdit }) => {
  const { todo, setTodo } = useContext(toDoContext);

  const toggleCheck = (id) => {
    setTodo(
      todo.map((item) => {
        if (item.id === id)
          return {
            ...item,
            checked: !item.checked
          };
        return item;
      })
    );
  };

  const deleteItem = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  return (
    <ul>
      {todo.map((item) => (
        <ListItem
          onClick={() => toggleCheck(item.id)}
          key={item.id}
          label={item.label}
          checked={item.checked}
          onDelete={() => deleteItem(item.id)}
          handleTaskEdit={() => handleTaskEdit(item)}
        />
      ))}
    </ul>
  );
};

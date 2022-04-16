import "./ListItem.css";

export const ListItem = ({ label, id, checked, onClick, onDelete, onEdit }) => {
  return (
    <li className="list-item">
      <div onClick={onClick} className="list-item__container">
        <input
          className="list-item__checkbox"
          type="checkbox"
          checked={checked}
          onChange={onClick}
        />
        <p className={checked ? "list-item__label_cheked" : "list-item__label"}>
          {label}
        </p>
      </div>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete} className="list-item__button">
        X
      </button>
    </li>
  );
};

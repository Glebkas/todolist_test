import "./Popup.css";
import { AddTaskForm } from "../AddTaskForm/AddTaskForm";

export const Popup = ({ togglePopup }) => {
  return (
    <div onClick={togglePopup} className="popup">
      <div onClick={(e) => e.stopPropagation()} className="popup__container">
        <button onClick={togglePopup} className="popup__close-button">
          X
        </button>
        <AddTaskForm togglePopup={togglePopup} />
      </div>
    </div>
  );
};

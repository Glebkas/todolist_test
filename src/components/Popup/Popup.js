import "./Popup.css";

export const Popup = ({ togglePopup, children }) => {
  const handleKeyUp = (e) => {
    if (e.keyCode === 27) togglePopup();
  };
  return (
    <div onKeyUp={handleKeyUp} onClick={togglePopup} className="popup">
      <div onClick={(e) => e.stopPropagation()} className="popup__container">
        <button onClick={togglePopup} className="popup__close-button">
          X
        </button>
        {children}
      </div>
    </div>
  );
};

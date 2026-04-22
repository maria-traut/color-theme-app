import "./ColorCard.css";
import { useState } from "react";

export default function ColorCard({ color, onDeleteColor }) {
  /* 3. introducing a state: https://react.dev/learn/reacting-to-input-with-state
  a. identify your component’s different visual states: only delete button || confirm message + cancel button + delete button
  b. determine what triggers those state changes: click on delete button || click on cancel button
  c. represent the state in memory using useState (isDeleting, isCancelling, isConfirmingDelete, isShownConfirmMessage. start with the state that absolutely must be there: delete button = inititalState)
  d. remove any non-essential state variables to avoid bugs and paradoxes
  e. connect the event handlers to set the state
  */
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);

  return (
    <article
      className="color-card"
      style={{ backgroundColor: color.hex, color: color.contrastText }}
    >
      <p className="color-card__highlight">{color.hex}</p>
      <h3 className="color-card__role">{color.role}</h3>
      <p className="color-card__contrastText">contrast: {color.contrastText}</p>
      {/* button
      // 3. delete button without confirm message: className="color-card__delete-button" type="button" aria-label="delete color card" onClick= curly, round, round, arrow onDeleteColors?.rount color round, curly */}
      {isConfirmingDelete ? ( //3. with confirm message and cancel button || line 24 - 34: if state isConfirmingDelete = true (user clicks delete button), user sees cancel and delete
        <div className="color-card__confirm">
          <p className="color-card__highlight">Really delete?</p>
          <button type="button" onClick={() => setIsConfirmingDelete(false)}>
            CANCEL
          </button>
          <button type="button" onClick={() => onDeleteColor(color)}>
            DELETE
          </button>
        </div>
      ) : (
        // 3. with confirm message and delete button || line 34 - 42: if state isConfirmingDelete = false (user does not click button), user sees delete button
        <button
          type="button"
          className="color-card__delete-button"
          onClick={() => setIsConfirmingDelete(true)}
        >
          DELETE
        </button>
      )}
    </article>
  );
}

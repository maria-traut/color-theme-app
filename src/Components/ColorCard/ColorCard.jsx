import "./ColorCard.css";
import { useState } from "react";

export default function ColorCard({ color, onDeleteColors }) {
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false); // 3.

  return (
    <article
      className="color-card"
      style={{ backgroundColor: color.hex, color: color.contrastText }}
    >
      <p className="color-card__highlight">{color.hex}</p>
      <h3 className="color-card__role">{color.role}</h3>
      <p className="color-card__contrastText">contrast: {color.contrastText}</p>
      {/* button
      // 3. delete button without confirmation message
      className="color-card__delete-button" type="button" aria-label="delete color card" onClick= curly, round, round, arrow onDeleteColors?.rount color round, curly */}
      {isConfirmingDelete ? ( //3. with confirmation message and cancel button
        <div className="color-card__confirm">
          <p className="color-card__highlight">Really delete?</p>
          <button type="button" onClick={() => setIsConfirmingDelete(false)}>
            CANCEL
          </button>
          <button type="button" onClick={() => onDeleteColors(color)}>
            DELETE
          </button>
        </div>
      ) : (
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

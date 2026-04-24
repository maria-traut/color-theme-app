import ColorForm from "../ColorForm/ColorForm";
import "./ColorCard.css";
import { useState, useEffect } from "react";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";

export default function ColorCard({ color, onDeleteColor, onUpdateColor }) {
  const [isShowingColorForm, setIsShowingColorForm] = useState(false);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const [isCheckingColorContrast, setIsCheckingColorContrast] = useState(null);

  function handleConfirmingDelete(isConfirmingDelete) {
    setIsConfirmingDelete(isConfirmingDelete);
  }

  function handleShowingColorForm(isShowingColorForm) {
    setIsShowingColorForm(!isShowingColorForm);
  }

  useEffect(() => {
    async function getContrastData() {
      try {
        const response = await fetch(
          "https://www.aremycolorsaccessible.com/api/are-they",
          {
            method: "POST",
            body: JSON.stringify({ colors: [color.hex, color.contrastText] }),
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        if (!response.ok) {
          throw Error(`API error: §{response.status}`);
        }

        const contrastData = await response.json();
        // console.log(contrastData);
        // console.log(contrastData.overall);
        setIsCheckingColorContrast(contrastData.overall);
      } catch (error) {
        console.error(error.message);
      }
    }
    getContrastData();
  }, [color]);

  return (
    <article
      className="color-card"
      style={{ backgroundColor: color.hex, color: color.contrastText }}
    >
      <p className="color-card__highlight">{color.hex}</p>
      <CopyToClipboard text={color.hex} />
      <h3 className="color-card__role">{color.role}</h3>
      <p className="color-card__contrastText">contrast: {color.contrastText}</p>
      <p className="color-card__contrastCheck">
        Overall Contrast Score: {isCheckingColorContrast}
      </p>

      {isShowingColorForm ? ( // ColorForm
        <div className="color-card__update">
          <ColorForm
            id={color.id}
            initialData={color}
            buttonText="update color"
            onAddColor={(data) => {
              onUpdateColor(color.id, data);
              handleShowingColorForm(true);
            }}
          />
          <button
            type="button"
            aria-label="cancel-button"
            className="color-card__cancel-button"
            onClick={() => handleShowingColorForm(true)}
          >
            cancel
          </button>
        </div>
      ) : (
        // no ColorForm (edit button (+ delete) button only)
        <div>
          {isConfirmingDelete ? ( // confirm message
            <div className="color-card__confirm">
              <p className="color-card__highlight">Really delete?</p>
              <button
                type="button"
                aria-label="cancel-button"
                className="color-card__cancel-button"
                onClick={() => handleConfirmingDelete(false)}
              >
                cancel
              </button>
              <button
                type="button"
                aria-label="delete-button"
                className="color-card__delete-button"
                onClick={() => onDeleteColor(color)}
              >
                delete
              </button>
            </div>
          ) : (
            <>
              {/* no confirm message (default app status || (edit button +) delete button only*/}
              <button
                type="button"
                aria-label="confirm-delete-button"
                className="color-card__delete-button"
                onClick={() => handleConfirmingDelete(true)}
              >
                delete
              </button>
              <button
                type="button"
                aria-label="edit-button"
                className="color-card__edit-button"
                onClick={() => handleShowingColorForm(false)}
              >
                edit
              </button>
            </>
          )}
        </div>
      )}
    </article>
  );
}

/* 3. introducing a state: https://react.dev/learn/reacting-to-input-with-state
  a. identify your component’s different visual states: only delete button || confirm message + cancel button + delete button
  b. determine what triggers those state changes: click on delete button || click on cancel button
  c. represent the state in memory using useState (isDeleting, isCancelling, isConfirmingDelete, isShownConfirmMessage. start with the state that absolutely must be there: delete button = inititalState)
  d. remove any non-essential state variables to avoid bugs and paradoxes
  e. connect the event handlers to set the state
  */

// https://www.dhiwise.com/blog/design-converter/react-change-component-on-click-simple-guide-for-beginners

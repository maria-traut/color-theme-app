import "./App.css";
import ThemeForm from "./Components/ThemeForm/ThemeForm";
import ColorCard from "./Components/ColorCard/ColorCard";
import ColorForm from "./Components/ColorForm/ColorForm";
import { initialColors } from "./lib/colors";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";

export default function App() {
  // 1. variable for showing one/first color of array: const color = initialColors[0];
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });

  // 8.
  const [isShowingThemeForm, setIsShowingThemeForm] = useState(false);

  // 2. adding new color cards (like journal entry form challenge)
  function handleAddColor(newColor) {
    setColors([{ id: uid(), ...newColor }, ...colors]);
  }

  // 3. deleting color cards (like tags, tags, tags challenge)
  function handleDeleteColor(colorToDelete) {
    const mutatedColors = colors.filter(
      (color) => color.id !== colorToDelete.id,
    );
    setColors(mutatedColors);
  }

  // 4. updating color cards after editing one
  function handleUpdateColor(id, newColor) {
    // console.log(id, newColor);
    const updatedColor = { ...newColor, id: id };
    setColors(colors.map((color) => (color.id === id ? updatedColor : color)));
  }

  // 8.
  function handleShowingThemeForm(isShowingThemeForm) {
    setIsShowingThemeForm(!isShowingThemeForm);
  }

  return (
    <div>
      <h1 className="app-headline">Theme Creator</h1>
      {isShowingThemeForm ? ( //EditForm
        <div className="theme-card__add">
          <ThemeForm />
          <button
            type="button"
            aria-label="cancel-button"
            className="theme-form__cancel-button"
            onClick={() => handleShowingThemeForm(true)}
          >
            cancel
          </button>
        </div>
      ) : (
        // no EditForm (default theme + add + edit + delete only)
        <div>
          <div className="theme-switcher">
            <button
              className="theme-creator__dropdown"
              type="button"
              aria-label="theme name"
            >
              Default Theme ▾
            </button>
            <div className="theme-dropdown">
              <button data-theme="Default Theme">Default Theme</button>
              <button data-theme="2nd Theme">2nd Theme</button>
            </div>
          </div>
          <button
            className="theme-creator__add-theme"
            type="button"
            aria-label="add-theme-button"
          >
            add
          </button>
          <button
            className="theme-creator__edit-theme"
            type="button"
            aria-label="edit-theme-button"
            onClick={() => handleShowingThemeForm(false)}
          >
            edit
          </button>
          <button
            className="theme-creator__delete-theme"
            type="button"
            aria-label="delete-theme-button"
          >
            delete
          </button>
        </div>
      )}
      <ColorForm buttonText="add color" onAddColor={handleAddColor} />
      {colors.length === 0 ? ( // 2.
        <p className="add-new-colors">No colors ... start by adding one!</p>
      ) : (
        colors.map((color) => (
          <ColorCard
            key={color.id}
            color={color}
            onDeleteColor={handleDeleteColor}
            onUpdateColor={handleUpdateColor}
          />
        ))
      )}
    </div>
  );
}

// 3. https://stackoverflow.com/questions/55170713/react-how-to-show-message-if-there-is-no-records

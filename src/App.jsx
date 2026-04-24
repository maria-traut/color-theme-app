import "./App.css";
import ColorCard from "./Components/ColorCard/ColorCard";
import ColorForm from "./Components/ColorForm/ColorForm";
import { initialColors } from "./lib/colors";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  // 1. variable for showing one/first color of array: const color = initialColors[0];
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });

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

  return (
    <div>
      <h1 className="app-headline">Theme Creator</h1>
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

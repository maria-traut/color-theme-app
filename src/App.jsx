import "./App.css";
import ColorCard from "./Components/ColorCard/ColorCard";
import ColorForm from "./Components/ColorForm/ColorForm";
import { initialColors } from "./lib/colors";
import { uid } from "uid";
import { useState } from "react";

export default function App() {
  // 1. variable for showing one/first color of array: const color = initialColors[0];
  const [colors, setColors] = useState(initialColors); // 2.

  // 2. adding new color cards (like journal entry form challenge)
  function handleAddColors(newColor) {
    setColors([{ id: uid(), ...newColor }, ...colors]);
  }

  // 3. deleting color cards (like tags, tags, tags challenge)
  function handleDeleteColors(colorToDelete) {
    const mutatedColors = colors.filter((color) => color !== colorToDelete);
    setColors(mutatedColors);
  }

  return (
    <div>
      <h1 className="app-headline">Theme Creator</h1>
      <ColorForm onAddColors={handleAddColors} /* 2. */ />
      {Array.isArray(colors) && colors.length === 0 ? ( // 3. // https://stackoverflow.com/questions/55170713/react-how-to-show-message-if-there-is-no-records
        <p className="add-new-colors">No colors ... start by adding one!</p>
      ) : (
        colors.map(
          (
            color, // 1. one color: <ColorCard color={color}> </ColorCard>; mapping colors: initialColors.map
          ) => (
            <ColorCard
              key={color.id}
              color={color}
              onDeleteColors={handleDeleteColors}
            />
          ),
        )
      )}
    </div>
  );
}

import "./App.css";
import ColorCard from "./Components/ColorCard/ColorCard";
import ColorForm from "./Components/ColorForm/ColorForm";
import { initialColors } from "./lib/colors";
import { uid } from "uid";
import { useState } from "react";

export default function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColors(newTheme) {
    setColors([{ id: uid(), ...newTheme }, ...colors]);
  }

  return (
    <div>
      <h1 className="app-headline">Theme Creator</h1>
      <ColorForm onAddColors={handleAddColors} />
      {initialColors.map((color) => (
        <ColorCard key={color.id} color={color}></ColorCard>
      ))}
    </div>
  );
}

// variable for showing one/first color -> const color = initialColors[0];
// component before mapping -> <ColorCard color={color}> </ColorCard>

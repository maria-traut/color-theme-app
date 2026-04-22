import "./App.css";
import ColorCard from "./Components/ColorCard/ColorCard";
import ColorForm from "./Components/ColorForm/ColorForm";
import { initialColors } from "./lib/colors";
import { uid } from "uid";
import { useState } from "react";

export default function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColors(newColor) {
    setColors([{ id: uid(), ...newColor }, ...colors]);
    console.log("this is the new color: " + newColor);
  }

  return (
    <div>
      <h1 className="app-headline">Theme Creator</h1>
      <ColorForm onAddColors={handleAddColors} />
      {colors.map((color) => (
        <ColorCard key={color.id} color={color}></ColorCard>
      ))}
    </div>
  );
}

// variable for showing one/first color of array -> const color = initialColors[0];
// component before mapping -> <ColorCard color={color}> </ColorCard>

import { initialColors } from "./lib/colors";
import "./App.css";
import Color from "./Components/Color/Color";

export default function App() {
  const color = initialColors[0];
  return (
    <div>
      <h1>Theme Creator</h1>
      <Color color={color}> </Color>
    </div>
  );
}

/* {firstColor.colors.map((color) => (
        <Color key={firstColor.id} color={firstColor.color}></Color>
      ))}

    */

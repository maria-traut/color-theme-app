import { initialColors } from "./lib/colors";
import "./App.css";
import ColorCard from "./Components/Color/ColorCard";

export default function App() {
  return (
    <div>
      <h1>Theme Creator</h1>
      {initialColors.map((color) => (
        <ColorCard key={color.id} color={color}></ColorCard>
      ))}
    </div>
  );
}

// variable for only showing one/first color -> const color = initialColors[0];
// before mapping -> <ColorCard color={color}> </ColorCard>

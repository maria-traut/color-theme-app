import { useState } from "react";
import "./ColorInput";

export default function ColorInput({ id }) {
  const [inputValue, setInputValue] = useState("#5C6BC0");

  function handleInputValue(event) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <input
        type="text"
        id={id}
        name={id}
        value={inputValue}
        onChange={handleInputValue}
      />
      <input
        type="color"
        readOnly
        value={inputValue}
        onChange={handleInputValue}
      />
    </>
  );
}

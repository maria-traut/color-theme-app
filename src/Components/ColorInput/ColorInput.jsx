import { useState } from "react";

export default function ColorInput({ id, defaultValue }) {
  const [inputValue, setInputValue] = useState(defaultValue);

  function handleInputValue(event) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <input
        type="text"
        id={id} // for f. e. id="hex" in input element
        name={id} // for f. e. htmlFor="hex" in label element
        value={inputValue}
        onChange={handleInputValue}
      />
      <input
        type="color"
        /* input type:"color" creates color picker, wohoo */ value={inputValue}
        onChange={handleInputValue}
      />
    </>
  );
}

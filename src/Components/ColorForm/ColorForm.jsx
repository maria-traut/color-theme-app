import "./ColorForm.css";
import ColorInput from "../ColorInput/ColorInput";

// color form like entry form in journal app

export default function ColorForm({ onAddColors }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    // console.log("getting data: " + data);
    onAddColors(data);
    event.target.reset();
  }
  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <div className="color-form__fields">
        <div className="color-form__field">
          <label htmlFor="role">Role</label>
          <input type="text" name="role" id="role" placeholder="some color" />
        </div>
        <div className="color-form__field">
          <label htmlFor="hex">Hex</label>
          <ColorInput id="hex" placeholder="#123456" />
        </div>
        <div className="color-form__field">
          <label htmlFor="contrast-text">Contrast Text</label>
          <ColorInput id="contrast-text" placeholder="#ffffff" />
        </div>
        <div className="color-form__button-wrapper">
          <button type="submit">ADD COLOR</button>
        </div>
      </div>
    </form>
  );
}

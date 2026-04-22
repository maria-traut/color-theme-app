import "./ColorForm.css";
import ColorInput from "../ColorInput/ColorInput";

// color form like entry form in journal app

export default function ColorForm({
  onAddColors,
  initialData = { role: "some color", hex: "#123456", contrastText: "#ffffff" },
}) {
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
      <div className="color-form__field">
        <label htmlFor="role">Role</label>
        <div className="color-form__input-row">
          <input
            type="text"
            name="role"
            id="role"
            defaultValue={initialData.role}
          />
        </div>
      </div>
      <div className="color-form__field">
        <label htmlFor="hex">Hex</label>
        <div className="color-form__input-row">
          <ColorInput id="hex" defaultValue={initialData.hex} />
        </div>
      </div>
      <div className="color-form__field">
        <label htmlFor="contrastText">Contrast Text</label>
        <div className="color-form__input-row">
          <ColorInput
            id="contrastText"
            defaultValue={initialData.contrastText}
          />
        </div>
      </div>
      <div className="color-form__button-wrapper">
        <button
          className="color-card__add-button"
          type="submit"
          aria-label="add color card"
        >
         add color
        </button>
      </div>
    </form>
  );
}

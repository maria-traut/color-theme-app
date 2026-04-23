import ColorInput from "../ColorInput/ColorInput";
import "./ColorUpdateForm";

export default function ColorUpdateForm({
  onAddColor,
  initialData = { role: "some color", hex: "#123456", contrastText: "#ffffff" },
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddColor(data);
    event.target.reset();
  }
  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <div className="color-form__field">
        <label className="color-form__headline" htmlFor="role">
          Role
        </label>
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
          className="color-card__update-button"
          type="submit"
          aria-label="add color card"
        >
          update color
        </button>
      </div>
    </form>
  );
}

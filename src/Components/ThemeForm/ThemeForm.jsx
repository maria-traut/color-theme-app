import "./ThemeForm.css";

export default function ThemeForm({ onUpdateTheme }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onUpdateTheme(data);
    event.target.reset();
  }

  return (
    <form className="theme-form" onSubmit={handleSubmit}>
      <div className="theme-form__field">
        <label className="theme-form__label" htmlFor="role">
          Theme Name:
        </label>
        <div className="theme-form__row">
          <input
            type="text"
            id="name"
            className="theme-form__input"
            name="name"
            //  id="name"
            //  defaultValue={theme.name}
          />
          <button
            className="theme-form__update-button"
            type="button"
            aria-label="update-theme-button"
          >
            update
          </button>
        </div>
      </div>
    </form>
  );
}

import "./ColorCard.css";

export default function ColorCard({ color, onDeleteColors }) {
  return (
    <article
      className="color-card"
      style={{ backgroundColor: color.hex, color: color.contrastText }}
    >
      <p className="color-card__headline">{color.hex}</p>
      <h3 className="color-card__role">{color.role}</h3>
      <p className="color-card__contrastText">contrast: {color.contrastText}</p>
      <button
        className="color-card__delete-button"
        type="button"
        aria-label="delete color card"
        onClick={() => onDeleteColors?.(color)}
      >
        DELETE
      </button>
    </article>
  );
}

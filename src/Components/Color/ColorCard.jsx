import "./ColorCard.css";

export default function ColorCard({ color }) {
  return (
    <article className="colorcard" style={{ backgroundColor: color.hex }}>
      <p className="colorcard__value" style={{ color: color.contrastText }}>
        {color.hex}
      </p>
      <h3 className="colorcard__role" style={{ color: color.contrastText }}>
        {color.role}
      </h3>
      <p
        className="colorcard__contrastText"
        style={{ color: color.contrastText }}
      >
        contrast: {color.contrastText}
      </p>
    </article>
  );
}

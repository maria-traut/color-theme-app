import "./ColorCard.css";

export default function ColorCard({ color }) {
  return (
    <article
      className="colorcard"
      style={{ backgroundColor: color.hex, color: color.contrastText }}
    >
      <p className="colorcard__value">{color.hex}</p>
      <h3 className="colorcard__role">{color.role}</h3>
      <p className="colorcard__contrastText">contrast: {color.contrastText}</p>
    </article>
  );
}

import "./Color.css";

export default function Color({ color }) {
  return (
    <article className="colorcard">
      <div>
        <h2 className="colorcard__role">{color.role}</h2>
        <p className="colorcard__value">{color.hex}</p>
        <p className="colorcard__contrastText">{color.contrastText}</p>
      </div>
      <div
        className="colorcard__color"
        style={{ backgroundColor: color.hex }}
      ></div>
    </article>
  );
}

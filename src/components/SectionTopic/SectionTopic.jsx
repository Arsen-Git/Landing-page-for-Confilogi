import "../../global.scss";

export default function SectionTopic({ title, text }) {
  return (
    <div className="section__info">
      <h2 className="section__title">{title}</h2>
      <p className="section__text section__text-centered">{text}</p>
    </div>
  );
}

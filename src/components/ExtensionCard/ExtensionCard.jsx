import "./ExtensionCard.scss";
import "../../global.scss";

export default function ExtensionCard({ img, title, versionText }) {
  return (
    <div className="ext__container">
      <figure className="ext__img">
        <img src={img} alt="Browser" />
      </figure>
      <p className="ext__title">Add to {title}</p>
      <p className="ext__text">Minimum version {versionText}</p>
      <figure className="ext__dots">
        <img src={require("../../assets/bg-dots.svg").default} alt="dots" />
      </figure>
      <button className="btn__standart ext__btn">
        Add & Install Extension
      </button>
    </div>
  );
}

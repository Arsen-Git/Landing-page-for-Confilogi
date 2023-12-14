import "./Newsletter.scss";
import "../../global.scss";

export default function Newsletter() {
  return (
    <section className="newsletter__wrapper">
      <div className="newsletter__content">
        <p className="newsletter__amount">35.000+ Already Joined</p>
        <h3 className="newsletter__title">
          Stay up-to-date with what we're doing
        </h3>
        <div className="newsletter__input">
          <input
            type="text"
            name="newsletter"
            id="newsletter"
            placeholder="Enter your email adress"
          />
          <button className="btn__orange">Contact Us</button>
        </div>
      </div>
    </section>
  );
}

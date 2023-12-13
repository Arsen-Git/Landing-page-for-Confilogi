import "./Hero.scss";
import "../../global.scss";

import heroImg from "../../assets/illustration-hero.svg";

export default function Hero() {
  return (
    <section className="hero__wrapper">
      <div className="hero__content">
        <div className="hero__info">
          <h1 className="hero__title">A simple bookmark manager</h1>
          <p className="section__text">
            A clean and simple interface to organize your falourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="hero__btns">
            <button className="btn__standart">Get it on Chrome</button>
            <button className="btn__standart btn__standart-gray">
              Get it on Firefox
            </button>
          </div>
        </div>
        <figure className="hero__img">
          <img src={heroImg} alt="Bookmark manager" />
        </figure>
      </div>
      <div className="decor"></div>
    </section>
  );
}

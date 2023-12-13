import "./Header.scss";
import "../../global.scss";

import logo from "../../assets/logo-bookmark.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__content section__container">
        <figure className="header__logo">
          <img src={logo} alt="Bookmark" />
        </figure>
        <menu className="header__menu">
          <li className="header__menu__item">Features</li>
          <li className="header__menu__item">Pricing</li>
          <li className="header__menu__item">Contact</li>
          <button className="btn__orange">Login</button>
        </menu>
      </div>
    </header>
  );
}

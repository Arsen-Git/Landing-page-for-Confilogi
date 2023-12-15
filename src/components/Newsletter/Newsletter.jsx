import "./Newsletter.scss";
import "../../global.scss";

import { useState, useEffect } from "react";

export default function Newsletter() {
  const [inputValue, setInputValue] = useState("");

  const onValidate = (e) => {
    if (e) {
      e.preventDefault();
    }
    if (
      inputValue === "" ||
      !inputValue.match("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{1,63}$")
    ) {
      document
        .getElementById("newsletter")
        .classList.add("newsletter__input-invalid");
      document
        .getElementById("newsletter")
        .parentNode.classList.add("newsletter__input__field-invalid");
      document
        .querySelector(".newsletter__input__field__error")
        .classList.add("newsletter__input__field__error-active");
    } else {
      document
        .getElementById("newsletter")
        .classList.remove("newsletter__input-invalid");
      document
        .getElementById("newsletter")
        .parentNode.classList.remove("newsletter__input__field-invalid");
      document
        .querySelector(".newsletter__input__field__error")
        .classList.remove("newsletter__input__field__error-active");
    }
  };

  const onType = (e) => {
    onValidate();
    setInputValue(e.target.value);
  };

  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  useEffect(() => {
    const obj = document.getElementById("value");
    animateValue(obj, 35000, 0, 20000);
  }, []);
  return (
    <section className="newsletter__wrapper">
      <div className="newsletter__content">
        <p className="newsletter__amount">
          <span id="value">35000</span>+ Already Joined
        </p>
        <h3 className="newsletter__title">
          Stay up-to-date with what we're doing
        </h3>
        <form className="newsletter__input__form">
          <div className="newsletter__input__field">
            <input
              type="email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              name="newsletter"
              id="newsletter"
              value={inputValue}
              onChange={onType}
              placeholder="Enter your email adress"
            />
            <span className="newsletter__input__field__error">
              Whoops, make sure it's an email.
            </span>
          </div>
          <button
            onClick={onValidate}
            type="submit"
            className="btn__orange newsletter__btn"
          >
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
}

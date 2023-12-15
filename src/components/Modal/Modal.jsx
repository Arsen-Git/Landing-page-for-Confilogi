import "../../global.scss";
import "./Modal.scss";

import { useState, useEffect } from "react";

export default function Modal() {
  const [modalOpen, setModalOpen] = useState(false);

  const onCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setModalOpen(true);
    }, 30000);
    document.addEventListener("mousemove", (e) => {
      if (e.screenY <= 115) {
        setModalOpen(true);
      }
    });
  }, []);

  return (
    <div
      className={modalOpen ? "modal__wrapper modal-active" : "modal__wrapper"}
    >
      <div className="modal__content">
        <figure onClick={onCloseModal} className="modal__exit">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15">
            <path
              fill="#000"
              fillRule="evenodd"
              d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"
            />
          </svg>
        </figure>
        <p className="modal__title">Easy Sharing</p>
        <p className="modal__subtitle">Share your bookmarks</p>
        <p className="modal__text">
          Easily share your bookmarks and collections with others. Create a
          shareable link that you can send at the click of button.
        </p>
        <button className="btn__standart modal__btn">More Info</button>
      </div>
    </div>
  );
}

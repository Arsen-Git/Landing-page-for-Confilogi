import "./FeaturesTabs.scss";
import "../../global.scss";

import tab1 from "../../assets/illustration-features-tab-1.svg";
import tab2 from "../../assets/illustration-features-tab-2.svg";
import tab3 from "../../assets/illustration-features-tab-3.svg";

import { useState, useEffect } from "react";

export default function FeaturesTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      name: "Simple Bookmarking",
      title: "Bookmark in one click",
      text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      img: tab1,
    },
    {
      id: 1,
      name: "Speedy Searching",
      title: "Intelligent search",
      text: "Our powerful search feature will help you find saved sites in no time at all. No need to wrawl through all of your bookmarks.",
      img: tab2,
    },
    {
      id: 2,
      name: "Easy Sharing",
      title: "Share your bookmarks",
      text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of button.",
      img: tab3,
    },
  ];

  const changeActiveTab = (id) => {
    setActiveTab(id);
    localStorage.setItem("activeTab", id.toString());
  };

  useEffect(() => {
    const storageId = localStorage.getItem("activeTab");
    setActiveTab(storageId ? +storageId : 0);
  }, []);
  return (
    <section className="tabs__container">
      <menu className="tabs__menu">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={
              activeTab === tab.id
                ? "tabs__menu__item tabs__menu__item-active"
                : "tabs__menu__item"
            }
            onClick={() => changeActiveTab(tab.id)}
          >
            {tab.name}
          </li>
        ))}
      </menu>
      <div className="section__container tabs__content">
        <figure className="tabs__img">
          <img loading="lazy" src={tabs[activeTab].img} alt="Feature" />
        </figure>
        <div className="tabs__info">
          <h1 className="tabs__title">{tabs[activeTab].title}</h1>
          <p className="section__text">{tabs[activeTab].text}</p>
          <div className="tabs__btns">
            <button className="btn__standart">More Info</button>
          </div>
        </div>
      </div>
      <div className="decor decor-left"></div>
    </section>
  );
}

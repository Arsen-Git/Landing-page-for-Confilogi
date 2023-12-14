import "./ExtensionList.scss";

import chromeImg from "../../assets/logo-chrome.svg";
import firefoxImg from "../../assets/logo-firefox.svg";
import operaImg from "../../assets/logo-opera.svg";

import ExtensionCard from "../ExtensionCard/ExtensionCard";

export default function ExtensionList() {
  const extensions = [
    { id: 0, img: chromeImg, title: "Chrome", versionText: "62" },
    { id: 1, img: firefoxImg, title: "Firefox", versionText: "55" },
    { id: 2, img: operaImg, title: "Opera", versionText: "46" },
  ];
  return (
    <ul className="ext__list">
      {extensions.map((ext) => (
        <ExtensionCard
          key={ext.id}
          img={ext.img}
          title={ext.title}
          versionText={ext.versionText}
        />
      ))}
    </ul>
  );
}

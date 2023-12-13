import "./App.scss";

import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import FeaturesTabs from "../FeaturesTabs/FeaturesTabs";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="section__info">
        <h2 className="section__title">Features</h2>
        <p className="section__text section__text-centered">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices <br /> so you can
          access them on the go.
        </p>
      </div>
      <FeaturesTabs />
    </>
  );
}

export default App;

import "./App.scss";

import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import FeaturesTabs from "../FeaturesTabs/FeaturesTabs";
import ExtensionList from "../ExtensionList/ExtensionList";
import SectionTopic from "../SectionTopic/SectionTopic";
import FaqList from "../FaqList/FaqList";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <SectionTopic
        title={"Features"}
        text={`Our aim is to make it quick and easy for you to access your \n favourite websites. Your bookmarks sync between your devices \n so you can access them on the go.`}
      />
      <FeaturesTabs />
      <SectionTopic
        title={"Download the extension"}
        text={`We've got more browsers in the pipeline. Please do let us know if
        you've got a favourite you'd like us to prioritize.`}
      />
      <ExtensionList />
      <SectionTopic
        title={"Frequently Asked Questions"}
        text={`Here are some of our FAQs. If tou have any other questions \n you'd like answered please feel free to email us.`}
      />
      <FaqList />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;

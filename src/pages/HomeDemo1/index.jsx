import "./style/HomeDemo1.scss";

import {
  SingleCoolFact,
  timelineInfo,
  ServiceBlock,
} from "../../data/data-containers/data-HomeDemo1.js";

import Footer from "../../layouts/FooterPages";
import Header from "../../layouts/Header";

import SecOurRoadmap from "./SecOurRoadmap";
import SecOurFeatures from "./SecOurFeatures";
import SecTrust from "./SecTrust";
import SecWelcomeArea from "./SecWelcomeArea";

let HomeDemo1 = () => {
  return (
    <>
      <Header />
      <div className="HomeDemo1">
        <div className="w-full h-screen fixed top-0 left-0">
          <video
            src="/assets/videos/bg.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          ></video>
        </div>
        <SecWelcomeArea />
        <SecTrust data={SingleCoolFact} />
        <SecOurRoadmap data={timelineInfo} />
        <SecOurFeatures data={ServiceBlock} img={"/assets/images/contact.png"} />
      </div>
      <Footer />
    </>
  );
};

export default HomeDemo1;

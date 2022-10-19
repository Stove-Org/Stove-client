import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import gengLogo from "../../../assets/img/LCKTeamLogo/geng.png";
import t1Logo from "../../../assets/img/LCKTeamLogo/t1.png";
import sandboxLogo from "../../../assets/img/LCKTeamLogo/sandbox.png";
import dkLogo from "../../../assets/img/LCKTeamLogo/dk.png";
import ktLogo from "../../../assets/img/LCKTeamLogo/kt.png";
import drxLogo from "../../../assets/img/LCKTeamLogo/drx.png";
import kwangdongLogo from "../../../assets/img/LCKTeamLogo/kwangdong.png";
import nongShimLogo from "../../../assets/img/LCKTeamLogo/nongShim.png";
import freditLogo from "../../../assets/img/LCKTeamLogo/fredit.png";
import hanwhaLogo from "../../../assets/img/LCKTeamLogo/hanwha.png";

const SliderLCKLogo = () => {
  const state = {
    responsive: {
      0: {
        items: 3,
        margin: 100,
      },
      768: {
        items: 5,
        margin: 100,
      },
      1080: {
        items: 6,
        margin: 120,
      },
    },
  };

  return (
    <div>
      <OwlCarousel
        className="owl-theme"
        items={6}
        loop={true}
        nav={false}
        dots={false}
        margin={state.responsive}
        autoplay={true}
        autoplayTimeout={2200}
        autoplaySpeed={2200}
        autoplayHoverPause={true}
        slideTransition="linear"
        responsive={state.responsive}
      >
        <a href="https://geng.gg/" target={"_blank"} rel="noopener noreferrer">
          <img src={gengLogo} alt="LCK ProTeam GEN.G logo" />
        </a>
        <a href="https://t1.gg/" target={"_blank"} rel="noopener noreferrer">
          <img src={t1Logo} alt="LCK ProTeam T1 logo" />
        </a>
        <a
          href="https://www.sandbox.co.kr/esports"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <img src={sandboxLogo} alt="LCK ProTeam Liiv SANDBOX logo" />
        </a>
        <a
          href="https://dwgkia.gg/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <img src={dkLogo} alt="LCK ProTeam DWG KIA logo" />
        </a>
        <a
          href="http://kt-sports.co.kr/sports/site/main.do"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <img src={ktLogo} alt="LCK ProTeam kt Rolster logo" />
        </a>
        <a href="https://drx.gg/" target={"_blank"} rel="noopener noreferrer">
          <img src={drxLogo} alt="LCK ProTeam DRX logo" />
        </a>
        <a href="http://freecs.gg/" target={"_blank"} rel="noopener noreferrer">
          <img src={kwangdongLogo} alt="LCK ProTeam KWANGDONG FREECS logo" />
        </a>
        <a
          href="https://www.ns-esports.com/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <img src={nongShimLogo} alt="LCK ProTeam NongShim REDFORCE logo" />
        </a>
        <a
          href="https://brionesports.gg/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <img src={freditLogo} alt="LCK ProTeam Fredit BRION logo" />
        </a>
        <a href="https://hle.kr/" target={"_blank"} rel="noopener noreferrer">
          <img src={hanwhaLogo} alt="LCK ProTeam Hanwha Life Esports logo" />
        </a>
      </OwlCarousel>
    </div>
  );
};

export default SliderLCKLogo;

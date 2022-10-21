import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import gengLogo from "../../../assets/img/LCKTeamLogo/GEN.png";
import t1Logo from "../../../assets/img/LCKTeamLogo/T1.png";
import sandboxLogo from "../../../assets/img/LCKTeamLogo/LSB.png";
import dkLogo from "../../../assets/img/LCKTeamLogo/DK.png";
import ktLogo from "../../../assets/img/LCKTeamLogo/KT.png";
import drxLogo from "../../../assets/img/LCKTeamLogo/DRX.png";
import kwangdongLogo from "../../../assets/img/LCKTeamLogo/KDF.png";
import nongShimLogo from "../../../assets/img/LCKTeamLogo/NS.png";
import freditLogo from "../../../assets/img/LCKTeamLogo/BRO.png";
import hanwhaLogo from "../../../assets/img/LCKTeamLogo/HLE.png";

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

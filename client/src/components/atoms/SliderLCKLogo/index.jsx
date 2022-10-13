import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

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
          <img
            src={process.env.PUBLIC_URL + "assets/img/LCKTeamLogo/geng.png"}
            alt="LCK ProTeam GEN.G logo"
          />
        </a>
        <a href="https://t1.gg/" target={"_blank"} rel="noopener noreferrer">
          <img
            src={process.env.PUBLIC_URL + "assets/img/LCKTeamLogo/t1.png"}
            alt="LCK ProTeam T1 logo"
          />
        </a>
        <a
          href="https://www.sandbox.co.kr/esports"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <img
            src={process.env.PUBLIC_URL + "assets/img/LCKTeamLogo/sandbox.png"}
            alt="LCK ProTeam Liiv SANDBOX logo"
          />
        </a>
        <a
          href="https://dwgkia.gg/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <img
            src={process.env.PUBLIC_URL + "assets/img/LCKTeamLogo/dk.png"}
            alt="LCK ProTeam DWG KIA logo"
          />
        </a>
        <a
          href="http://kt-sports.co.kr/sports/site/main.do"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <img
            src={process.env.PUBLIC_URL + "assets/img/LCKTeamLogo/kt.png"}
            alt="LCK ProTeam kt Rolster logo"
          />
        </a>
        <a href="https://drx.gg/" target={"_blank"} rel="noopener noreferrer">
          <img
            src={process.env.PUBLIC_URL + "assets/img/LCKTeamLogo/drx.png"}
            alt="LCK ProTeam DRX logo"
          />
        </a>
        <a href="http://freecs.gg/" target={"_blank"} rel="noopener noreferrer">
          <img
            src={
              process.env.PUBLIC_URL + "assets/img/LCKTeamLogo/kwangdong.png"
            }
            alt="LCK ProTeam KWANGDONG FREECS logo"
          />
        </a>
        <a
          href="https://www.ns-esports.com/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <img
            src={process.env.PUBLIC_URL + "assets/img/LCKTeamLogo/nongShim.png"}
            alt="LCK ProTeam NongShim REDFORCE logo"
          />
        </a>
        <a
          href="https://brionesports.gg/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <img
            src={process.env.PUBLIC_URL + "assets/img/LCKTeamLogo/fredit.png"}
            alt="LCK ProTeam Fredit BRION logo"
          />
        </a>
        <a href="https://hle.kr/" target={"_blank"} rel="noopener noreferrer">
          <img
            src={process.env.PUBLIC_URL + "assets/img/LCKTeamLogo/hanwha.png"}
            alt="LCK ProTeam Hanwha Life Esports logo"
          />
        </a>
      </OwlCarousel>
    </div>
  );
};

export default SliderLCKLogo;

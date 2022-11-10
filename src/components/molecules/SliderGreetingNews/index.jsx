import React from "react";
import styled from "styled-components";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useSelector } from "react-redux";

import GreetingNews from "./GreetingNews";

const SliderGreetingNews = () => {
  const hotNews = useSelector((state) => {
    if (state.news.hotNews !== null) {
      return state.news.hotNews;
    }
  });

  const state = {
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 4,
      },
      1080: {
        items: 4,
      },
    },
  };

  return (
    <SliderGreetingNewsWrapper>
      <OwlCarousel
        className="owl-theme"
        items={4}
        loop={true}
        nav={true}
        navText={["<", ">"]}
        dots={false}
        margin={20}
        autoplay={false}
        slidetransition="linear"
        responsive={state.responsive}
      >
        {hotNews ? (
          hotNews.map((item) => {
            return (
              <div key={item.id}>
                <GreetingNews item={item} />
              </div>
            );
          })
        ) : (
          <></>
        )}
      </OwlCarousel>
    </SliderGreetingNewsWrapper>
  );
};

const SliderGreetingNewsWrapper = styled.div`
  position: relative;

  .owl-nav {
    margin: 0;
    padding: 0;
  }

  .owl-carousel > .owl-nav > button.owl-prev,
  .owl-carousel > .owl-nav > button.owl-next {
    position: absolute;
    top: 80px;
    width: 40px;
    height: 40px;
    background-color: ${(props) => props.theme.color.white};
    border-radius: 50%;
    margin: 0;
    color: ${(props) => props.theme.color.grayScale.gray60};
    box-shadow: rgba(0 0 0 / 13%) 0px 2px 4px 0px;
    font-size: 18px;
  }

  .owl-nav > button.owl-prev:hover,
  .owl-nav > button.owl-next:hover {
    color: ${(props) => props.theme.color.black};
    background-color: ${(props) => props.theme.color.white};
  }

  .owl-nav > button.owl-prev {
    left: -20px;
    background-color: ${(props) => props.theme.color.white};
  }
  .owl-nav > button.owl-next {
    right: -20px;
    background-color: ${(props) => props.theme.color.white};
  }
`;

export default SliderGreetingNews;

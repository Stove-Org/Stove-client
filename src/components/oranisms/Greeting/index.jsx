import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../atoms/Button";
import SliderLCKLogo from "../../molecules/SliderLCKLogo";
import bannerImg from "../../../assets/img/banner_2022_worlds.jpg";
import { useEffect } from "react";
import { getHotNews } from "../../../api/news";
import { useDispatch } from "react-redux";
import { setHotNews } from "../../../reducers/newsSlice";
import SliderGreetingNews from "../../molecules/SliderGreetingNews";
import NextLCKRanking from "../../molecules/NextLCKRanking";

const Greeting = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getHotNews().then((res) => {
      dispatch(setHotNews(res.data));
    });
  }, []);

  return (
    <GreetingWrapper>
      <Banner>
        <BannerBgImg src={bannerImg} alt="2022 LCK Final" />
        <BannerFilter />
        <BannerTextWrapper>
          <p>Next LCK 2023</p>
          <p>LCK 팀들의 다음 시즌 로스터를 맞춰보세요!</p>
          <p>Who's next LCK?</p>
        </BannerTextWrapper>
        <Button
          text={"바로가기 >"}
          styleType={"primary"}
          onClick={() => navigate("/nextlck")}
        />
      </Banner>
      <ContentsWrapper>
        <Content>
          <NewsContentHead>
            <h4>2023 LCK 이적시장 살펴보기</h4>
            <Link to="/news">뉴스 더보기 ></Link>
          </NewsContentHead>
          <SliderGreetingNews />
        </Content>
        <Content>
          <h4>Next LCK 실시간 순위</h4>
          <NextLCKRanking />
        </Content>
        <Content>
          <h4>LCK 프랜차이즈 팀</h4>
          <SliderLCKLogo />
        </Content>
      </ContentsWrapper>
    </GreetingWrapper>
  );
};

const ContentsWrapper = styled.article`
  margin: 40px 0 0;
`;

const Content = styled.section`
  margin: 0 20px 40px;

  & > h4,
  & > div > h4 {
    ${(props) => props.theme.typography.headRgBold};
    padding: 0 0 20px;
    span {
      color: ${(props) => props.theme.color.main100};
    }
  }

  @media screen and (min-width: 768px) {
    margin: 0 0 40px;

    & > h4,
    & > div > h4 {
      ${(props) => props.theme.typography.headMd};
    }
  }
`;

const GreetingWrapper = styled.div`
  width: 100%;
`;
const Banner = styled.article`
  position: relative;
  height: 200px;
  overflow: hidden;
  background-color: ${(props) => props.theme.color.grayScale.gray20};

  & > button {
    position: absolute;
    top: 102px;
    left: 20px;
  }

  @media screen and (min-width: 768px) {
    height: 260px;
    & > button {
      top: 173px;
      left: 60px;
    }
  }
  @media screen and (min-width: 1080px) {
    height: 380px;

    & > button {
      top: 224px;
      left: 100px;
    }
  }
`;
const BannerBgImg = styled.img`
  width: 100%;
  position: absolute;
  left: auto;
  right: auto;
  @media screen and (min-width: 768px) {
    top: -69px;
  }
  @media screen and (min-width: 1080px) {
    top: -94px;
  }
`;
const BannerFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
`;
const BannerTextWrapper = styled.div`
  color: ${(props) => props.theme.color.white};
  position: absolute;
  top: 20px;
  left: 20px;

  p {
    ${(props) => props.theme.typography.bodySmRegular};
  }
  p:first-child {
    ${(props) => props.theme.typography.headRgBold};
    padding-bottom: 14px;
  }

  @media screen and (min-width: 768px) {
    top: 44px;
    left: 60px;

    p {
      ${(props) => props.theme.typography.headTablet};
      line-height: 1.5;
    }
    p:first-child {
      ${(props) => props.theme.typography.headBoldablet};
      padding-bottom: 14px;
    }
  }
  @media screen and (min-width: 1080px) {
    top: 54px;
    left: 100px;

    p {
      ${(props) => props.theme.typography.head};
      line-height: 1.5;
    }
    p:first-child {
      ${(props) => props.theme.typography.headBold};
      padding-bottom: 14px;
    }
  }
`;

const NewsContentHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  & > a {
    padding-bottom: 20px;
    ${(props) => props.theme.typography.bodySmRegular};
    color: ${(props) => props.theme.color.grayScale.gray60};
  }
`;

export default Greeting;

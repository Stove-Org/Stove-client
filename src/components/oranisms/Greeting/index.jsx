import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../atoms/Button";
import SliderLCKLogo from "../../molecules/SliderLCKLogo";
import bannerImg from "../../../assets/img/banner_2022LCKFinal.jpg";

const Greeting = () => {
  const navigate = useNavigate();

  return (
    <GreetingWrapper>
      <Banner>
        <BannerBgImg src={bannerImg} alt="2022 LCK Final" />
        <BannerTextWrapper>
          <p>Who's next LCK?</p>
          <p>LCK 팀들의 다음 시즌 로스터를 맞춰보세요!</p>
          <p>~11/31(목) 마감</p>
        </BannerTextWrapper>
        <Button
          text={"바로가기 >"}
          styleType={"primary"}
          onClick={() => navigate("/nextlck")}
        />
      </Banner>
      <ContentsWrapper>
        <Content>
          <h4>2023 LCK 이적시장 살펴보기</h4>
          <div>들어갈곳입니다</div>
        </Content>
        <Content>
          <h4>Next LCK 실시간 순위</h4>
          <div>들어갈곳입니다</div>
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

  & > h4 {
    ${(props) => props.theme.typography.headRgBold};
    padding: 0 0 20px;
    span {
      color: ${(props) => props.theme.color.main100};
    }
  }

  @media screen and (min-width: 768px) {
    margin: 0 0 40px;

    & > h4 {
      ${(props) => props.theme.typography.headMd};
    }
  }
`;

const GreetingWrapper = styled.div`
  width: 100%;
`;
const Banner = styled.article`
  position: relative;
  height: 260px;
  overflow: hidden;
  background-color: ${(props) => props.theme.color.grayScale.gray20};

  & > button {
    position: absolute;
    top: 0;
    left: 0;
  }

  @media screen and (min-width: 768px) {
    & > button {
      top: 173px;
      left: 100px;
    }
  }
  @media screen and (min-width: 1080px) {
    height: 340px;

    & > button {
      top: 224px;
      left: 160px;
    }
  }
`;
const BannerBgImg = styled.img`
  width: 100%;
  position: static;
  top: -60px;
  left: auto;
  right: auto;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1080px) {
    position: absolute;
  }
`;
const BannerTextWrapper = styled.div`
  color: ${(props) => props.theme.color.white};
  position: absolute;
  top: 0;
  left: 0;

  p {
    ${(props) => props.theme.typography.bodySmRegular};
  }
  p:first-child {
    ${(props) => props.theme.typography.headRgBold};
    padding-bottom: 14px;
  }

  @media screen and (min-width: 768px) {
    top: 44px;
    left: 100px;

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
    left: 160px;

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

export default Greeting;

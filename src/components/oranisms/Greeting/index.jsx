import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../atoms/Button";
import SliderLCKLogo from "../../molecules/SliderLCKLogo";
import bannerImg from "../../../assets/img/banner_2022LCKFinal.jpg";
import { useEffect } from "react";
import { getHotNews } from "../../../api/news";
import { useDispatch } from "react-redux";
import { setHotNews } from "../../../reducers/newsSlice";
import SliderGreetingNews from "../../molecules/SliderGreetingNews";

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
          <NewsContentHead>
            <h4>2023 LCK 이적시장 살펴보기</h4>
            <Link to="/news">뉴스 더보기 ></Link>
          </NewsContentHead>
          <SliderGreetingNews />
        </Content>
        <Content>
          <h4>Next LCK 실시간 순위</h4>
          <Grid>
            <GridFirst>
              <select name="team" id="team">
                <option value="volvo">Gen.G</option>
                <option value="saab">T1</option>
                <option value="opel">DRX</option>
                <option value="audi">DWG KIA</option>
                <option value="audi">리브 샌드박스</option>
                <option value="audi">KT Rolster</option>
                <option value="audi">광동 프릭스</option>
                <option value="audi">농심 레드포스</option>
                <option value="audi">프레딧 브리온</option>
                <option value="audi">한화 e스포츠</option>
              </select>
            </GridFirst>
            <GridSec>
              <button>탑</button>
              <button>정글</button>
              <button>미드</button>
              <button>바텀</button>
              <button>서포터</button>
            </GridSec>
            <GridThird>
              <div>Top1 Doran 89.6% (선수 이미지 url)</div>
              <div>Top2 AAAAA 5.0% (선수 이미지 url)</div>
              <div>Top3 BBBBB 3.3% (선수 이미지 url)</div>
              <div>Top4 CCCCC 2.0% (선수 이미지 url)</div>
              <div>Top5 DDDDD 0.1% (선수 이미지 url)</div>
            </GridThird>
          </Grid>
        </Content>
        <Content>
          <h4>LCK 프랜차이즈 팀</h4>
          <SliderLCKLogo />
        </Content>
      </ContentsWrapper>
    </GreetingWrapper>
  );
};

const Grid = styled.div`
  display: flex;
  ${(props) => props.theme.typography.headRg};

  & > div + div {
    margin-left: 20px;
  }

  & > div > * {
    padding: 10px;
  }

  & > div > button {
    display: flex;
    flex-direction: column;
    width: 200px;
    border: none;
    border-radius: 3px;
    background-color: ${(props) => props.theme.color.grayScale.gray10};
    cursor: pointer;
  }
  & > div > button + button {
    margin-top: 10px;
  }
  & > div > button:first-child {
    background-color: ${(props) => props.theme.color.grayScale.gray30};
  }
`;

const GridFirst = styled.div`
  width: 200px;
`;
const GridSec = styled.div`
  width: 300px;
`;
const GridThird = styled.div`
  flex-grow: 1;
  & > div + div {
    margin-top: 10px;
  }
`;

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

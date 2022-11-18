import styled from "styled-components";
import { postCountView } from "../../../api/news";
import RestHotNews from "./RestHotNews";

const HotNewsLayout = ({ firstHotNews, hotNews }) => {
  const handleAddCountView = async () => {
    try {
      await postCountView(firstHotNews.id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <HotNewsWrapper>
      {firstHotNews ? (
        <HotNewsInnerWrapper>
          <FirstHotNews
            href={hotNews[0].linkUrl}
            target={"_blank"}
            rel="noopener noreferrer"
            onClick={handleAddCountView}
          >
            {firstHotNews.imgUrl ? (
              <FirstHotImgUrl
                style={{ backgroundImage: `url(${firstHotNews.imgUrl})` }}
              />
            ) : (
              <DefaultFirstHotImgUrl />
            )}
            <FirstHotNewsHeadline>
              <FirstHeadline>{firstHotNews.headline}</FirstHeadline>
              <HeadlineDate>{firstHotNews.uploadedAt}</HeadlineDate>
            </FirstHotNewsHeadline>
          </FirstHotNews>
        </HotNewsInnerWrapper>
      ) : (
        <></>
      )}
      <HotNewsInnerWrapper>
        {/* 매일 클릭수 가장 높은 뉴스 4개 */}
        {hotNews.map((item) => (
          <RestHotNews item={item} key={item.id} />
        ))}
      </HotNewsInnerWrapper>
    </HotNewsWrapper>
  );
};

const HotNewsWrapper = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (min-width: 1080px) {
  }
`;
const HotNewsInnerWrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 50%;

    & + & {
      margin-left: 30px;
    }
  }
  @media screen and (min-width: 1080px) {
  }
`;
const ImageWrapper = styled.div`
  border-radius: 3px;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  background-color: ${(props) => props.theme.color.grayScale.gray20};
`;
const Headline = styled.h4`
  ${(props) => props.theme.typography.headRgBold};
  padding-bottom: 4px;
`;
const HeadlineDate = styled.div`
  ${(props) => props.theme.typography.bodyRg};
  color: ${(props) => props.theme.color.grayScale.gray60};
`;

// First Hot News
const FirstHotNews = styled.a`
  position: relative;

  &::before {
    position: absolute;
    content: "";
    left: 0px;
    bottom: 0px;
    height: 50%;
    width: 100%;
    border-radius: 0 0 3px 3px;
    background: linear-gradient(
      transparent,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
    pointer-events: none;
  }

  &:hover > div > h4 {
    text-decoration: underline;
  }
`;
const FirstHotImgUrl = styled(ImageWrapper)`
  width: 100%;
  height: 100%;
`;
const DefaultFirstHotImgUrl = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  background-color: ${(props) => props.theme.color.grayScale.gray20};
`;
const FirstHotNewsHeadline = styled.div`
  position: absolute;
  padding: 20px;
  bottom: 0;
  left: 0;
`;
const FirstHeadline = styled(Headline)`
  ${(props) => props.theme.typography.headRgBold};
  color: ${(props) => props.theme.color.white};
`;

export default HotNewsLayout;

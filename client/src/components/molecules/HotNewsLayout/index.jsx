import styled from "styled-components";

const HotNewsLayout = ({ firstHotNews, hotNews }) => {
  return (
    <HotNewsWrapper>
      <HotNewsInnerWrapper>
        <FirstHotNewsWrapper
          href={firstHotNews.newsUrl}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <FirstHotNewsImgWrapper
            style={{ backgroundImage: `url(${firstHotNews.newsImg})` }}
          />
          <FirstHotNewsHeadline>
            <FirstHeadline>{firstHotNews.headline}</FirstHeadline>
            <HeadlineDate>{firstHotNews.newsDate}</HeadlineDate>
          </FirstHotNewsHeadline>
        </FirstHotNewsWrapper>
      </HotNewsInnerWrapper>
      <HotNewsInnerWrapper>
        {/* 매일 클릭수 가장 높은 뉴스 4개 */}
        {hotNews.map((el) => (
          <RestHotNewsInnerWrapper
            key={el.id}
            href={el.newsUrl}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <RestHotNewsHeadline>
              <Headline>{el.headline}</Headline>
              <HeadlineDate>{el.newsDate}</HeadlineDate>
            </RestHotNewsHeadline>
            <RestHotNewsImgWrapper
              style={{ backgroundImage: `url(${el.newsImg})` }}
            />
          </RestHotNewsInnerWrapper>
        ))}
      </HotNewsInnerWrapper>
    </HotNewsWrapper>
  );
};

const HotNewsWrapper = styled.div`
  display: flex;
`;
const HotNewsInnerWrapper = styled.div`
  width: 50%;

  & + & {
    margin-left: 30px;
  }
`;
const ImageWrapper = styled.div`
  border-radius: 3px;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
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
const FirstHotNewsWrapper = styled.a`
  position: relative;

  &::before {
    position: absolute;
    content: "";
    left: 0px;
    bottom: 0px;
    height: 50%;
    width: 100%;
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
const FirstHotNewsImgWrapper = styled(ImageWrapper)`
  width: 100%;
  height: 100%;
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

// Rest Hot News
const RestHotNewsInnerWrapper = styled.a`
  display: flex;
  align-items: center;
  padding: 10px 0;

  &:first-child {
    padding-top: 0;
  }

  & + & {
    border-width: 1px 0 0;
    border-style: solid;
    border-color: ${(props) => props.theme.color.grayScale.gray20};
  }

  &:hover > div > h4 {
    text-decoration: underline;
  }
`;
const RestHotNewsHeadline = styled.div`
  flex-grow: 1;
  margin-right: 10px;
  word-break: keep-all;
  overflow-wrap: break-word;
`;
const RestHotNewsImgWrapper = styled(ImageWrapper)`
  min-width: 140px;
  height: 100px;
`;

export default HotNewsLayout;

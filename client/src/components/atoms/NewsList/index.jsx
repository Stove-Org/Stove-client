import styled from "styled-components";

const NewsList = ({ newsUrl, newsImg, headline, newsDate }) => {
  console.log(newsImg);
  return (
    <NewsListWrapper>
      <NewsListInnerWrapper
        href="https://www.sandbox.co.kr/esports"
        target={"_blank"}
        rel="noopener noreferrer"
      >
        <NewsImgWrapper>
          <NewsImg
            newsImg={newsImg}
            style={{ backgroundImage: `url(${newsImg})` }}
          />
        </NewsImgWrapper>
        <NewsHeadline>
          <Headline>{headline}</Headline>
          <NewsDate>{newsDate}</NewsDate>
        </NewsHeadline>
      </NewsListInnerWrapper>
    </NewsListWrapper>
  );
};

const NewsListWrapper = styled.div`
  padding: 10px 0;

  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-width: 1px 0 0;
    border-style: solid;
    border-color: ${(props) => props.theme.color.grayScale.gray20};
  }
`;
const NewsListInnerWrapper = styled.a`
  display: flex;
  align-items: center;

  &:hover > div > h4 {
    text-decoration: underline;
  }
`;
const NewsImgWrapper = styled.div`
  min-width: 152px;
  height: 108px;
`;
const NewsImg = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  border-radius: 3px;
`;
const NewsHeadline = styled.div`
  margin-left: 20px;
`;
const Headline = styled.h4`
  ${(props) => props.theme.typography.headRgBold};
  padding-bottom: 4px;
`;
const NewsDate = styled.div`
  ${(props) => props.theme.typography.bodyRg};
  color: ${(props) => props.theme.color.grayScale.gray60};
`;

export default NewsList;

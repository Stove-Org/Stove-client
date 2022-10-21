import styled from "styled-components";

const NewsList = ({ linkUrl, imgUrl, headline, uploadedAt }) => {
  return (
    <NewsListWrapper>
      <NewsListInnerWrapper
        href="https://www.sandbox.co.kr/esports"
        target={"_blank"}
        rel="noopener noreferrer"
      >
        <ImgUrlWrapper>
          <ImgUrl style={{ backgroundImage: `url(${imgUrl})` }} />
        </ImgUrlWrapper>
        <NewsHeadline>
          <Headline>{headline}</Headline>
          <UploadedAtWapper>{uploadedAt}</UploadedAtWapper>
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
const ImgUrlWrapper = styled.div`
  min-width: 160px;
  height: 100px;
`;
const ImgUrl = styled.div`
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
const UploadedAtWapper = styled.div`
  ${(props) => props.theme.typography.bodyRg};
  color: ${(props) => props.theme.color.grayScale.gray60};
`;

export default NewsList;

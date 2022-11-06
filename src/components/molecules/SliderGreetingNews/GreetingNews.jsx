import styled from "styled-components";

const GreetingNews = ({ item }) => {
  return (
    <GreetingNewsWrapper
      href={item.linkUrl}
      target={"_blank"}
      rel="noopener noreferrer"
    >
      {item.imgUrl ? (
        <NewsImg src={item.imgUrl} alt="뉴스 이미지" />
      ) : (
        <DefaultImg></DefaultImg>
      )}
      <Headline>{item.headline}</Headline>
    </GreetingNewsWrapper>
  );
};

const GreetingNewsWrapper = styled.a`
  display: flex;
  flex-direction: column;
`;

const DefaultImg = styled.div`
  width: 100%;
  height: 160px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.color.grayScale.gray20};
`;
const NewsImg = styled.img`
  width: 100%;
  height: 160px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.color.grayScale.gray20};
`;

const Headline = styled.h1`
  margin-top: 10px;
  ${(props) => props.theme.typography.bodyRg};
`;

export default GreetingNews;

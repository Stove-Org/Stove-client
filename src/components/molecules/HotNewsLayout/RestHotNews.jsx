import styled from "styled-components";
import { postCountView } from "../../../api/news";

const RestHotNews = ({ item }) => {
  const handleAddCountView = async () => {
    try {
      await postCountView(item.id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <RestHotNewsInner
      key={item.id}
      href={item.linkUrl}
      target={"_blank"}
      rel="noopener noreferrer"
      onClick={handleAddCountView}
    >
      <RestHotNewsHeadline>
        <Headline>{item.headline}</Headline>
        <HeadlineDate>{item.uploadedAt}</HeadlineDate>
      </RestHotNewsHeadline>
      <RestHotImgUrl style={{ backgroundImage: `url(${item.imgUrl})` }} />
    </RestHotNewsInner>
  );
};

const Headline = styled.h4`
  ${(props) => props.theme.typography.headRgBold};
  padding-bottom: 4px;
`;
const HeadlineDate = styled.div`
  ${(props) => props.theme.typography.bodyRg};
  color: ${(props) => props.theme.color.grayScale.gray60};
`;

// Rest Hot News
const RestHotNewsInner = styled.a`
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

const ImageWrapper = styled.div`
  border-radius: 3px;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  background-color: ${(props) => props.theme.color.grayScale.gray20};
`;
const RestHotImgUrl = styled(ImageWrapper)`
  min-width: 140px;
  height: 100px;
`;

export default RestHotNews;

import React from "react";
import styled from "styled-components";
import Hashtag from "./Hashtag";

const Hashtags = ({ isEdit, hashtags, setNews }) => {
  return (
    <>
      {hashtags ? (
        hashtags.map((hashtag, index) => {
          return (
            <HashtagsWrapper key={index}>
              <Hashtag
                index={index}
                hashtag={hashtag}
                isEdit={isEdit}
                setNews={setNews}
              />
            </HashtagsWrapper>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};

const HashtagsWrapper = styled.ul`
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Hashtags;

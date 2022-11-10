import styled from "styled-components";

const RankingItem = ({ item }) => {
  return (
    <div>
      {item.progamer ? (
        <RankingItemWrapper>
          <StyleNo>Top {item.ranking}</StyleNo>
          <StyleNickname>{item.progamer.nickname}</StyleNickname>
          <StylePercentWrapper>
            <StylePercent percent={(item.percent * 100).toFixed(1)} />
            <StylePercentText>
              {(item.percent * 100).toFixed(1)}%
            </StylePercentText>
          </StylePercentWrapper>
          <StyleImg
            src={item.progamer.imgUrl}
            alt={`${item.progamer.nickname} 이미지`}
          />
        </RankingItemWrapper>
      ) : (
        <></>
      )}
    </div>
  );
};

const RankingItemWrapper = styled.div`
  ${(props) => props.theme.typography.descriptionBold}
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 48px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 1px 8px 0px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.color.white};
`;
const StyleNo = styled.div`
  color: ${(props) => props.theme.color.main100};
  width: 70px;
`;
const StyleNickname = styled.div`
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const StylePercentWrapper = styled.div`
  position: relative;
  height: 20px;
  margin-left: 10px;
  background-color: ${(props) => props.theme.color.grayScale.gray20};
  flex-grow: 1;
  border-radius: 3px;
`;
const StylePercent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => `${props.percent}%`};
  height: 100%;
  border-radius: 3px;
  background-color: ${(props) => props.theme.color.main100};
`;
const StylePercentText = styled.div`
  ${(props) => props.theme.typography.bodySmRegular}
  position: absolute;
  top: 2px;
  left: 10px;
  color: ${(props) => props.theme.color.white};
`;
const StyleImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 40px;
  height: 56px;
`;

export default RankingItem;

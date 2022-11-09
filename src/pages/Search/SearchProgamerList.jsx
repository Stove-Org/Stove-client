import styled from "styled-components";

const SearchProgamerList = ({ item }) => {
  return (
    <SearchProgamerListWrapper>
      <div>
        <StyleImg src={item.imgUrl} alt={`${item.nickname} 이미지`} />
      </div>
      <StyleText>
        <StyleNickname>{item.nickname}</StyleNickname>
        <StyleDetail>
          <InnerWrapper>
            <div>포지션</div>
            <p>{item.position}</p>
          </InnerWrapper>
          <InnerWrapper>
            <div>이름</div>
            <p>{item.name}</p>
          </InnerWrapper>
          <InnerWrapper>
            <div>생년월일</div>
            <p>{item.birthday}</p>
          </InnerWrapper>
          {item.career.lck || item.career.msi || item.career.worlds ? (
            <InnerWrapper>
              <div>우승경력</div>
              <div>
                {item.career.lck ? <p>lck 우승</p> : <></>}
                {item.career.msi ? <p>msi 우승</p> : <></>}
                {item.career.worlds ? <p>worlds 우승</p> : <></>}
              </div>
              <div>
                {item.career.lck ? <p>{item.career.lck}회</p> : <></>}
                {item.career.msi ? <p>{item.career.msi}회</p> : <></>}
                {item.career.worlds ? <p>{item.career.worlds}회</p> : <></>}
              </div>
            </InnerWrapper>
          ) : (
            <></>
          )}
        </StyleDetail>
      </StyleText>
    </SearchProgamerListWrapper>
  );
};

const SearchProgamerListWrapper = styled.div`
  padding: 20px 0;
  display: flex;

  & + & {
    border-width: 1px 0 0;
    border-style: solid;
    border-color: ${(props) => props.theme.color.grayScale.gray20};
  }
`;
const StyleImg = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  background-color: ${(props) => props.theme.color.grayScale.gray20};
  border-radius: 3px;
`;

const StyleText = styled.div`
  margin-left: 40px;
`;
const StyleDetail = styled.div`
  border-left: 2px solid #f54242;
  padding-left: 10px;

  & > div + div {
    margin-top: 4px;
  }
`;
const StyleNickname = styled.div`
  ${(props) => props.theme.typography.headRgBold};
  margin-bottom: 8px;
`;
const InnerWrapper = styled.div`
  display: flex;
  ${(props) => props.theme.typography.bodySmBold};

  & > div {
    min-width: 80px;
  }
  p {
    ${(props) => props.theme.typography.bodySmRegular};
  }
`;
export default SearchProgamerList;

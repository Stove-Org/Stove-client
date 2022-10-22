import styled from "styled-components";
import { useDrag } from "react-dnd";

import { ItemTypes } from "../../../utils/ItemTypes";
import PositionIcon from "../PositionIcon";

import worldsTrophy from "../../../assets/svg/trophys/worlds.svg";
import msiTrophy from "../../../assets/svg/trophys/msi.svg";
import lckTrophy from "../../../assets/svg/trophys/lck.svg";

const PlayerItem = ({
  imgToggle,
  descriptionToggle,
  id,
  position,
  imgUrl,
  nickName,
  name,
  birthday,
  career,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.PLAYER,
    item: { nickName },
    isDragging(monitor) {
      const item = monitor.getItem();
      return nickName === item.nickName;
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(), //isDragging 변수가 현재 드래깅중인지 아닌지를 리턴해주는 부분
    }),
  }));

  return (
    <DragWrapper ref={drag} isDragging={isDragging}>
      {imgToggle && (
        <PlayerImgBlock>
          <PlayerPosition>{PositionIcon(position)}</PlayerPosition>
          <PlayerImg src={imgUrl} alt={nickName} />
        </PlayerImgBlock>
      )}
      <PlayerDescriptionBlock>
        <PlayerNickname imgToggle={imgToggle}>{nickName}</PlayerNickname>
        {descriptionToggle && (
          <PlayerDescription>
            <div>
              <div>
                {name} ({birthday})
              </div>
            </div>
            <div>
              <div>
                {[...Array(career.worlds)].map((el, idx) => {
                  return (
                    <img key={idx} src={worldsTrophy} alt="Worlds Trophy" />
                  );
                })}
              </div>
              <div>
                {[...Array(career.msi)].map((el, idx) => {
                  return <img key={idx} src={msiTrophy} alt="MSI Trophy" />;
                })}
              </div>
              <div>
                {[...Array(career.lck)].map((el, idx) => {
                  return <img key={idx} src={lckTrophy} alt="LCK Trophy" />;
                })}
              </div>
            </div>
          </PlayerDescription>
        )}
      </PlayerDescriptionBlock>
    </DragWrapper>
  );
};

const DragWrapper = styled.div`
  width: 159px;
  opacity: ${(props) => (props.isDragging ? 0.4 : 1)};
`;

const PlayerBlock = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color.white};
  display: flex;
  flex-direction: column;
`;
const PlayerImgBlock = styled(PlayerBlock)`
  padding: 20px 0 0;
  border-radius: 3px 3px 0 0;
  position: relative;
  background: rgb(255, 190, 190);
  background: linear-gradient(
    225deg,
    rgba(255, 190, 190, 1) 0%,
    rgba(245, 66, 66, 1) 100%
  );
`;
const PlayerDescriptionBlock = styled(PlayerBlock)`
  padding: 0 10px 10px;
  border-radius: ${(props) => (props.imgToggle ? "0 0 3px 3px" : "3px")};
`;
const PlayerPosition = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;
const PlayerImg = styled.img`
  width: 100%;
`;
const PlayerNickname = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.black};
  padding: ${(props) => (props.imgToggle ? "5px 0 0" : "10px 0 0")};
  text-align: center;
  ${(props) => props.theme.typography.bodySmBold};
`;
const PlayerDescription = styled.div`
  ${(props) => props.theme.typography.bodySmRegular};
  border-width: 1px 0 0;
  border-style: solid;
  border-color: ${(props) => props.theme.color.main60};
  padding-top: 8px;
  margin-top: 5px;

  & > div + div {
    margin-top: 8px;
  }
`;

export default PlayerItem;

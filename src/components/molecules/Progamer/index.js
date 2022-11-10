import styled from "styled-components";
import { useDrag, useDrop } from "react-dnd";
import update from "immutability-helper";

import { ItemTypes } from "../../../utils/ItemTypes";
import PositionIcon from "../../atoms/PositionIcon";

import worldsTrophy from "../../../assets/svg/trophys/worlds.svg";
import msiTrophy from "../../../assets/svg/trophys/msi.svg";
import lckTrophy from "../../../assets/svg/trophys/lck.svg";

const Progamer = ({
  nickname,
  birthday,
  alias,
  career,
  id,
  imgUrl,
  name,
  position,
  imgToggle,
  descriptionToggle,
  rosters,
  setRosters,
  setProgamers,
  progamers,
}) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.PLAYER,
      item: { nickname, birthday, alias, career, id, imgUrl, name, position },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(), //isDragging 변수가 현재 드래깅중인지 아닌지를 리턴해주는 부분
      }),
    }),
    [nickname]
  );

  const handleProgamerDrop = (item) => {
    // console.log(item.nickname, nickname);
    // item은 내가 drag중인 선수
    // 그냥 nickname은 로스터에 이미 등록되어있는, 내가 drop하려는 자리의 선수

    const currentInRoster = rosters.find((roster) => {
      if (roster.progamer) {
        return roster.progamer.nickname === nickname;
      }
    });
    const inRoster = rosters.find((roster) => {
      if (roster.progamer) {
        return roster.progamer.nickname === item.nickname;
      }
    });

    if (currentInRoster) {
      if (inRoster) {
        // 로스터에 drop된 선수일 경우
        // 1. 로스터에 drop되어 있는 선수와 Change
        const currnetIndex = rosters.findIndex(
          (roster) =>
            roster.team === currentInRoster.team &&
            roster.position === currentInRoster.position
        );
        const changeIndex = rosters.findIndex(
          (roster) =>
            roster.team === inRoster.team &&
            roster.position === inRoster.position
        );

        setRosters(
          update(rosters, {
            [currnetIndex]: {
              progamer: {
                $set: inRoster.progamer,
              },
            },
            [changeIndex]: {
              progamer: {
                $set: null,
              },
            },
          })
        );
      } else {
        // 리스트에 있는 선수일 경우
      }

      // 📌 Drop할 때 이전 게이머 제거하고 현재 드랍된 게이머 리스트에 추가하기 📌
      // 1. progamers useState 배열에 드랍하는 nickname을 제외하고 새 배열에 담는다.
      let newProgamers = progamers.filter(
        (item) => item.nickname !== inRoster.progamer.nickname
      );
      // 2. progamer가 null이 아닌 경우
      //    Drop하는 로스터 포지션의 이전 progamer 정보를 새 배열에 push 한다
      if (inRoster !== null) {
        newProgamers.push(currentInRoster.progamer);
      }

      const sortedProgamers = newProgamers.sort((a, b) => {
        if (a.nickname > b.nickname) return 1;
        if (a.nickname < b.nickname) return -1;
        return 0;
      });
      // 3. set함수로 [UPDATE] 해준다.
      setProgamers(sortedProgamers);
    }
  };

  const [, drop] = useDrop({
    accept: ItemTypes.PLAYER,
    drop: handleProgamerDrop,
  });

  return (
    <DragWrapper
      ref={(node) => drag(drop(node))}
      isDragging={isDragging}
      data-testid="box"
    >
      {imgToggle && (
        <PlayerImgBlock>
          <PlayerPosition>{PositionIcon(position)}</PlayerPosition>
          <PlayerImg src={imgUrl} alt={nickname} />
        </PlayerImgBlock>
      )}
      <PlayerDescriptionBlock>
        <Playernickname imgToggle={imgToggle}>{nickname}</Playernickname>
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
  opacity: ${(props) => (props.isDragging ? 0.4 : 1)};
`;

const PlayerBlock = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color.white};
  display: flex;
  flex-direction: column;
`;
const PlayerImgBlock = styled(PlayerBlock)`
  height: 150px;
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
  height: 100%;
  object-fit: cover;
`;
const Playernickname = styled.div`
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

export default Progamer;

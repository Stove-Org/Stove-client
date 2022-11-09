import styled from "styled-components";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../../utils/ItemTypes";

import Progamer from "../Progamer";

const Roster = ({
  progamer,
  teamName,
  position,
  onDrop,
  imgToggle,
  descriptionToggle,
}) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.PLAYER,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = isOver && canDrop;
  //isOver는 Drop가능한곳에 올려놨을때
  //canDrop은 마우스로 잡고있을때

  return (
    <div ref={drop} data-testid="dustbin">
      {/* {isActive ? "여기에 마우스 올렸어" : `${teamName}-${position}`} */}

      {progamer ? (
        // <p>Last dropped: {JSON.stringify(progamer)}</p>
        <Progamer
          alias={progamer.alias}
          nickname={progamer.nickname}
          birthday={progamer.birthday}
          career={progamer.career}
          id={progamer.id}
          imgUrl={progamer.imgUrl}
          name={progamer.name}
          position={progamer.position}
          imgToggle={imgToggle}
          descriptionToggle={descriptionToggle}
        />
      ) : (
        <FalsePositionBlock
          imgToggle={imgToggle}
          descriptionToggle={descriptionToggle}
          ref={drop}
          isActive={isActive}
        >
          <p>{position}</p>
        </FalsePositionBlock>
      )}
    </div>
  );
};

const FalsePositionBlock = styled.div`
  height: ${(props) =>
    props.imgToggle ? "100%" : props.descriptionToggle ? "100%" : "36.5px"};
  align-self: center;
  border-radius: 3px;
  background-color: ${(props) => props.theme.color.grayScale.gray20};
  ${(props) => props.theme.typography.bodySmBold};
  color: ${(props) => props.theme.color.grayScale.gray60};
  border-width: 1px;
  border-style: dashed;
  border-color: ${(props) => props.theme.color.grayScale.gray60};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Roster;

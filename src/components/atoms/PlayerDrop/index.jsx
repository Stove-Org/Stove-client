import styled from "styled-components";
import { useDrop } from "react-dnd";

import { ItemTypes } from "../../../utils/ItemTypes";

const PlayerDrop = ({
  imgToggle,
  descriptionToggle,
  position,
  teamName,
  players,
}) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.PLAYER,
    drop: () => ({ name: `${teamName}_${position}` }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <FalsePositionBlock
      imgToggle={imgToggle}
      descriptionToggle={descriptionToggle}
      ref={drop}
    >
      {position}
    </FalsePositionBlock>
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
`;

export default PlayerDrop;

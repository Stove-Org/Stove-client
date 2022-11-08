import { useDrop } from "react-dnd";
import { ItemTypes } from "../../../utils/ItemTypes";

import Progamer from "../Progamer";

const style = {
  height: "12rem",
  width: "12rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  color: "white",
  padding: "1rem",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "normal",
  float: "left",
};

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

  let backgroundColor = "#222";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }
  return (
    <div ref={drop} style={{ ...style, backgroundColor }} data-testid="dustbin">
      {isActive ? "여기에 마우스 올렸어" : `${teamName}-${position}`}

      {progamer && (
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
      )}
    </div>
  );
};

export default Roster;

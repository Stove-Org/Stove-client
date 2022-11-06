import { useDrag } from "react-dnd";

import { ItemTypes } from "../../../utils/ItemTypes";

const style = {
  border: "1px dashed gray",
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  cursor: "move",
  float: "left",
  color: "#000000",
};

const Progamer = ({ nickname, birthday }) => {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type: ItemTypes.PLAYER,
      item: { nickname, birthday },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [nickname]
  );

  return (
    <div ref={drag} style={{ ...style, opacity }} data-testid="box">
      {nickname}
    </div>
  );
};

export default Progamer;

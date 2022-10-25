import { useState } from "react";
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

const Progamer = ({ nickName, birthday }) => {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type: ItemTypes.PLAYER,
      item: { nickName, birthday },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [nickName]
  );

  return (
    <div ref={drag} style={{ ...style, opacity }} data-testid="box">
      {nickName}
    </div>
  );
};

export default Progamer;

import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 5px;
  background-color: ${(props) =>
    props.isDragging ? "#DEECFF" : props.theme.cardColor};
  //  props.isDragging ? "#E3FCEF" : props.theme.cardColor}; #DEECFF
  /* border: ${(props) => (props.isDragging ? "1px" : "none")}; */
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0,0,0,0.05)" : "none"};
  border: ${(props) =>
    props.isDragging ? "solid 2px rgba(0,0,0,0.3)" : "none"};
`;

interface IDraggableCardProps {
  toDo: string;
  index: number;
}
function DraggableCard({ toDo, index }: IDraggableCardProps) {
  console.log(toDo, "has been rendered");
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);

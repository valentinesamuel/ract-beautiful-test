import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "./card.css";

const Card = ({ card, index }) => {
  return (
    <Draggable key={card.id} draggableId={card.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            className="card"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              backgroundColor: snapshot.isDragging ? "#263B4A" : "#456C86",
              ...provided.draggableProps.style,
            }}
            >
                <img className="image" alt={card.status} src={card.image}/>
            <p>{card.name}</p>
          </div>
        );
      }}
    </Draggable>
  );
};

export default Card;

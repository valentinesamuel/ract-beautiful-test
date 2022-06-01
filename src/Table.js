import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Card from "./Card";
import "./table.css";

const Table = ({ droppableColumnId, column }) => {
  return (
    <div className="">
      <div className="table-header">
        <p>{column.name}</p>
        <span>{column.cards.length}</span>
      </div>

      {/* <div style={{ margin: 8 }}>

      </div> */}
      <Droppable droppableId={droppableColumnId} key={droppableColumnId}>
        {(provided, snapshot) => {
          return (
            <div
              className="table-body"
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                background: snapshot.isDraggingOver
                  ? "lightblue"
                  : "transparent",

                width: 250,
                minHeight: 500,
                borderRight: "3px solid black",
              }}
            >
              {column.cards.map((card, index) => {
                return <Card card={card} index={index} key={index} />;
              })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
};

export default Table;

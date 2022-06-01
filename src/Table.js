import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Card from "./Card";
import "./table.css";

const Table = ({ droppableColumnId, column }) => {
  return (
    <>
      <div className="column" key={droppableColumnId}>
     
          <div className="table-header">
            <div className="content">
            <p>{column.name}</p>
            <p className="total">{column.cards.length}</p>
            </div>
            <div className="btm-brdr"></div>
          </div>

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
        
        <div />
      </div>
    </>
  );
};

export default Table;

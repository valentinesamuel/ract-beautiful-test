import React, { useEffect, useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import Card from "./Card";
import "./table.css";

const Table = ({ droppableColumnId, column }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [screenType, setScreenType] = useState(null);

  const detectWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", detectWindowWidth);

    return () => {
      window.removeEventListener("resize", detectWindowWidth);
    };
  }, [windowWidth]);

  useEffect(() => {
    if (windowWidth < 480) {
      setScreenType("mobile");

    } else if (windowWidth > 481 ) {
      // For laptop and tablet
      setScreenType("laptop");
    
    // } else if (windowWidth > 1025 && windowWidth < 1200) {
    //   setScreenType("desktop");
   
    }
  }, [windowWidth]);

  const LandscapeView = () => {
    return (
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
    );
  }

  const MobileView = () => {
    return (
      <p>List or mobile view </p>
    )
  }

  return (
    <>
      {screenType === 'laptop' ? <LandscapeView/> : <MobileView/>}
    </>
  );
};

export default Table;

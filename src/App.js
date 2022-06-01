import React, { useState } from "react";
import { DragDropContext} from "react-beautiful-dnd";
import uuid from "uuid/v4";
import Table from "./Table";

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.cards];
    const destItems = [...destColumn.cards];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        cards: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        cards: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.cards];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        cards: copiedItems,
      },
    });
  }
};

function App() {
  // const [columns, setColumns] = useState(columnsFromBackend);
  const [columns, setColumns] = useState(apiData);
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              key={columnId}
            >
              <h2>{column.name}</h2>
              <div style={{ margin: 8 }}>
                <Table column={column} droppableColumnId={ columnId}/>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default App;

const apiData = {
  [uuid()]: {
    name: "Sourcing",
    hexColor: "#287CC9",
    cards: [
      {
        id: uuid(),
        tag: "New",
        name: "Miracle Dokidis",
        rating: 0,
        status: "New",
        time: null,
        phoneInterview: null,
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
      },
      {
        id: uuid(),
        tag: "New",
        name: "Allison Curtis",
        rating: 3,
        status: "New",
        time: "null",
        phoneInterview: null,
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
      },
    ],
  },
  [uuid()]: {
    name: "Screening",
    hexColor: "#287C36",
    cards: [
      {
        id: uuid(),
        tag: "Lead",
        name: "Maren Stanton",
        rating: 3,
        status: "Challenge Sent",
        time: "2 days ago",
        phoneInterview: null,
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
      },
      {
        id: uuid(),
        tag: "Applicant",
        name: "Eric Bana",
        rating: 3,
        status: "",
        time: "2 days ago",
        phoneInterview: null,
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
      },
    ],
  },
  [uuid()]: {
    name: "Design Challenge",
    hexColor: "#EEA401",
    cards: [
      {
        id: uuid(),
        tag: "Prospect",
        name: "Lee Vaccaro",
        rating: 3,
        status: "Challenge Sent",
        time: "2 days ago",
        phoneInterview: "pass",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
      },
      {
        id: uuid(),
        tag: "Prospect",
        name: "Devin Townsend",
        rating: 4,
        status: "Disqalified",
        time: "2 days ago",
        phoneInterview: null,
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
      },
    ],
  },
  [uuid()]: {
    name: "Interview",
    hexColor: "#507D7B",
    cards: [
      {
        id: uuid(),
        tag: "Lead",
        name: "Ann Donin",
        rating: 4,
        status: "",
        time: "2 days ago",
        phoneInterview: null,
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
      },
      {
        id: uuid(),
        tag: "Applicant",
        name: "Kevin Lee",
        rating: 4,
        status: "Disqalified",
        time: "2 days ago",
        phoneInterview: "fail",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
      },
    ],
  },
  [uuid()]: {
    name: "Tests",
    hexColor: "#AB56B2",
    cards: [
      {
        id: uuid(),
        tag: "Appilcant",
        name: "Brianna Vetrovs",
        rating: 3,
        status: "Test Scheduled",
        time: "2 days ago",
        phoneInterview: "pass",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
      },
    ],
  },
  // [uuid()]: {
  //   name: "Hired",
  //   hexColor: "#0BAD90",
  //   cards: [
  //     {
  //       id: uuid(),
  //       tag: "Applicant",
  //       name: "Micheal Chandler",
  //       rating: 5,
  //       status: "Hired",
  //       time: "",
  //       phoneInterview: "pass",
  //       image:
  //         "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
  //     },
  //     {
  //       id: uuid(),
  //       tag: "Applicant",
  //       name: "Justing Gaethje",
  //       rating: 5,
  //       status: "Hired",
  //       time: "2 days ago",
  //       phoneInterview: "pass",
  //       image:
  //         "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
  //     },
  //   ],
  // },
};
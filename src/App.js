import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import uuid from "uuid/v4";
import Table from "./Table";
import "./App.css";

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
    <div className="kanban">
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return <Table column={column} droppableColumnId={columnId} key={index} />;
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
        image: "https://randomuser.me/api/portraits/men/88.jpg",
      },
      {
        id: uuid(),
        tag: "New",
        name: "Allison Curtis",
        rating: 3,
        status: "New",
        time: "null",
        phoneInterview: null,
        image: "https://randomuser.me/api/portraits/men/62.jpg",
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
        image: "https://randomuser.me/api/portraits/men/55.jpg",
      },
      {
        id: uuid(),
        tag: "Applicant",
        name: "Eric Bana",
        rating: 3,
        status: "",
        time: "2 days ago",
        phoneInterview: null,
        image: "https://randomuser.me/api/portraits/men/67.jpg",
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
        image: "https://randomuser.me/api/portraits/lego/6.jpg",
      },
      {
        id: uuid(),
        tag: "Prospect",
        name: "Devin Townsend",
        rating: 4,
        status: "Disqalified",
        time: "2 days ago",
        phoneInterview: null,
        image: "https://randomuser.me/api/portraits/women/29.jpg",
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
        image: "https://randomuser.me/api/portraits/women/25.jpg",
      },
      {
        id: uuid(),
        tag: "Applicant",
        name: "Kevin Lee",
        rating: 4,
        status: "Disqalified",
        time: "2 days ago",
        phoneInterview: "fail",
        image: "https://randomuser.me/api/portraits/women/59.jpg",
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
        image: "https://randomuser.me/api/portraits/lego/2.jpg",
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

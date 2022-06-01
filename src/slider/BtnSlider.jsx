import React from "react";
import "./slider.css";


export default function BtnSlider({ direction, moveSlide }) {


  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <div>{direction === "next" ? "&gt;" : "&lt;"}</div>
    </button>
  );
}

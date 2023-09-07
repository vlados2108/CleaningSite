import React from "react";

interface IProps {
  moveSlide: () => void;
  direction: string;
}
export default function BtnSlider(props: IProps) {
  console.log(props.direction, props.moveSlide);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      className={
        props.direction === "next" ? "btn-slide next" : "btn-slide prev"
      }
      onClick={props.moveSlide}
    >
      <g>
        <path
          d={
            props.direction === "prev"
              ? "M24.9987 27.084L41.6654 27.084L41.6654 22.9173L24.9987 22.9173L24.9987 8.33398L8.33203 25.0007L24.9987 41.6673L24.9987 27.084Z"
              : "M25.0013 27.084L8.33464 27.084L8.33464 22.9173L25.0013 22.9173L25.0013 8.33398L41.668 25.0007L25.0013 41.6673L25.0013 27.084Z"
          }
          fill="black"
        />
      </g>
    </svg>
  );
}

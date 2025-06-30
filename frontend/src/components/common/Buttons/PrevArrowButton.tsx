import React from "react";
import { CustomArrowProps } from "react-slick";

const PrevArrowButton = (props: CustomArrowProps) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent rounded-full p-2 shadow w-10 h-10 hover:bg-black"
    >
      <b className="text-white">&#10094;</b>
    </button>
  );
};
export default PrevArrowButton;

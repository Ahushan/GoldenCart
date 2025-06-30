import React from "react";
import { CustomArrowProps } from "react-slick";

const NextArrowButton = (props: CustomArrowProps) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent rounded-full p-2 shadow w-10 h-10 hover:bg-black"
    >
      <b className="text-white">&#10095;</b>
    </button>
  );
};

export default NextArrowButton;

import React, { useState, MouseEvent } from "react";

const files = [
  "milo.png",
  "viking.png",
  "colorful-tree.png",
  "brother.png",
  "female-figure.png",
  "male-head.png",
  "alligator.png",
  "bust.png",
  "female-head.png",
  "red-panda.png",
  "tree.png",
  "gloves.png",
];

const Drawings = () => {
  return (
    <div className="min-w-full grid grid-rows-3 grid-flow-col gap-x-12 gap-y-10">
      {files.map((f, i) => {
        return (
          <img
            className="shadow-lg transition duration-200 transform hover:scale-125 rounded-md h-20 w-20"
            src={`drawings/${f}`}
            onClick={(e: MouseEvent) => {
              e.stopPropagation();
            }}
          />
        );
      })}
    </div>
  );
};

export default Drawings;

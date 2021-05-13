import React, { MouseEvent } from "react";

const files = [
  "brother.png",
  "tree.png",
  "female-figure.png",
  "milo.png",
  "viking.png",
  "colorful-tree.png",
  "male-head.png",
  "alligator.png",
  "bust.png",
  "female-head.png",
  "red-panda.png",
  "gloves.png",
];

const Drawings = () => {
  return (
    <div>
      <div className="text-lg max-w-max pr-3">🎨 Gallery</div>
      <div
        className="w-full h-full flex justify-start items-center pl-4 py-2 space-x-5 overflow-x-scroll overflow-y-visible"
        onClick={(e: MouseEvent) => e.stopPropagation()}
      >
        {files.map((f, i) => {
          return (
            <img
              className="shadow-md my-1 p-2 w-60"
              src={`drawings/${f}`}
              alt={f}
            />
          );
        })}
        <div className="w-4 invisible">{"."}</div>
      </div>
    </div>
  );
};

export default Drawings;

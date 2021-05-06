import React, { MouseEvent } from "react";

const Drawings = () => {
  return (
    <div>
      <div className="cursor-default max-w-max text-lg">🎨 Gallery</div>
      <div className="w-full h-full flex justify-center items-center p-6">
        <div className="cursor-default grid grid-rows-3 grid-flow-col gap-x-20 gap-y-10">
          {files.map((f, i) => {
            return (
              <img
                className="shadow-lg transition duration-200 transform hover:scale-160 scale-110 rounded-md h-16 w-16"
                src={`drawings/${f}`}
                alt={f}
                onClick={(e: MouseEvent) => {
                  e.stopPropagation();
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

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

export default Drawings;

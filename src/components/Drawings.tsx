import React, { useState, useEffect } from "react";

import { useStopDrag } from "../lib/hooks";

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

const Drawings = ({ front }: { front: boolean }) => {
  const [overflow, setOverflow] = useState("overflow-hidden");

  useEffect(() => {
    if (front) {
      setOverflow("overflow-scroll");
    } else {
      setOverflow("overflow-hidden");
    }
  }, [front]);

  return (
    <div className="max-h-full flex flex-col space-y-3 md:space-y-1">
      <div className="text-lg md:max-w-max pr-3">🎨 Gallery</div>
      <div
        {...useStopDrag()()}
        className={`w-full h-full flex flex-col md:flex-row justify-start items-center md:pl-4 py-2 md:pb-3 px-2 md:px-0 md:py-0 md:space-x-5 ${overflow}`}
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

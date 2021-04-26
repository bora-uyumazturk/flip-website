import React, { useState, useRef, MouseEvent } from "react";

import { coordinatesToDirection, updateAngle } from "./utils";

export const useTapToFlip = ({ defaultAngle = { x: 0, y: 0 } }) => {
  const [angle, setAngle] = useState(defaultAngle);
  const ref = useRef<HTMLDivElement>(null);
  const onDivClick = (e: MouseEvent) => {
    if (ref && ref.current) {
      const coordinates = {
        x: e.pageX - ref.current.offsetLeft - ref.current.clientWidth / 2,
        y:
          -1 * (e.pageY - ref.current.offsetTop - ref.current.clientHeight / 2),
      };

      const direction = coordinatesToDirection({
        coordinates: coordinates,
        dimensions: {
          x: ref.current.clientWidth,
          y: ref.current.clientHeight,
        },
      });
      setAngle(updateAngle({ angle: angle, direction: direction }));
    }
  };

  return { angle: angle, ref: ref, onClick: onDivClick };
};

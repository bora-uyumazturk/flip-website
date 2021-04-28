import { useState, useRef, MouseEvent } from "react";

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

export const useFlipGroup = () => {
  const defaultAngle: { [index: string]: { x: number; y: number } } = {
    home: {
      x: 0,
      y: 0,
    },
    left: {
      x: 0,
      y: -1,
    },
    top: {
      x: 1,
      y: 0,
    },
    right: {
      x: 0,
      y: 1,
    },
    bottom: {
      x: -1,
      y: 0,
    },
  };
  const [angles, setAngles] = useState(defaultAngle);

  const [active, setActive] = useState("home");

  const ref = useRef<HTMLDivElement>(null);

  const onClick = (e: MouseEvent) => {
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

      // const nextView = active === "home" ? direction : "home";

      const nextView = active === direction ? "home" : direction;

      const activeAngle = updateAngle({
        angle: angles[active],
        direction: direction,
      });

      const nextAngle = updateAngle({
        angle: angles[nextView],
        direction: direction,
      });

      let newAngles: {
        [index: string]: { x: number; y: number };
      } = Object.assign({}, angles);

      newAngles[active] = activeAngle;
      newAngles[nextView] = nextAngle;
      setAngles(newAngles);
      setActive(nextView);
    }
  };

  return { angles: angles, ref: ref, onClick: onClick };
};

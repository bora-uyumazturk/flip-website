import { useDrag } from "react-use-gesture";

import { useState, useRef, MouseEvent } from "react";

import { coordinatesToDirection, updateAngle } from "./utils";

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

  const [nextActive, setNextActive] = useState<string | undefined>(undefined);

  const ref = useRef<HTMLDivElement>(null);

  const [direction, setDirection] = useState<
    "top" | "left" | "bottom" | "right"
  >("top");
  const bind = useDrag(
    ({
      down,
      swipe: [x, y],
      delta: [dx, dy],
      movement: [swipeX, swipeY],
      xy: [pageX, pageY],
      intentional,
    }) => {
      console.log([x, y]);
      if (x !== 0 || y !== 0) {
        let newDirection: "top" | "left" | "bottom" | "right";
        if (x === 1) {
          newDirection = "right";
        } else if (y === 1) {
          newDirection = "bottom";
        } else if (x === -1) {
          newDirection = "left";
        } else {
          newDirection = "top";
        }
        setDirection(newDirection);

        const nextView = active === "home" ? newDirection : "home";
        // setNextActive(nextView);
        console.log(newDirection);

        console.log("changing view");
        const activeAngle = updateAngle({
          angle: angles[active],
          direction: newDirection,
        });

        const nextAngle = updateAngle({
          angle: angles[nextView],
          direction: newDirection,
        });

        let newAngles: {
          [index: string]: { x: number; y: number };
        } = Object.assign({}, angles);

        newAngles[active] = activeAngle;
        newAngles[nextView] = nextAngle;
        setAngles(newAngles);
        setActive(nextView);
      } else if (ref && ref.current && !down) {
        // simulates on click
        const coordinates = {
          x: pageX - ref.current.offsetLeft - ref.current.clientWidth / 2,
          y:
            -1 * (pageY - ref.current.offsetTop - ref.current.clientHeight / 2),
        };

        const direction = coordinatesToDirection({
          coordinates: coordinates,
          dimensions: {
            x: ref.current.clientWidth,
            y: ref.current.clientHeight,
          },
        });

        const nextView = active === "home" ? direction : "home";

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

        setNextActive(undefined);
      }
    }
    // { swipeDistance: [10, 10], swipeVelocity: [0.1, 0.1], swipeDuration: 1e9 }
  );

  const onClick = () => {
    return;
  };

  return {
    angles: angles,
    ref: ref,
    onClick: onClick,
    nextActive: nextActive,
    gestureBind: bind,
  };
};

export const useStopDrag = () => {
  return useDrag(({ event, down, last, swipe: [x, y] }) => {
    console.log([x, y]);
    if (x === 0 && y === 0 && last && !down) {
      event.stopPropagation();
    }
    event.stopPropagation();
  });
};

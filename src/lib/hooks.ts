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
      intentional,
    }) => {
      if (x !== 0 || y !== 0) {
        let newDirection: "top" | "left" | "bottom" | "right";
        if (x === 1) {
          newDirection = "right";
        } else if (x === -1) {
          newDirection = "left";
        } else if (y === 1) {
          newDirection = "bottom";
        } else {
          newDirection = "top";
        }
        setDirection(newDirection);

        const nextView = active === "home" ? newDirection : "home";
        setNextActive(nextView);
      } else {
        setNextActive(undefined);
      }
    },
    { swipeDistance: [10, 10], swipeVelocity: [0.1, 0.1], swipeDuration: 1e9 }
  );

  // fires after drag event
  const onClick = (e: MouseEvent) => {
    if (nextActive) {
      const activeAngle = updateAngle({
        angle: angles[active],
        direction: direction,
      });

      const nextAngle = updateAngle({
        angle: angles[nextActive],
        direction: direction,
      });

      let newAngles: {
        [index: string]: { x: number; y: number };
      } = Object.assign({}, angles);

      newAngles[active] = activeAngle;
      newAngles[nextActive] = nextAngle;
      setAngles(newAngles);
      setActive(nextActive);

      setNextActive(undefined);
    } else if (ref && ref.current) {
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

      const nextView = active === "home" ? direction : "home";
      setNextActive(nextView);

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
  };

  return {
    angles: angles,
    ref: ref,
    onClick: onClick,
    nextActive: nextActive,
    gestureBind: bind,
  };
};

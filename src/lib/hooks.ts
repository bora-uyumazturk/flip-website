import { useDrag } from "react-use-gesture";

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

      if (coordinates.x * coordinates.x + coordinates.y * coordinates.y > 100) {
        const direction = coordinatesToDirection({
          coordinates: coordinates,
          dimensions: {
            x: ref.current.clientWidth,
            y: ref.current.clientHeight,
          },
        });
        setAngle(updateAngle({ angle: angle, direction: direction }));
      }
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

  const [nextActive, setNextActive] = useState<string | undefined>(undefined);

  const ref = useRef<HTMLDivElement>(null);

  // const onClick = (e: MouseEvent) => {
  //   if (ref && ref.current) {
  //     const coordinates = {
  //       x: e.pageX - ref.current.offsetLeft - ref.current.clientWidth / 2,
  //       y:
  //         -1 * (e.pageY - ref.current.offsetTop - ref.current.clientHeight / 2),
  //     };
  //
  //     const direction = coordinatesToDirection({
  //       coordinates: coordinates,
  //       dimensions: {
  //         x: ref.current.clientWidth,
  //         y: ref.current.clientHeight,
  //       },
  //     });
  //
  //     // const nextView = active === "home" ? direction : "home";
  //
  //     const nextView = active === direction ? "home" : direction;
  //
  //     setNextActive(active === direction ? direction : "home");
  //
  //     const activeAngle = updateAngle({
  //       angle: angles[active],
  //       direction: direction,
  //     });
  //
  //     const nextAngle = updateAngle({
  //       angle: angles[nextView],
  //       direction: direction,
  //     });
  //
  //     let newAngles: {
  //       [index: string]: { x: number; y: number };
  //     } = Object.assign({}, angles);
  //
  //     newAngles[active] = activeAngle;
  //     newAngles[nextView] = nextAngle;
  //     setAngles(newAngles);
  //     setActive(nextView);
  //   }
  // };

  const onMouseMove = (e: MouseEvent) => {
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

      setNextActive(nextView);
    }
  };

  const [direction, setDirection] = useState<
    "top" | "left" | "bottom" | "right"
  >("top");
  const [offset, setOffset] = useState({ dx: 0, dy: 0 });
  const bind = useDrag(({ down, movement: [x, y] }) => {
    setOffset({ dx: down ? x : 0, dy: down ? y : 0 });

    if (Math.sqrt(offset.dx * offset.dx + offset.dy * offset.dy) > 40) {
      const direction = coordinatesToDirection({
        coordinates: { x: offset.dx, y: -offset.dy },
        dimensions: {
          x: 1,
          y: 1,
        },
      });

      setDirection(direction);

      // const nextView = active === "home" ? direction : "home";

      const nextView = active === direction ? "home" : direction;

      setNextActive(nextView);
    } else {
      setNextActive(undefined);
    }
  });

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

      console.log(nextAngle);

      setNextActive(undefined);
    }
  };

  return {
    angles: angles,
    ref: ref,
    onClick: onClick,
    nextActive: nextActive,
    onMouseMove: onMouseMove,
    gestureBind: bind,
    offset: offset,
  };
};

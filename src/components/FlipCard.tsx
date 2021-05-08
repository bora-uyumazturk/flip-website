import React, { useState, useEffect } from "react";
import { useSpring, a } from "react-spring/web";
import { useDrag } from "react-use-gesture";

interface Angle {
  x: number;
  y: number;
}

interface Offset {
  dx: number;
  dy: number;
}

interface FlipCardProps {
  children: React.ReactElement;
  offset: Offset;
  angle?: Angle;
  onRest?: () => void;
}

const dampen = (m: number) => {
  return Math.pow(0.9, Math.sqrt(Math.abs(m)));
};

const FlipCard = ({
  children,
  offset,
  angle = { x: 0, y: 0 },
  onRest = () => {},
}: FlipCardProps) => {
  const [zRot, setzRot] = useState(0);
  // const [offset, setOffset] = useState({ dx: 0, dy: 0 });
  const styles = useSpring({
    transform: `perspective(2000px) rotateX(${
      angle.x * 180 -
      offset.dy * dampen(offset.dy) * (angle.x % 2 == 1 ? -1 : 1)
    }deg) rotateY(${
      angle.y * 180 +
      offset.dx * dampen(offset.dx) * (angle.y % 2 == 1 ? -1 : 1)
    }deg)`,
    opacity: (angle.x + angle.y) % 2 === 0 ? 1 : 0,
    config: { mass: 10, tension: 500, friction: 80 },
    onRest: onRest,
  });

  // const bind = useDrag(({ down, movement: [x, y] }) => {
  //   setOffset({ dx: down ? x : 0, dy: down ? y : 0 });
  // });

  useEffect(() => {
    // when coming on to screen turn content right side up
    if ((angle.x + angle.y) % 2 === 0) {
      setzRot(180 * Math.min(Math.abs(angle.x), Math.abs(angle.y)));
    }
  }, [angle]);

  return (
    <a.div
      className={`card absolute p-8 w-full h-full rounded-md shadow-lg bg-white font-base`}
      style={styles}
    >
      <div
        className={`h-full w-full`}
        style={{
          transform: `rotateZ(${zRot}deg)`,
        }}
      >
        {children}
      </div>
    </a.div>
  );
};

export default FlipCard;

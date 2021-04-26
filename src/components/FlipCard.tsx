import React from "react";
import { useSpring, a } from "react-spring/web";

interface Angle {
  x: number;
  y: number;
}

interface FlipCardProps {
  children: React.ReactElement;
  angle?: Angle;
}

const FlipCard = ({ children, angle = { x: 0, y: 0 } }: FlipCardProps) => {
  const styles = useSpring({
    transform: `perspective(600px) rotateX(${angle.x * 180}deg) rotateY(${
      angle.y * 180
    }deg)`,
    config: { mass: 8, tension: 500, friction: 80 },
  });

  return (
    <a.div
      className="flex flex-col justify-center items-center h-48 w-64 rounded-md shadow bg-white font-semibold"
      style={styles}
    >
      {children}
    </a.div>
  );
};

export default FlipCard;

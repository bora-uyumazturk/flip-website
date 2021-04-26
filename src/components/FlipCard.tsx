import React, { useState, useEffect } from "react";
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
  const [zRot, setzRot] = useState(0);
  const styles = useSpring({
    transform: `perspective(600px) rotateX(${angle.x * 180}deg) rotateY(${
      angle.y * 180
    }deg)`,
    config: { mass: 8, tension: 500, friction: 80 },
  });

  useEffect(() => {
    // when coming on to screen
    if ((1 + angle.x + angle.y) % 2) {
      setzRot(180 * Math.min(Math.abs(angle.x), Math.abs(angle.y)));
    }
  }, [angle]);

  // return (
  //   <a.div
  //     className="card absolute flex flex-col justify-center items-center w-full h-full rounded-md shadow bg-white font-semibold"
  //     style={styles}
  //   >
  //     <div
  //       className="card"
  //       style={{
  //         transform:
  //           (1 + angle.x + angle.y) % 2
  //             ? `rotateX(${-angle.x * 180}deg) rotateY(${-angle.y * 180}deg)`
  //             : "",
  //       }}
  //     >
  //       {children}
  //     </div>
  //   </a.div>
  // );
  return (
    <a.div
      className="card absolute flex flex-col justify-center items-center w-full h-full rounded-md shadow bg-white font-semibold"
      style={styles}
    >
      <div
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

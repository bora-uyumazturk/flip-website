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
  const [flexJustify, setFlexJustify] = useState(1);
  const styles = useSpring({
    transform: `perspective(2000px) rotateX(${angle.x * 180}deg) rotateY(${
      angle.y * 180
    }deg)`,
    config: { mass: 10, tension: 500, friction: 80 },
  });

  useEffect(() => {
    // when coming on to screen turn content right side up
    if ((1 + angle.x + angle.y) % 2) {
      setzRot(180 * Math.min(Math.abs(angle.x), Math.abs(angle.y)));
      setFlexJustify(Math.min(Math.abs(angle.x), Math.abs(angle.y)) % 2);
    }
  }, [angle]);

  // return (
  //   <a.div
  //     className={`card absolute flex flex-col ${
  //       flexJustify ? "justify-end" : "justify-start"
  //     } items-center w-full h-full p-10 rounded-md shadow-lg bg-white font-base`}
  //     style={styles}
  //   >
  //     <div
  //       className="h-full w-full"
  //       style={{
  //         transform: `rotateZ(${zRot}deg)`,
  //       }}
  //     >
  //       {children}
  //     </div>
  //   </a.div>
  // );

  return (
    <a.div
      className={`card absolute w-full h-full p-10 rounded-md shadow-lg bg-white font-base`}
      style={styles}
    >
      <div
        className="h-full w-full"
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

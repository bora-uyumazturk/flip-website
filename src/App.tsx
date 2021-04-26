import React from "react";

import FlipCard from "./components/FlipCard";

import { useTapToFlip } from "./lib/hooks";

function App() {
  const { angle, ref, onClick } = useTapToFlip({
    defaultAngle: { x: 0, y: 0 },
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-gray-200 p-10 space-y-20">
      <div className="relative h-48 w-64" ref={ref} onClick={onClick}>
        <FlipCard angle={angle}>
          <div>Front</div>
        </FlipCard>
        <FlipCard angle={{ x: angle.x, y: angle.y + 1 }}>
          <div>Back</div>
        </FlipCard>
      </div>
    </div>
  );
}

export default App;

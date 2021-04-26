import React from "react";

import FlipCard from "./components/FlipCard";

import { useTapToFlip } from "./lib/hooks";

function App() {
  const { angle, ref, onClick } = useTapToFlip();

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-gray-200 p-10 space-y-20">
      <div ref={ref} onClick={onClick}>
        <FlipCard angle={angle}>
          <div>Let's Dance!</div>
        </FlipCard>
      </div>
    </div>
  );
}

export default App;

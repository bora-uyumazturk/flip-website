import React from "react";

import FlipCard from "./components/FlipCard";

import { useTapToFlip, useFlipGroup } from "./lib/hooks";

// function App() {
//   const { angle, ref, onClick } = useTapToFlip({
//     defaultAngle: { x: 0, y: 0 },
//   });
//
//   return (
//     <div className="flex flex-col justify-center items-center h-screen w-full bg-gray-200 p-10 space-y-20">
//       <div className="relative h-48 w-64" ref={ref} onClick={onClick}>
//         <FlipCard angle={angle}>
//           <div>Front</div>
//         </FlipCard>
//         <FlipCard angle={{ x: angle.x, y: angle.y + 1 }}>
//           <div>Back</div>
//         </FlipCard>
//       </div>
//     </div>
//   );
// }

function App() {
  const { angles, ref, onClick } = useFlipGroup();

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-gray-200 p-10 space-y-20">
      <div className="relative h-1/2 w-1/2" ref={ref} onClick={onClick}>
        <FlipCard angle={angles.top}>
          <div>These are my publications.</div>
        </FlipCard>
        <FlipCard angle={angles.right}>
          <div>Here are my drawings. </div>
        </FlipCard>
        <FlipCard angle={angles.bottom}>
          <div>Here are my side projects.</div>
        </FlipCard>
        <FlipCard angle={angles.left}>
          <div>Here's what I've been reading.</div>
        </FlipCard>
        <FlipCard angle={angles.home}>
          <div>Hi, my name is Bora. Welcome to my website. </div>
        </FlipCard>
      </div>
    </div>
  );
}

export default App;

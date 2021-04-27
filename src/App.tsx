import React from "react";

import FlipCard from "./components/FlipCard";
import About from "./components/About";
import Drawings from "./components/Drawings";
import Publications from "./components/Publications";
import SideProjects from "./components/SideProjects";
import Reading from "./components/Reading";

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
    <div className="flex flex-col justify-center items-center h-screen w-full bg-gray-200 space-y-20">
      <div
        className="relative h-1/2 w-1/2 min-w-192"
        ref={ref}
        onClick={onClick}
      >
        <FlipCard angle={angles.top}>
          <Publications />
        </FlipCard>
        <FlipCard angle={angles.right}>
          <Drawings />
        </FlipCard>
        <FlipCard angle={angles.bottom}>
          <SideProjects />
        </FlipCard>
        <FlipCard angle={angles.left}>
          <Reading />
        </FlipCard>
        <FlipCard angle={angles.home}>
          <About />
        </FlipCard>
      </div>
    </div>
  );
}

export default App;

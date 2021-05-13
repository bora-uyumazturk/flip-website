import { isMobile } from "react-device-detect";

import FlipCard from "./components/FlipCard";
import About from "./components/About";
import Drawings from "./components/Drawings";
import Publications from "./components/Publications";
import SideProjects from "./components/SideProjects";
import Reading from "./components/Reading";

import { useFlipGroup } from "./lib/hooks";

function App() {
  const { angles, ref, onClick, gestureBind } = useFlipGroup();

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-gray-200 md:space-y-20">
      <div
        {...gestureBind()}
        className="relative h-full w-full max-h-tall min-h-tall max-w-xs md:max-h-96 md:max-w-wide md:min-h-96 md:min-w-wide"
        ref={ref}
        onClick={onClick}
      >
        {isMobile ? (
          <>
            <FlipCard angle={angles.home}>
              <About />
            </FlipCard>
            <FlipCard angle={angles.top}>
              <Publications front={(angles.top.x + angles.top.y) % 2 === 0} />
            </FlipCard>
            <FlipCard angle={angles.left}>
              <Reading />
            </FlipCard>
            <FlipCard angle={angles.bottom}>
              <SideProjects
                front={(angles.bottom.x + angles.bottom.y) % 2 === 0}
              />
            </FlipCard>
            <FlipCard angle={angles.right}>
              <Drawings />
            </FlipCard>{" "}
          </>
        ) : (
          <>
            <FlipCard angle={angles.right}>
              <Drawings />
            </FlipCard>
            <FlipCard angle={angles.left}>
              <Reading />
            </FlipCard>
            <FlipCard angle={angles.home}>
              <About />
            </FlipCard>
            <FlipCard angle={angles.bottom}>
              <SideProjects
                front={(angles.bottom.x + angles.bottom.y) % 2 === 0}
              />
            </FlipCard>
            <FlipCard angle={angles.top}>
              <Publications front={(angles.top.x + angles.top.y) % 2 === 0} />
            </FlipCard>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

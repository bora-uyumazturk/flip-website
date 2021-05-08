import FlipCard from "./components/FlipCard";
import About from "./components/About";
import Drawings from "./components/Drawings";
import Publications from "./components/Publications";
import SideProjects from "./components/SideProjects";
import Reading from "./components/Reading";

import { useFlipGroup } from "./lib/hooks";

function App() {
  const {
    angles,
    ref,
    onClick,
    nextActive,
    onMouseMove,
    gestureBind,
    offset,
  } = useFlipGroup();

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-gray-200 space-y-20">
      <div
        {...gestureBind()}
        className={`relative h-1/2 w-1/2 max-h-192 max-w-192 min-h-192 min-w-192 ${
          nextActive && `${nextActive}-cursor`
        }`}
        ref={ref}
        onClick={onClick}
      >
        <FlipCard angle={angles.right} offset={offset}>
          <Drawings />
        </FlipCard>
        <FlipCard angle={angles.left} offset={offset}>
          <Reading />
        </FlipCard>
        <FlipCard angle={angles.home} offset={offset}>
          <About />
        </FlipCard>
        <FlipCard angle={angles.bottom} offset={offset}>
          <SideProjects front={(angles.bottom.x + angles.bottom.y) % 2 === 0} />
        </FlipCard>
        <FlipCard angle={angles.top} offset={offset}>
          <Publications front={(angles.top.x + angles.top.y) % 2 === 0} />
        </FlipCard>
      </div>
    </div>
  );
}

export default App;

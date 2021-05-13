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
        className="relative w-full h-screen md:max-h-192 md:max-w-192 md:min-h-192 md:min-w-192"
        ref={ref}
        onClick={onClick}
      >
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
          <SideProjects front={(angles.bottom.x + angles.bottom.y) % 2 === 0} />
        </FlipCard>
        <FlipCard angle={angles.top}>
          <Publications front={(angles.top.x + angles.top.y) % 2 === 0} />
        </FlipCard>
      </div>
    </div>
  );
}

export default App;

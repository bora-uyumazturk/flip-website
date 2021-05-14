import FlipCard from "./FlipCard";
import About from "./About";
import Drawings from "./Drawings";
import Publications from "./Publications";
import SideProjects from "./SideProjects";
import Reading from "./Reading";

import { useFlipGroup } from "../lib/hooks";

const BrowserView = () => {
  const { angles, ref, onClick, gestureBind } = useFlipGroup();

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-gray-200 md:space-y-20">
      <div
        {...gestureBind()}
        className="relative h-full w-full max-h-tall min-h-tall max-w-xs md:max-h-96 md:max-w-wide md:min-h-96 md:min-w-wide"
        ref={ref}
        onClick={onClick}
      >
        <FlipCard angle={angles.right}>
          <Drawings front={(angles.right.x + angles.right.y) % 2 === 0} />
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
};

export default BrowserView;

import FlipCard from "./FlipCard";
import About from "./About";
import Drawings from "./Drawings";
import Publications from "./Publications";
import SideProjects from "./SideProjects";
import Reading from "./Reading";

import { useFlipGroup, useFlipSupported } from "../lib/hooks";

const BrowserView = () => {
  const { angles, ref, onClick, gestureBind } = useFlipGroup();
  const supported = useFlipSupported();

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-gray-200 md:space-y-20">
      <div
        {...gestureBind()}
        className="relative h-full w-full max-h-tall min-h-tall max-w-xs md:max-h-96 md:max-w-wide md:min-h-96 md:min-w-wide"
        ref={ref}
        onClick={onClick}
      >
        {supported ? (
          <>
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
              <SideProjects
                front={(angles.bottom.x + angles.bottom.y) % 2 === 0}
              />
            </FlipCard>
            <FlipCard angle={angles.top}>
              <Publications front={(angles.top.x + angles.top.y) % 2 === 0} />
            </FlipCard>
          </>
        ) : (
          <div className="card absolute w-full h-full rounded-md bg-white font-base">
            <div className="h-full w-full shadow-lg p-8">
              <About browserError={true} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowserView;

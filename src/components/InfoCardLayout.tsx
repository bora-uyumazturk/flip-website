import React, { useState, useEffect } from "react";

import { isMobile } from "react-device-detect";

import InfoCard from "./InfoCard";

interface Link {
  link: string;
  linkName: string;
}

interface Entry {
  title: string;
  abstract: string;
  links: Link[];
}

const InfoCardLayout = ({
  title,
  entryList,
  front,
}: {
  title: string;
  entryList: Entry[];
  front: boolean;
}) => {
  const [overflow, setOverflow] = useState("overflow-hidden");

  useEffect(() => {
    if (front) {
      setOverflow("overflow-auto");
    } else {
      setOverflow("overflow-hidden");
    }
  }, [front]);

  return (
    <div className="max-h-full flex flex-col space-y-5 md:space-y-8">
      <div className="text-lg max-w-max pr-3">{title}</div>
      <div
        className={`max-h-full w-full max-w-max flex flex-col space-y-4 ${
          !isMobile && overflow
        } pr-4`}
      >
        {entryList.map((p) => {
          return (
            <InfoCard
              key={p.title}
              title={p.title}
              abstract={p.abstract}
              links={p.links}
            />
          );
        })}
      </div>
    </div>
  );

  // alternate implementation

  // const [overflow, setOverflow] = useState("clip");
  //
  // useEffect(() => {
  //   if (front) {
  //     setOverflow("scroll");
  //   } else {
  //     // HACK: Added this because Firefox had an issue where having a
  //     // scroll view in front of another scroll view blocked its scroll
  //     // events (even if the front scroll view is turned backwards). My
  //     // workaround is to after a hopefully unnoticeable period of time
  //     // conver the scroll behavior to clip, which deactivates all
  //     // scroll events, and therefore allows the scroll events on the
  //     // div that is further back to fire.
  //     setOverflow("hidden");
  //     setTimeout(() => {
  //       setOverflow("clip");
  //     }, 60);
  //   }
  // }, [front]);
  //
  // return (
  //   <div className="max-h-full flex flex-col space-y-3">
  //     <div
  //       className="cursor-default text-lg max-w-max pr-3"
  //       onClick={(e: MouseEvent) => e.stopPropagation()}
  //     >
  //       {title}
  //     </div>
  //     <div
  //       className={`cursor-default max-h-full max-w-max w-full flex flex-col space-y-4 pr-4`}
  //       style={{
  //         overflow: overflow,
  //       }}
  //       onClick={(e: MouseEvent) => {
  //         e.stopPropagation();
  //       }}
  //     >
  //       {entryList.map((p) => {
  //         return (
  //           <InfoCard
  //             key={p.title}
  //             title={p.title}
  //             abstract={p.abstract}
  //             links={p.links}
  //           />
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
};

export default InfoCardLayout;

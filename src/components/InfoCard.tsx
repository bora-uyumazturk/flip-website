import React, { useState, MouseEvent } from "react";

import { isMobile } from "react-device-detect";

import { useStopDrag } from "../lib/hooks";

interface Link {
  link: string;
  linkName: string;
}

interface Entry {
  title: string;
  abstract: string;
  links: Link[];
}

const InfoCard = ({ title, abstract, links }: Entry) => {
  const [clicked, setClicked] = useState(false);

  const bind = useStopDrag();

  return isMobile ? (
    <div
      className={`max-w-max flex flex-row space-x-2 flex-none underline text-purple-500`}
      {...bind()}
    >
      <div className="flex flex-col space-y-2">
        <div className="cursor-pointer">
          <a
            key={links[0].link}
            href={links[0].link}
            rel="noopener noreferrer"
            target="_blank"
          >
            {title}
          </a>
        </div>
      </div>
    </div>
  ) : (
    <div
      className="max-w-max flex flex-row space-x-2 flex-none hover:text-blue-400"
      onClick={(e: MouseEvent) => {
        setClicked(!clicked);
        e.stopPropagation();
      }}
      {...bind()}
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transform translate-y-0.5 ${
            clicked ? "rotate-90" : ""
          } cursor-pointer`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <div className="flex flex-col space-y-2 text-black">
        <div className="cursor-pointer">{title}</div>
        {clicked && (
          <>
            <div
              className="text-xs"
              onClick={(e: MouseEvent) => {
                e.stopPropagation();
              }}
            >
              {abstract}
            </div>
            <div className="flex flex-row">
              {links.map(({ link, linkName }) => {
                return (
                  <a
                    key={link}
                    href={link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-xs"
                  >
                    [
                    <span className="text-blue-600 hover:underline">
                      {linkName}
                    </span>
                    ]
                  </a>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InfoCard;

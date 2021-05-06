import React, { useState, MouseEvent } from "react";

interface Link {
  link: string;
  linkName: string;
}

interface Publication {
  title: string;
  abstract: string;
  links: Link[];
}

const PublicationCard = ({ title, abstract, links }: Publication) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className="w-full flex flex-row space-x-2 flex-none hover:text-blue-400"
      onClick={(e: MouseEvent) => {
        e.stopPropagation();
        setClicked(!clicked);
      }}
    >
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
      <div className="w-full flex flex-col space-y-2 text-black">
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
                  <a key={link} href={link} target="_blank" className="text-xs">
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

export default PublicationCard;

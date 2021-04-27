import React, { useState, MouseEvent } from "react";

interface Publication {
  title: string;
  abstract: string;
  link?: string;
}

const PublicationCard = ({ title, abstract, link = "" }: Publication) => {
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
        className={`h-6 w-6 transform translate-y-0.5 ${
          clicked ? "rotate-90" : ""
        }`}
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
      <div className="w-full flex flex-col space-y-4 text-black">
        <div>{title}</div>
        {clicked && (
          <div
            className="text-xs"
            onClick={(e: MouseEvent) => {
              e.stopPropagation();
            }}
          >
            {abstract}
          </div>
        )}
      </div>
    </div>
  );
};

export default PublicationCard;

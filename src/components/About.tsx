import React from "react";

import { useStopDrag } from "../lib/hooks";

import { isBrowser, isMobile } from "react-device-detect";

const NormalCopy = () => {
  return (
    <p className="text-gray-500 text-center text-sm md:text-base md:text-left">
      I'm a machine learning engineer at{" "}
      <a
        className={`cursor-pointer ${
          isMobile ? "underline" : "hover:underline"
        }`}
        href="https://www.viaduct.ai"
        target="_blank"
        rel="noopener noreferrer"
        {...useStopDrag()()}
      >
        viaduct.ai
      </a>
      , a startup building machine learning solutions for connected vehicles. I
      also spend time making silly things like this.{" "}
      <span className="font-semibold">
        {`${
          isBrowser ? "Drag, swipe, and click" : "Swipe"
        } to navigate around.`}
      </span>
    </p>
  );
};

const ErrorCopy = () => {
  return (
    <p className="text-gray-500 text-center text-sm md:text-base md:text-left">
      Normally this site would be interactive, but unfortunately, your browser
      is <span className="font-semibold">unsupported</span>. Supported browsers
      include Chrome, Safari, and Brave.
    </p>
  );
};

const About = ({ browserError = false }: { browserError?: boolean }) => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="w-full max-w-max flex flex-col space-y-2 md:flex-row md:space-x-10 justify-center items-center">
        <img
          className="h-40 w-40 md:h-48 md:w-48 rounded-full border border-black shadow-sm"
          src="bora_pic.jpeg"
          alt="me"
        />
        <div className="flex-none flex flex-col space-y-2 h-48 w-48 md:w-64">
          <p className="text-lg text-center md:text-left">Hi, I'm Bora</p>
          {browserError ? <ErrorCopy /> : <NormalCopy />}
        </div>
      </div>
    </div>
  );
};

export default About;

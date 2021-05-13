import React, { MouseEvent } from "react";

const About = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="w-full max-w-max flex flex-col space-y-2 md:flex-row md:space-x-10 justify-center items-center">
        <img
          className="h-40 w-40 md:h-48 md:w-48 rounded-full border border-black shadow-sm"
          src="bora_pic.jpeg"
          alt="me"
        />
        <div className="flex-none flex flex-col space-y-2 md:space-y-0 md:justify-between h-48 w-48 md:w-64 py-2">
          <p className="text-lg text-center md:text-left">Hi, I'm Bora</p>
          <p className="text-gray-500 text-center md:text-left">
            I'm a machine learning engineer at{" "}
            <a
              className="cursor-default hover:underline"
              href="https://www.viaduct.ai"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e: MouseEvent) => e.stopPropagation()}
            >
              viaduct.ai
            </a>
            , a startup building machine learning solutions for connected
            vehicles. I also spend time making silly things like this.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

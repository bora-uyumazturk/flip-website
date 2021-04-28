import React, { MouseEvent } from "react";

const About = () => {
  return (
    <div className="h-full w-full flex flex-row space-x-10 justify-center items-center">
      <img
        className="h-48 w-48 rounded-full border border-black shadow-sm"
        src="bora_pic.jpeg"
      />
      <div className="flex-none flex flex-col justify-between h-48 w-64">
        <p className="text-lg">Hi, I'm Bora</p>
        <p className="text-gray-500">
          I'm a machine learning engineer at{" "}
          <a
            className="hover:underline"
            href="https://www.viaduct.ai"
            target="_blank"
            onClick={(e: MouseEvent) => {
              e.stopPropagation();
            }}
          >
            viaduct.ai
          </a>
          , a startup building machine learning solutions for connected
          vehicles. In my spare time I like to make silly things like this.
        </p>
      </div>
    </div>
  );
};

export default About;

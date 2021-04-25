import React from "react";
import { useSpring, animated } from "react-spring";

function App() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1000,
  });
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <animated.div
        className="flex justify-center items-center h-32 w-64 rounded-md shadow bg-white font-semibold"
        style={props}
      >
        <div>Welcome to the homepage</div>
      </animated.div>
    </div>
  );
}

export default App;

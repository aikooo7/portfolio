"use client";

import Typed from "typed.js";
import React from "react";

export default function Home() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "I am a hobbiest programmer.",
        "I love rust, go, c, etc...",
        "I love doing embedded/low level stuff",
        "I hope you enjoy my portfolio!",
      ],
      typeSpeed: 40,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <main>
      {/* <div className="flex items-center justify-center flex-col"> */}
      {/* </div> */}
      <div className="mx-auto w-1/2 text-center">
        <h1 className="text-3xl mt-5 font-bold">My portfolio</h1>
      </div>
      <div className="w-screen h-screen flex items-center items-center justify-center">
        {/* <div className="absolute top-4 left-1/2 -translate-x-1/2 mx-2">
              <h1 className="font-bold text-center py-2 px-4 text-xl">
                My portfolio
              </h1>
            </div> */}
        <div className="mx-auto w-1/2 text-center">
          <h1 className="text-5xl mb-5">Hello 👋, I&apos;m aikooo7</h1>
          <span ref={el} className="text-3xl" />
        </div>
      </div>
    </main>
  );
}

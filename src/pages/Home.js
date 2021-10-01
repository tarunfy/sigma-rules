import React from "react";

function Home() {
  return (
    <div className="container relative mx-auto py-5 flex flex-col justify-center items-center">
      <h1 className="text-4xl  text-tertiary font-bold mb-2">Sigma Rules</h1>
      <div
        id="list"
        className="container bg-primary 2xl:h-primary lg:h-secondary rounded-lg mx-auto w-3/5 px-3 py-2"
      ></div>
      <button className="absolute right-0 bottom-2 bg-secondary text-tertiary hover:shadow-primary font-bold text-2xl rounded-full py-2 px-4 flex items-center justify-center transition-shadow ease-in-out duration-300">
        +
      </button>
    </div>
  );
}

export default Home;
